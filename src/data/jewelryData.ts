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
export const allProducts: Product[] = [
  // Gold Necklaces
  {
    id: 'gn-1',
    name: 'Kundan Royal Choker Necklace',
    category: 'gold-necklaces',
    description: 'A stellar handcrafted 22K gold choker embellished with premium Kundan stones, uncut diamonds, and rich hanging emerald beads. Perfectly captures royal Nizam grandeur.',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop',
    purity: '22K Gold (91.6% BIS Hallmarked)',
    weight: '48.5 grams',
    rating: 4.9,
    tags: ['Choker', 'Kundan', 'Bridal', 'Royal'],
    isFeatured: true,
  },
  {
    id: 'gn-2',
    name: 'Shimmering Guttapusalu Haram',
    category: 'gold-necklaces',
    description: 'An elegant long necklace embedded with clusters of premium seed pearls, rubies, and emeralds, representing the signature coastal Andhra jewelry style.',
    imageUrl: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=600&auto=format&fit=crop',
    purity: '22K Gold (91.6% BIS Hallmarked)',
    weight: '62.0 grams',
    rating: 5.0,
    tags: ['Haram', 'Guttapusalu', 'Pearl', 'Traditional'],
    isFeatured: true,
  },
  {
    id: 'gn-3',
    name: 'Contemporary Mesh Gold Collar',
    category: 'gold-necklaces',
    description: 'Sleek collar necklet featuring a flexible gold mesh and modern laser-cut abstract leaves. Brings a chic aesthetic for upscale receptions.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
    purity: '22K Gold (91.6% BIS Hallmarked)',
    weight: '24.8 grams',
    rating: 4.7,
    tags: ['Collar', 'Lightweight', 'Modern'],
  },

  // Gold Chains
  {
    id: 'gc-1',
    name: 'Classic Gold Indo-Italian Chain',
    category: 'gold-chains',
    description: 'Unisex durable designer chain featuring intricate interlocking double-loops with both matte and diamond-cut polishes.',
    imageUrl: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop',
    purity: '22K Gold (91.6% BIS Hallmarked)',
    weight: '15.4 grams',
    rating: 4.8,
    tags: ['Indo-Italian', 'Chain', 'Daily Wear'],
  },
  {
    id: 'gc-2',
    name: 'Royal Handcrafted Gold Rope Chain',
    category: 'gold-chains',
    description: 'Thick, flexible rope-twisted design crafted manually, providing ultimate luster and longevity. Best paired with statement gold pendants.',
    imageUrl: '/src/assets/images/jewelry_gold_rope_chain_1781326135254.png',
    purity: '22K Gold (91.6% BIS Hallmarked)',
    weight: '28.0 grams',
    rating: 4.9,
    tags: ['Rope Chain', 'Heavy Wear', 'Unisex'],
  },

  // Bridal Collections
  {
    id: 'bc-1',
    name: 'Grand Bridal Nizam Haram Set',
    category: 'bridal-collections',
    description: 'An ultimate wedding masterpiece. Includes a high choke collar, a heavy long 7-layer haram, matching dynamic jhumkas, waistband (vaddanam), armlets, and hairpins.',
    imageUrl: 'jewelry_hero_banner',
    purity: '22K Gold (91.6% BIS Hallmarked)',
    weight: '185.0 grams (Complete Set)',
    rating: 5.0,
    tags: ['Bridal', 'Haram', 'Nizam', 'Wedding Set'],
    isFeatured: true,
  },
  {
    id: 'bc-2',
    name: 'Royal Laxmi Astha-Vaddanam',
    category: 'bridal-collections',
    description: 'An intricately detailed gold waist belt (Vaddanam) featuring the nine avatars of Goddess Lakshmi carved strictly by master temple artisans.',
    imageUrl: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop',
    purity: '22K Gold (91.6% BIS Hallmarked)',
    weight: '98.5 grams',
    rating: 5.0,
    tags: ['Vaddanam', 'Waistbelt', 'Bridal', 'Laxmi'],
  },

  // Bangles & Bracelets
  {
    id: 'bb-1',
    name: 'Majestic Antique Laxmi Kada',
    category: 'bangles-bracelets',
    description: 'Classic openable heavy gold kada bangle. Adorned with goddess embossing, ruby cabochons, and tiny floral granulation along the rims.',
    imageUrl: '/src/assets/images/jewelry_antique_laxmi_kada_1781326188091.png',
    purity: '22K Gold Antique Finish',
    weight: '38.2 grams',
    rating: 4.9,
    tags: ['Kada', 'Antique', 'Bangle'],
    isFeatured: true,
  },
  {
    id: 'bb-2',
    name: 'Modern Honeycomb Gold Bracelet',
    category: 'bangles-bracelets',
    description: 'Dainty mesh bracelet modeled with interlocking gold hexagons and small, round-brilliant diamond starburst centers.',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop',
    purity: '18K Gold + Certified VVS Diamonds',
    weight: '12.6 grams',
    rating: 4.8,
    tags: ['Bracelet', 'Honeycomb', 'Diamond'],
  },

  // Earrings
  {
    id: 'er-1',
    name: 'Divine Gold Jhumka Earrings',
    category: 'earrings',
    description: 'South Indian traditional temple jhumkas with dancing peacock motifs, emerald highlights, and a gorgeous hanging gold-bead cascade.',
    imageUrl: '/src/assets/images/jewelry_gold_jhumka_earrings_1781326232093.png',
    purity: '22K Gold (91.6% BIS Hallmarked)',
    weight: '18.7 grams',
    rating: 4.9,
    tags: ['Jhumka', 'Peacock', 'Traditional'],
    isFeatured: true,
  },
  {
    id: 'er-2',
    name: 'Luxury Royal Chandbali Drops',
    category: 'earrings',
    description: 'Crescent-moon shaped statement earrings embedded with bright Polki diamonds, custom enamel lining, and natural pearl strings.',
    imageUrl: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop',
    purity: '22K Gold (91.6% BIS Hallmarked)',
    weight: '22.4 grams',
    rating: 4.8,
    tags: ['Chandbalis', 'Polki', 'Statement'],
  },

  // Rings
  {
    id: 'rg-1',
    name: 'Majestic Royal Peacock Signet Ring',
    category: 'rings',
    description: 'An elegant vintage-style signet gold ring featuring micro-carving of a majestic peacock with glowing emerald eye panels.',
    imageUrl: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop',
    purity: '22K Gold (91.6% BIS Hallmarked)',
    weight: '8.5 grams',
    rating: 4.7,
    tags: ['Ring', 'Signet', 'Vintage', 'Peacock'],
  },

  // Diamond Jewelry
  {
    id: 'dj-1',
    name: 'Aura Premium Solitaire Ring',
    category: 'rings',
    description: 'An breathtaking standard in luxurious romance. Hand-selected VVS-Clarity (EF Color) 1.2 Carat solitaire set inside an absolute crown-mount 18K white-gold band.',
    imageUrl: 'jewelry_diamond_ring',
    purity: '18K White Gold & VVS-EF Diamond',
    weight: '1.20 Carat Solitaire',
    rating: 5.0,
    tags: ['Solitaire', 'Ring', 'Diamond', 'Luxury'],
    isFeatured: true,
  },
  {
    id: 'dj-2',
    name: 'Elysian Diamond Tear-Drop Pendant',
    category: 'diamond-jewelry',
    description: 'Fluid gold-droplet framework studded with premium round-cut and baguette diamonds, forming a timeless floating tear-drop shimmer.',
    imageUrl: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop',
    purity: '18K Gold & VVS-EF Certification',
    weight: '1.45 Carats Total',
    rating: 4.9,
    tags: ['Pendant', 'Necklace', 'Diamond', 'Modern'],
    isFeatured: true,
  },

  // Temple Jewelry
  {
    id: 'tj-1',
    name: 'Sacred Ganesha Heritage Pendant',
    category: 'temple-jewelry',
    description: 'A masterpiece heritage coin pendant featuring the auspicious Lord Ganesha surrounded by rubies, handcrafted in rich reddish-gold unique South relic style.',
    imageUrl: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop',
    purity: '22K Gold Antique Relic',
    weight: '14.2 grams',
    rating: 4.9,
    tags: ['Pendant', 'Temples', 'Ganesha', 'Antique'],
  },

  // Kids Jewelry
  {
    id: 'kj-1',
    name: 'Velvet Soft Gold Baby Bangles',
    category: 'kids-jewelry',
    description: 'A pairs of highly-polished smooth baby bangles. Features expansion joints, rounded inner contours, and zero sharpness, completely safe for children.',
    imageUrl: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=600&auto=format&fit=crop',
    purity: '22K Gold (Safe Smooth Edge)',
    weight: '6.5 grams each',
    rating: 4.8,
    tags: ['Kids', 'Bangle', 'Safe Gold'],
  },

  // Customized Jewelry
  {
    id: 'cj-1',
    name: 'Bespoke Personalized Monogram Pendant',
    category: 'customized-jewelry',
    description: 'We draw, 3D render, and print standard/custom script monograms with micro-diamond borders made uniquely for your personal brand or standard initials.',
    imageUrl: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop',
    purity: 'Choose 22K Gold, 18K Gold, or Diamonds',
    weight: 'Made-to-Order',
    rating: 5.5,
    tags: ['Custom', 'Monogram', 'Personalized', '3D Cad'],
  }
];

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
