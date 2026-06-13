import { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, AlertCircle, PhoneCall, HelpCircle } from 'lucide-react';
import { Product } from '../types';

interface VirtualConsultantProps {
  products: Product[];
  onOpenInquiryModal: (product: Product) => void;
}

export default function VirtualConsultant({ products, onOpenInquiryModal }: VirtualConsultantProps) {
  const [step, setStep] = useState<number>(1);
  const [occasion, setOccasion] = useState<string>('');
  const [neckline, setNeckline] = useState<string>('');
  const [outfitColor, setOutfitColor] = useState<string>('');
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [stylingTip, setStylingTip] = useState<string>('');

  // 1. Setup Quiz Options
  const occasions = [
    { id: 'bridal', title: 'Grand Bridal/Wedding', desc: 'Heavy luxury statements' },
    { id: 'festive', title: 'Festive & Traditional', desc: 'Timeless cultural relics' },
    { id: 'reception', title: 'Reception & Cocktail Party', desc: 'Modern glowing gemstones' },
    { id: 'daily', title: 'Daily & Office Wear', desc: 'Lightweight sophisticated designs' },
  ];

  const necklines = [
    { id: 'vneck', title: 'V-Neck or Deep Collar', desc: 'Points attention downward' },
    { id: 'highcollar', title: 'High Neck or Round Collar', desc: 'Best with statement chokers' },
    { id: 'offshoulder', title: 'Off-shoulder or Sweetheart', desc: 'Complements luxury drops' },
    { id: 'traditional', title: 'Traditional Silk Saree drape', desc: 'Suits classic harams' },
  ];

  const outfitColors = [
    { id: 'crimson', title: 'Crimson/Red/Maroon', colorClass: 'bg-red-800' },
    { id: 'emerald', title: 'Emerald Green/Teal', colorClass: 'bg-emerald-800' },
    { id: 'golden', title: 'Golden Yellow/Kanchi Silk', colorClass: 'bg-amber-500' },
    { id: 'pastel', title: 'Pastel Peach/Cream/White', colorClass: 'bg-amber-100 border-neutral-300' },
  ];

  // 2. Compute fitting algorithm
  const handleCalculateMatch = () => {
    let matches: Product[] = [];
    let tip = '';

    if (occasion === 'bridal') {
      matches = products.filter(p => p.category === 'bridal-collections' || p.tags?.includes('Kundan'));
      tip = 'For a grand bridal look, pair a solid gold choke collar with a layered long Haram. Red or golden silk sarees look best accented with heavy Kundan and rubies.';
    } else if (occasion === 'festive') {
      matches = products.filter(p => p.category === 'temple-jewelry' || p.tags?.includes('Traditional'));
      tip = 'Traditional gold temple collections matching peacock motifs perfectly echo heritage. Choose warm gold-polished earrings to emphasize standard drape borders.';
    } else if (occasion === 'reception') {
      matches = products.filter(p => p.category === 'diamond-jewelry' || p.category === 'rings');
      tip = 'Reception gowns and cocktail pieces stand out with cold shimmering solitaires and certified diamonds. An off-shoulder drape looks stunning with luxury drops.';
    } else {
      matches = products.filter(p => p.tags?.includes('Daily Wear') || p.category === 'kids-jewelry' || p.tags?.includes('Lightweight'));
      tip = 'Daily workspace wear require subtle sophistication. Choose sleek interlocking neck-chains or simple stackable bands to ensure effortless grace.';
    }

    // fallback in case no categories match index limits
    if (matches.length === 0) {
      matches = allProducts.slice(0, 2);
    } else {
      matches = matches.slice(0, 3); // Take top 3 recommendations
    }

    setRecommendations(matches);
    setStylingTip(tip);
    setStep(4);
  };

  const resetQuiz = () => {
    setStep(1);
    setOccasion('');
    setNeckline('');
    setOutfitColor('');
    setRecommendations([]);
    setStylingTip('');
  };

  return (
    <section className="py-24 bg-[#FAF8F4] text-neutral-900 border-b border-gold-200">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        
        {/* Module Header */}
        <div className="text-center mb-12">
          <span className="font-sans text-[10px] font-bold text-gold-600 uppercase tracking-[0.35em] block mb-2">
            Interactive Experience
          </span>
          <h2 className="font-serif text-2xl md:text-3.5xl font-extrabold tracking-wide text-neutral-950">
            The Virtual Jewelry Stylist
          </h2>
          <p className="font-sans text-xs text-neutral-500 mt-2 max-w-lg mx-auto leading-relaxed">
            Not sure which necklace matches your wedding gown or festive saree? Answer 3 quick style questions and let our virtual stylist build your set.
          </p>
          <div className="w-12 h-[2px] bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* Styling Quiz Panel container */}
        <div className="bg-white rounded-xl border border-gold-200/40 shadow-2xl p-6 md:p-10 text-left min-h-[400px] flex flex-col justify-between">
          
          {/* Progress Indicators */}
          {step < 4 && (
            <div className="flex items-center gap-2 mb-8 select-none">
              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded tracking-widest ${step >= 1 ? 'bg-gold-500 text-black' : 'bg-neutral-100 text-neutral-400'}`}>1. Occasion</span>
              <span className="h-[1px] bg-neutral-200 w-6"></span>
              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded tracking-widest ${step >= 2 ? 'bg-gold-500 text-black' : 'bg-neutral-100 text-neutral-400'}`}>2. Neckline</span>
              <span className="h-[1px] bg-neutral-200 w-6"></span>
              <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded tracking-widest ${step >= 3 ? 'bg-gold-500 text-black' : 'bg-neutral-100 text-neutral-400'}`}>3. Apparel Color</span>
            </div>
          )}

          {/* STEP 1: Occasion selector */}
          {step === 1 && (
            <div>
              <h3 className="font-serif text-lg md:text-xl font-bold text-neutral-950 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-500" />
                Select the primary occasion:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {occasions.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => {
                      setOccasion(o.id);
                      setStep(2);
                    }}
                    className={`p-5 rounded-lg border text-left transition-all hover:border-gold-500/80 hover:bg-gold-50/10 cursor-pointer ${
                      occasion === o.id ? 'border-gold-500 bg-gold-50/20' : 'border-neutral-200'
                    }`}
                  >
                    <h4 className="font-serif text-sm font-bold text-neutral-900 uppercase tracking-widest mb-1">{o.title}</h4>
                    <p className="text-xs text-neutral-400 font-sans leading-tight">{o.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Neckline selector */}
          {step === 2 && (
            <div>
              <h3 className="font-serif text-lg md:text-xl font-bold text-neutral-950 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-500" />
                Select your outfit neckline or face shape:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {necklines.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => {
                      setNeckline(n.id);
                      setStep(3);
                    }}
                    className={`p-5 rounded-lg border text-left transition-all hover:border-gold-500/80 hover:bg-gold-50/10 cursor-pointer ${
                      neckline === n.id ? 'border-gold-500 bg-gold-50/20' : 'border-neutral-200'
                    }`}
                  >
                    <h4 className="font-serif text-sm font-bold text-neutral-900 uppercase tracking-widest mb-1">{n.title}</h4>
                    <p className="text-xs text-neutral-400 font-sans leading-tight">{n.desc}</p>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(1)}
                className="mt-6 text-xs text-neutral-500 font-sans hover:text-black flex items-center gap-1 cursor-pointer"
              >
                &larr; Back to Occasion
              </button>
            </div>
          )}

          {/* STEP 3: Color selection & Calc match */}
          {step === 3 && (
            <div>
              <h3 className="font-serif text-lg md:text-xl font-bold text-neutral-950 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-500" />
                Select your outfit primary color palette:
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {outfitColors.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setOutfitColor(c.id)}
                    className={`p-4 rounded-lg border text-center transition-all hover:border-gold-500/80 cursor-pointer flex flex-col items-center gap-3 ${
                      outfitColor === c.id ? 'border-gold-500 bg-gold-50/10' : 'border-neutral-200 bg-white'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full ${c.colorClass} shadow-inner shrink-0`}></div>
                    <span className="text-xs font-sans font-bold text-neutral-700 tracking-wider">
                      {c.title}
                    </span>
                  </button>
                ))}
              </div>

              <div className="flex justify-between items-center mt-6">
                <button
                  onClick={() => setStep(2)}
                  className="text-xs text-neutral-500 font-sans hover:text-black flex items-center gap-1 cursor-pointer"
                >
                  &larr; Back to Neckline
                </button>

                <button
                  disabled={!outfitColor}
                  onClick={handleCalculateMatch}
                  className={`inline-flex items-center gap-1 p-3 px-6 text-xs font-sans font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                    outfitColor
                      ? 'bg-gold-500 text-black shadow-lg hover:bg-gold-600'
                      : 'bg-neutral-100 text-neutral-400 cursor-not-allowed'
                  }`}
                >
                  Match Best Jewelry <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Beautiful styling recommendations */}
          {step === 4 && (
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6 border-b border-neutral-100 pb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-neutral-950 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-gold-500 animate-spin" /> Your Curated Styling Suggestions
                  </h3>
                  <p className="text-xs text-neutral-500 font-sans mt-1">
                    Matching Occasion: <strong className="capitalize text-neutral-800">{occasion}</strong> with <strong className="capitalize text-neutral-800">{neckline}</strong> silhouette and <strong className="capitalize text-neutral-800">{outfitColor}</strong> outfit.
                  </p>
                </div>

                <button
                  onClick={resetQuiz}
                  className="text-xs font-sans font-bold uppercase text-gold-600 hover:text-gold-700 flex items-center gap-1 bg-gold-50 p-2 rounded cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Re-take Quiz
                </button>
              </div>

              {/* Designer Tip box */}
              <div className="bg-amber-100/40 p-4 rounded-md border border-amber-200/50 flex items-start gap-3 mb-8 text-neutral-800 text-xs sm:text-sm font-sans leading-relaxed text-left">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold text-neutral-950">Stylist Professional Tip: </strong>
                  {stylingTip}
                </div>
              </div>

              {/* Recommended items cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                {recommendations.map((p) => {
                  // image resolver helper
                  const resolveImg = p.imageUrl === 'jewelry_hero_banner'
                    ? '/src/assets/images/jewelry_hero_banner_1781324324478.jpg'
                    : p.imageUrl === 'jewelry_diamond_ring'
                    ? '/src/assets/images/jewelry_diamond_ring_1781324341784.jpg'
                    : p.imageUrl;

                  return (
                    <div
                      key={p.id}
                      className="bg-[#FAF8F4] border border-gold-200/30 rounded-lg overflow-hidden flex flex-col justify-between h-full hover:shadow-lg transition-shadow"
                    >
                      <div className="aspect-square w-full relative bg-neutral-900 object-cover">
                        <img
                          src={resolveImg}
                          alt={p.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 flex-grow flex flex-col justify-between">
                        <div>
                          <span className="text-[9px] font-mono font-medium text-neutral-500 uppercase block mb-1">
                            {p.purity}
                          </span>
                          <h4 className="font-serif text-xs font-bold text-neutral-900 line-clamp-1 mb-2">
                            {p.name}
                          </h4>
                        </div>
                        <button
                          onClick={() => onOpenInquiryModal(p)}
                          className="text-[10px] font-sans font-extrabold uppercase text-center block text-gold-700 hover:text-gold-800 transition-colors w-full bg-gold-100 hover:bg-gold-200/40 py-2 rounded-md font-bold mt-2"
                        >
                          Send Store Enquiry
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
