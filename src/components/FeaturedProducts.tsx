import { ArrowRight, Star, Heart, Check, HelpCircle } from 'lucide-react';
import { Product } from '../types';

interface FeaturedProductsProps {
  products: Product[];
  shortlist: Product[];
  onToggleShortlist: (product: Product) => void;
  onOpenInquiryModal: (product: Product) => void;
}

export default function FeaturedProducts({
  products,
  shortlist,
  onToggleShortlist,
  onOpenInquiryModal,
}: FeaturedProductsProps) {
  
  // Maps placeholder names to absolute generated file paths
  const resolveImagePath = (url: string) => {
    if (url === 'jewelry_hero_banner') {
      return '/src/assets/images/jewelry_hero_banner_1781324324478.jpg';
    }
    if (url === 'jewelry_diamond_ring') {
      return '/src/assets/images/jewelry_diamond_ring_1781324341784.jpg';
    }
    return url;
  };

  // Debug: log image URLs to help diagnose white/blank image issues
  // Remove logs after debugging
  console.debug('FeaturedProducts image paths', products.map(p => ({ id: p.id, imageUrl: p.imageUrl, resolved: resolveImagePath(p.imageUrl) })));

  const isShortlisted = (product: Product) => shortlist.some(item => item.id === product.id);

  return (
    <section className="py-24 bg-[#FAF8F4] text-neutral-900 border-t border-gold-200/45">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-sans text-[10px] font-bold text-gold-600 uppercase tracking-[0.35em] block mb-2">
            Signature Showpieces
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-neutral-950 tracking-wide">
            The Masterpiece Collection
          </h2>
          <p className="font-sans text-xs md:text-sm text-neutral-500 mt-2">
            A small select preview of our boutique jewelry designs, handcrafted in limited numbers for collectors of pure elegance.
          </p>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* Featured Products Layout: Two column spotlight split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
          {products.filter((p) => p.isFeatured).map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-xl overflow-hidden border border-gold-200/30 shadow-xl hover:shadow-2xl transition-all duration-300 grid grid-cols-1 md:grid-cols-12"
            >
              {/* Image Frame */}
              <div className="md:col-span-5 relative aspect-square md:aspect-auto bg-neutral-900 min-h-[250px]">
                <img
                  src={resolveImagePath(p.imageUrl)}
                  alt={p.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[5%] hover:scale-105 hover:grayscale-0 transition-all duration-500"
                />
                <span className="absolute top-4 left-4 z-10 bg-gold-500 text-black text-[9px] font-sans font-bold uppercase py-1 px-2.5 tracking-wider rounded-sm shadow-md">
                  Spotlight
                </span>
                
                {/* Shortlist button */}
                <button
                  onClick={() => onToggleShortlist(p)}
                  className="absolute bottom-4 right-4 z-10 bg-neutral-900/90 hover:bg-neutral-900 border border-gold-900/30 p-2 rounded-full text-neutral-400 hover:text-red-500 transition-all shadow"
                  aria-label="Add to shortlist"
                >
                  <Heart className={`w-4 h-4 ${isShortlisted(p) ? 'text-red-500 fill-red-500' : ''}`} />
                </button>
              </div>

              {/* Product Specifications */}
              <div className="md:col-span-7 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex gap-2 mb-2 items-center">
                    <span className="text-[9px] font-sans font-bold bg-gold-550 border border-gold-400/20 px-2 py-0.5 rounded text-gold-700 tracking-wider">
                      {p.purity}
                    </span>
                    {p.weight && (
                      <span className="font-mono text-[10px] text-neutral-400 font-semibold">{p.weight}</span>
                    )}
                  </div>

                  <h3 className="font-serif text-lg font-bold text-neutral-950 tracking-wide line-clamp-1 mb-2">
                    {p.name}
                  </h3>

                  <p className="font-sans text-xs text-neutral-500 leading-relaxed mb-4">
                    {p.description}
                  </p>

                  {/* Rating / trust indicator */}
                  <div className="flex items-center gap-1.5 mb-4">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-gold-400 text-gold-450" />
                      ))}
                    </div>
                    <span className="text-[10px] font-sans font-bold uppercase text-neutral-500">
                      Hyderabad Favorite
                    </span>
                  </div>

                  {/* Bullet features */}
                  <div className="space-y-1 text-left">
                    <div className="flex items-center gap-2 text-[11px] text-neutral-600 font-sans">
                      <Check className="w-3.5 h-3.5 text-gold-600" />
                      <span>Certified 100% Conflict-free gems</span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-neutral-600 font-sans">
                      <Check className="w-3.5 h-3.5 text-gold-600" />
                      <span>Includes custom luxury storage box</span>
                    </div>
                  </div>
                </div>

                {/* Engagement CTAs */}
                <div className="pt-6 border-t border-neutral-100 flex items-center justify-between gap-4 mt-6">
                  <a
                    href="#collections"
                    className="text-xs font-sans font-bold text-neutral-500 hover:text-gold-600 transition-colors uppercase tracking-widest flex items-center gap-1"
                  >
                    All Items <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onOpenInquiryModal(p)}
                    className="text-xs font-sans font-bold bg-neutral-950 hover:bg-neutral-800 text-white px-4 py-2.5 rounded tracking-wide uppercase transition-colors"
                  >
                    Request Quote
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
