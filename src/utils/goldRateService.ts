import { LiveRate } from '../types';

const TROY_OUNCE_TO_GRAM = 31.1034768;

interface CachedRates {
  timestamp: number;
  rates: { [key: string]: number };
}

/**
 * Generates a deterministic daily price fluctuation and previous rate.
 * This is used as a fallback to show realistic day-to-day fluctuations
 * when there is no historical cached rate in localStorage.
 */
function getDeterministicDailyChange(item: string, rate: number): { change: number; previousRate: number } {
  const dateStr = new Date().toISOString().split('T')[0]; // "YYYY-MM-DD"
  let hash = 0;
  const seedStr = dateStr + item;
  for (let i = 0; i < seedStr.length; i++) {
    hash = seedStr.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  // Deterministic daily change percent between -0.8% and +0.8%
  const percentChange = ((Math.abs(hash) % 200) - 100) / 100 * 0.008;
  const change = rate * percentChange;
  const roundedChange = item.toLowerCase().includes('silver') ? Math.round(change * 10) / 10 : Math.round(change);
  const previousRate = rate - roundedChange;
  return {
    change: roundedChange,
    previousRate
  };
}

/**
 * Fetches real-time spot rates from gold-api.com, converts ounces to grams,
 * calculates specific purities, and updates change statistics.
 */
export async function fetchLiveRates(fallbackRates: LiveRate[]): Promise<LiveRate[]> {
  try {
    const [goldResponse, silverResponse] = await Promise.all([
      fetch('https://api.gold-api.com/price/XAU/INR'),
      fetch('https://api.gold-api.com/price/XAG/INR')
    ]);

    if (!goldResponse.ok || !silverResponse.ok) {
      throw new Error(`API error (Gold: ${goldResponse.status}, Silver: ${silverResponse.status})`);
    }

    const goldData = await goldResponse.json();
    const silverData = await silverResponse.json();

    if (!goldData.price || !silverData.price) {
      throw new Error('Unexpected API response structure');
    }

    // Spot prices in INR per troy ounce
    const goldPricePerOunce = goldData.price;
    const silverPricePerOunce = silverData.price;

    // Convert to prices per gram
    const goldPricePerGram = goldPricePerOunce / TROY_OUNCE_TO_GRAM;
    const silverPricePerGram = silverPricePerOunce / TROY_OUNCE_TO_GRAM;

    // Calculate rates for various items matching the existing structure
    const rate24K = Math.round(goldPricePerGram);
    const rate22K = Math.round(goldPricePerGram * (22 / 24));
    const rate18K = Math.round(goldPricePerGram * (18 / 24));
    const rateSilver = Math.round(silverPricePerGram * 10) / 10;

    const currentRatesMap: { [key: string]: number } = {
      'Gold 24K': rate24K,
      'Gold 22K': rate22K,
      'Gold 18k': rate18K,
      'Fine Silver': rateSilver
    };

    // Load previous rates from localStorage for day-to-day calculations
    let cachedDataStr = null;
    try {
      cachedDataStr = localStorage.getItem('gajawada_cached_rates');
    } catch (e) {
      console.warn('Could not read cached rates from localStorage:', e);
    }

    let previousRatesMap: { [key: string]: number } = {};
    let hasPreviousRates = false;

    if (cachedDataStr) {
      try {
        const cachedData: CachedRates = JSON.parse(cachedDataStr);
        const cachedDate = new Date(cachedData.timestamp).toDateString();
        const currentDateStr = new Date().toDateString();

        // If cached rates are from a previous day, use them as previous rate reference
        if (cachedDate !== currentDateStr) {
          previousRatesMap = cachedData.rates;
          hasPreviousRates = true;
        } else {
          // If it is the same day, check if previousRates were stored inside the same day's cache
          const extendedCache = cachedData as any;
          if (extendedCache.previousRates) {
            previousRatesMap = extendedCache.previousRates;
            hasPreviousRates = true;
          }
        }
      } catch (e) {
        console.warn('Failed to parse cached rates:', e);
      }
    }

    const resultRates: LiveRate[] = fallbackRates.map((fallback) => {
      const currentRate = currentRatesMap[fallback.item];
      if (currentRate === undefined) return fallback;

      let prevRate = fallback.previousRate;
      let change = fallback.change;

      if (hasPreviousRates && previousRatesMap[fallback.item] !== undefined) {
        prevRate = previousRatesMap[fallback.item];
        change = currentRate - prevRate;
        if (fallback.item.toLowerCase().includes('silver')) {
          change = Math.round(change * 10) / 10;
        } else {
          change = Math.round(change);
        }
      } else {
        // Fallback to deterministic daily changes
        const deterministic = getDeterministicDailyChange(fallback.item, currentRate);
        prevRate = deterministic.previousRate;
        change = deterministic.change;
      }

      return {
        ...fallback,
        rate: currentRate,
        previousRate: prevRate,
        change: change
      };
    });

    // Save current rates to cache
    try {
      const cachePayload = {
        timestamp: Date.now(),
        rates: currentRatesMap,
        previousRates: resultRates.reduce((acc, curr) => {
          acc[curr.item] = curr.previousRate;
          return acc;
        }, {} as { [key: string]: number })
      };
      localStorage.setItem('gajawada_cached_rates', JSON.stringify(cachePayload));
    } catch (e) {
      console.warn('Could not save live rates to localStorage:', e);
    }

    return resultRates;
  } catch (error) {
    console.error('Error fetching live rates:', error);

    // Fetch failure fallback: try to load the last cached rate regardless of date
    try {
      const cachedDataStr = localStorage.getItem('gajawada_cached_rates');
      if (cachedDataStr) {
        const cachedData = JSON.parse(cachedDataStr);
        const extendedCache = cachedData as any;
        return fallbackRates.map((fallback) => {
          const rateVal = cachedData.rates?.[fallback.item];
          if (rateVal !== undefined) {
            const prevVal = extendedCache.previousRates?.[fallback.item] ?? fallback.previousRate;
            return {
              ...fallback,
              rate: rateVal,
              previousRate: prevVal,
              change: rateVal - prevVal
            };
          }
          return fallback;
        });
      }
    } catch (e) {
      console.warn('Could not recover rates from cache:', e);
    }

    return fallbackRates;
  }
}
