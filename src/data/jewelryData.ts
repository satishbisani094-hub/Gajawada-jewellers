import { Product, CollectionCategory, Testimonial, LiveRate, SpecialService } from '../types';

/**
 * Dynamic Gold & Silver Rates representing professional store rates in Hyderabad (Boduppal)
 */
export const liveRates: LiveRate[] = [
  { item: 'Gold 24K', purity: '99.9% Pure Gold', rate: 12982, previousRate: 12987, change: -5, unit: 'per gram' },
  { item: 'Gold 22K', purity: '91.6% BIS Hallmarked', rate: 11900, previousRate: 11964, change: -64, unit: 'per gram' },
  { item: 'Gold 18k', purity: '75.0% Standard Gold', rate: 9737, previousRate: 9745, change: -8, unit: 'per gram' },
  { item: 'Fine Silver', purity: '99.9% Premium Silver', rate: 209.7, previousRate: 208.1, change: 1.6, unit: 'per gram' },
];

/**
 * All categories requested by the user
 */
export const collectionCategories: CollectionCategory[] = [
  {
    id: 'gold-necklaces',
    name: 'Gold Necklaces',
    slug: 'gold-necklaces',
    description: 'Chokers, collar sets, and long harams handcrafted with flawless precision.',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop',
    count: 24,
  },
  {
    id: 'gold-chains',
    name: 'Gold Chains',
    slug: 'gold-chains',
    description: 'Daily wear lightweight chains, unisex designs, and statement heavy neck chains.',
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop',
    count: 18,
  },
  {
    id: 'bridal-collections',
    name: 'Bridal Collections',
    slug: 'bridal-collections',
    description: 'Exquisite heavy wedding sets, waistbands (vaddanams), and head accessories.',
    imageUrl: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=600&auto=format&fit=crop',
    count: 12,
  },
  {
    id: 'bangles-bracelets',
    name: 'Bangles & Bracelets',
    slug: 'bangles-bracelets',
    description: 'Traditional gold kada bangles, royal kangan, and sleek modern luxury bracelets.',
    imageUrl: 'https://images.unsplash.com/photo-1611085583191-a3b1a1a27db2?q=80&w=600&auto=format&fit=crop',
    count: 32,
  },
  {
    id: 'earrings',
    name: 'Earrings',
    slug: 'earrings',
    description: 'Stunning jhumkas, chandbalis, diamond studs, and elegant light-weight drops.',
    imageUrl: 'https://images.unsplash.com/photo-1635767790038-345a77ddb49e?q=80&w=600&auto=format&fit=crop',
    count: 45,
  },
  {
    id: 'rings',
    name: 'Rings',
    slug: 'rings',
    description: 'Elegant engagement bands, traditional solitaire rings, and cocktail gold masterpieces.',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop',
    count: 29,
  },
  {
    id: 'diamond-jewelry',
    name: 'Diamond Jewelry',
    slug: 'diamond-jewelry',
    description: 'VVS-EF certified dazzling diamond jewelry designs, from necklaces to modular rings.',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop',
    count: 15,
  },
  {
    id: 'temple-jewelry',
    name: 'Temple Jewelry',
    slug: 'temple-jewelry',
    description: 'Antiqued finish jewelry representing gods, goddesses, and ancient Indian art.',
    imageUrl: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop',
    count: 14,
  },
  {
    id: 'kids-jewelry',
    name: 'Kids Jewelry',
    slug: 'kids-jewelry',
    description: 'Delicate, safe, smooth-edged waist-threads, chains, and bracelets for little ones.',
    imageUrl: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=600&auto=format&fit=crop',
    count: 10,
  },
  {
    id: 'customized-jewelry',
    name: 'Customized Jewelry',
    slug: 'customized-jewelry',
    description: 'Bespoke designs drawn, modeled, and handcrafted precisely to match your imagination.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
    count: 8,
  },
  {
    id: 'silver-jewelry',
    name: 'Silver Jewelry',
    slug: 'silver-jewelry',
    description: 'Elegant sterling silver articles, anklets, rings, and custom silverware.',
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop',
    count: 14,
  },
];

/**
 * Full catalogue of luxury products
 */
export const allProducts: Product[] = [];

export const featuredProducts = allProducts.filter(p => p.isFeatured);

/**
 * Premium services offered by Gajawada Jewellers
 */
export const services: SpecialService[] = [
  {
    id: 'service-custom',
    title: 'Custom Jewelry Design',
    description: 'Transform your dream ornament into a real heirloom. We sketch, create 3D CAD mockups, and handcast gold with immaculate precision.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
    iconName: 'PenTool',
  },
  {
    id: 'service-bridal',
    title: 'Bridal Jewelry Consultation',
    description: 'Private in-store consultations with visual dress pairings. Let us design matching neckpieces, waistband (vaddanams), and ornaments for your special day.',
    imageUrl: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=600&auto=format&fit=crop',
    iconName: 'Sparkles',
  },
  {
    id: 'service-exchange',
    title: 'Old Gold Exchange',
    description: 'Exchange your heritage old gold ornaments for fresh sparkling certified designs with maximum valuation and transparent purity testing.',
    imageUrl: 'https://images.unsplash.com/photo-1611085583191-a3b1a1a27db2?q=80&w=600&auto=format&fit=crop',
    iconName: 'RefreshCw',
  },
  {
    id: 'service-polishing',
    title: 'Repair, Polishing & Care',
    description: 'Bring the original sparkling diamond and gold shine back. Our cutting-edge sonic baths and laser repair restores micro-detailing safely.',
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop',
    iconName: 'Flame',
  },
  {
    id: 'service-packaging',
    title: 'Signature Gift Packaging',
    description: 'Gajawada customized premium packaging. Velvet boxes, customized wax-sealed certificate cards, and customized gold-foiled bags.',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop',
    iconName: 'Gift',
  },
];

/**
 * Google and Local Verified Reviews (Hyderabad Clients)
 */
export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Anjali Reddy',
    location: 'Boduppal, Hyderabad',
    rating: 5,
    review: 'Purchased my complete bridal haram and jhumkas from Gajawada Jewellers! Their service is outstanding, and the designs are extremely unique compared to giant brands. Very trustworthy and transparent gold checking.',
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop',
    date: '2 months ago',
  },
  {
    id: 't-2',
    name: 'Srinivas Rao G.',
    location: 'IICT Colony, Hyderabad',
    rating: 5,
    review: 'I have been a loyal customer of Gajawada Jewellers for years. Excellent collection of lightweight chains and customized rings. The purity is always BIS certified 916 and pricing is very honest.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
    date: '1 month ago',
  },
  {
    id: 't-3',
    name: 'Prathyusha B.',
    location: 'Hanuman Nagar Colony, Hyderabad',
    rating: 5,
    review: 'Extremely content with the customized gold bracelet I ordered for my son! They provided custom CAD sketches first and built it exactly like the photo. Beautiful finish and great craftsmanship!',
    avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop',
    date: '3 weeks ago',
  },
];
