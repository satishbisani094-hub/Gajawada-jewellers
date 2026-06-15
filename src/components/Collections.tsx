import { useState, useEffect } from 'react';
import { Search, Heart, ShieldCheck, HelpCircle, MessageSquare, X, Tag } from 'lucide-react';
import ImageCarousel from './ImageCarousel';
import { collectionCategories } from '../data/jewelryData';
import { Product } from '../types';

interface CollectionsProps {
  products: Product[];
  shortlist: Product[];
  cart: Product[];
  onToggleShortlist: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  onOpenInquiryModal: (product: Product) => void;
  searchQuery: string;
}

export default function Collections({
  products,
  shortlist,
  onToggleShortlist,
  onAddToCart,
  onOpenInquiryModal,
  searchQuery,
}: CollectionsProps) {
  const [localSearch, setLocalSearch] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // Keep local search sync with global search from navbar
  useEffect(() => {
    if (searchQuery) {
      setLocalSearch(searchQuery);
    }
  }, [searchQuery]);

  // Combine text search and tag filters to update product list
  useEffect(() => {
    let result = products;

    if (localSearch.trim() !== '') {
      const q = localSearch.toLowerCase().trim();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.purity.toLowerCase().includes(q) ||
          (p.tags && p.tags.some(tag => tag.toLowerCase().includes(q)))
      );
    }

    setFilteredProducts(result);
  }, [localSearch, products]);

  // Helper to map template image placeholders to real generated asset paths
  const resolveProductImagePath = (imgUrl: string): string => {
    if (imgUrl === 'jewelry_hero_banner') {
      return '/src/assets/images/jewelry_hero_banner_1781324324478.jpg';
    }
    if (imgUrl === 'jewelry_diamond_ring') {
      return '/src/assets/images/jewelry_diamond_ring_1781324341784.jpg';
    }
    return imgUrl;
  };

  const isShortlisted = (product: Product) => shortlist.some(item => item.id === product.id);

  return (
    <section id="collections" className="py-24 bg-neutral-950 text-white relative">
      {/* Dynamic ambient lights */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-gold-900/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Module Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <span className="font-sans text-[10px] font-bold text-gold-400 uppercase tracking-[0.35em] block mb-2">
              Royal Catalogues
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold tracking-wide text-white">
              Discover Our Collections
            </h2>
            <div className="w-12 h-[2px] bg-gold-500 mt-4"></div>
          </div>

          {/* Quick Search Filtering */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search wedding jewelry, ear stud..."
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full bg-neutral-900 text-sm pl-10 pr-4 py-3 rounded-md border border-gold-900/45 focus:border-gold-500 text-neutral-300 outline-none font-sans"
            />
            <Search className="w-4 h-4 text-gold-400 absolute left-3.5 top-3.5" />
            {localSearch && (
              <button
                onClick={() => setLocalSearch('')}
                className="absolute right-3.5 top-3.5 text-xs text-neutral-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 text-left">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="group bg-neutral-900/80 rounded-lg overflow-hidden border border-neutral-800/80 hover:border-gold-500/40 transition-all duration-300 shadow-xl flex flex-col h-full relative"
                id={`product-card-${p.id}`}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggleShortlist(p);
                  }}
                  className="absolute top-4 right-4 z-20 bg-black/75 p-2 rounded-full border border-gold-900/20 text-neutral-400 hover:text-red-500 hover:scale-105 transition-all duration-200"
                  aria-label="Add to shortlist"
                >
                  <Heart className={`w-4 h-4 ${isShortlisted(p) ? 'text-red-500 fill-red-500' : ''}`} />
                </button>

                <div
                  onClick={() => setSelectedProduct(p)}
                  className="relative aspect-square overflow-hidden bg-neutral-950 cursor-pointer"
                >
                  <img
                    src={resolveProductImagePath(p.imageUrl)}
                    alt={p.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent" />
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-sm border border-gold-400/20 py-0.5 px-2 rounded-sm flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-gold-400" />
                    <span className="text-[9px] font-sans font-bold tracking-wider uppercase text-gold-200">
                      916 Certified
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex gap-2 mb-2 items-center">
                      <span className="text-[10px] font-sans font-extrabold text-gold-500 uppercase tracking-widest bg-gold-950/50 border border-gold-900/30 px-2 py-0.5 rounded">
                        {p.purity}
                      </span>
                      {p.weight && (
                        <span className="text-[10px] font-mono text-neutral-400">
                          {p.weight}
                        </span>
                      )}
                    </div>

                    <h3
                      onClick={() => setSelectedProduct(p)}
                      className="font-serif text-sm md:text-base font-semibold text-white tracking-wide hover:text-gold-300 transition-colors cursor-pointer line-clamp-1 mb-1"
                    >
                      {p.name}
                    </h3>

                    <p className="font-sans text-xs text-neutral-400 line-clamp-2 leading-relaxed mb-4">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800/80 grid grid-cols-2 gap-2 mt-auto">
                    <button
                      onClick={() => setSelectedProduct(p)}
                      className="text-[11px] font-sans font-bold uppercase tracking-wider text-neutral-300 hover:text-white bg-neutral-800/40 hover:bg-neutral-800 py-2 rounded text-center border border-neutral-800"
                    >
                      View Details
                    </button>
                    <button
                        onClick={() => onAddToCart(p)}
                      className="text-[11px] font-sans font-bold uppercase tracking-wider bg-gold-500 text-black hover:bg-gold-400 py-2 rounded text-center transition-colors"
                    >
                        Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-neutral-900/40 p-12 text-center rounded-lg border border-neutral-800 max-w-md mx-auto">
            <HelpCircle className="w-10 h-10 text-gold-400 mx-auto mb-4" />
            <h4 className="font-serif text-lg text-white mb-2 font-bold uppercase tracking-wider">No Items Found</h4>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed">
              We couldn't find any designs matching "{localSearch}". Let us customize a design for you!
            </p>
            <button
              onClick={() => setLocalSearch('')}
              className="mt-6 text-xs text-black bg-gold-500 px-4 py-2 rounded font-sans font-bold uppercase tracking-widest"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* DETAILED INTERACTIVE PRODUCT VISUAL DIALOG */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className="w-full max-w-4xl bg-neutral-950 border border-gold-900/40 rounded-lg overflow-hidden shadow-2xl relative text-left"
            onClick={(e) => e.stopPropagation()}
            id="detail-modal-view"
          >
            {/* Close cross */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-30 bg-black/70 p-2 text-neutral-400 hover:text-white rounded-full border border-neutral-800"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 md:p-8">
              {/* Product Close up Frame */}
              <div className="md:col-span-6 bg-neutral-900 rounded overflow-hidden aspect-square flex items-center justify-center relative">
                <ImageCarousel
                  images={
                    (selectedProduct.imageUrls && selectedProduct.imageUrls.length > 0)
                      ? selectedProduct.imageUrls.map(resolveProductImagePath)
                      : [resolveProductImagePath(selectedProduct.imageUrl)]
                  }
                  className="w-full h-full"
                />
                <span className="absolute bottom-4 left-4 bg-black/80 font-mono text-[9px] font-bold text-gold-300 border border-gold-900/30 py-1 px-3 tracking-wider rounded uppercase">
                  Gajawada Jewellers Genuine Product
                </span>
              </div>

              {/* Product Specifications and metadata details */}
              <div className="md:col-span-6 flex flex-col justify-between py-2 text-left">
                <div>
                  <span className="text-[10px] font-sans font-extrabold text-gold-500 uppercase tracking-[0.25em] block mb-2">
                    {collectionCategories.find(c => c.id === selectedProduct.category)?.name}
                  </span>
                  
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2 leading-tight tracking-wide">
                    {selectedProduct.name}
                  </h3>

                  <div className="flex gap-2 flex-wrap mb-4">
                    <span className="bg-gold-900/30 text-gold-300 border border-gold-500/20 text-[10px] px-2 py-1 rounded font-sans font-bold">
                      {selectedProduct.purity}
                    </span>
                    {selectedProduct.weight && (
                      <span className="bg-neutral-900 text-neutral-300 border border-neutral-800 text-[10px] px-2 py-1 rounded font-mono font-medium">
                        Approx: {selectedProduct.weight}
                      </span>
                    )}
                    {selectedProduct.isBestseller && (
                      <span className="bg-gold-300 text-black text-[10px] px-2 py-1 rounded font-bold uppercase">
                        Bestseller
                      </span>
                    )}
                  </div>
                  {(selectedProduct.price !== undefined || selectedProduct.originalPrice !== undefined) && (
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      {selectedProduct.price !== undefined && (
                        <span className="text-lg font-semibold text-white">₹{selectedProduct.price.toLocaleString('en-IN')}</span>
                      )}
                      {selectedProduct.originalPrice !== undefined && (
                        <span className="text-sm text-neutral-400 line-through">₹{selectedProduct.originalPrice.toLocaleString('en-IN')}</span>
                      )}
                    </div>
                  )}

                  <hr className="border-neutral-900 my-4" />

                  {/* Descriptions block */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans mb-6">
                    {selectedProduct.description}
                  </p>

                  {/* Certification stamps and hallmarks details */}
                  <div className="space-y-3 bg-neutral-900/50 p-4 rounded-md border border-neutral-900 mb-6 text-left">
                    <h4 className="text-[10px] uppercase font-bold tracking-widest text-gold-400 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> Guarantee of Purity
                    </h4>
                    <p className="text-[11px] text-neutral-400 font-sans leading-tight">
                      This product is crafted exactly with <strong>BIS 91.6% (22k) Hallmarked Gold</strong> or laser-certified diamonds (VVS Clarity). It can be customized to any alternative gram weight or size specifications by discussing in store.
                    </p>
                  </div>
                </div>

                {/* Call to Actions layout */}
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => onToggleShortlist(selectedProduct)}
                      className={`flex items-center justify-center gap-2 text-xs font-sans font-bold py-3.5 rounded border tracking-wider uppercase transition-colors inline-block text-center cursor-pointer ${
                        isShortlisted(selectedProduct)
                          ? 'bg-neutral-900 border-red-500/40 text-red-500 hover:bg-neutral-900'
                          : 'bg-neutral-900 border-gold-900/35 text-gold-300 hover:bg-neutral-800'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isShortlisted(selectedProduct) ? 'fill-red-500' : ''}`} />
                      {isShortlisted(selectedProduct) ? 'Shortlisted' : 'Shortlist Item'}
                    </button>

                    <button
                      onClick={() => {
                        onOpenInquiryModal(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="text-xs font-sans font-bold bg-gold-400 hover:bg-gold-500 text-black py-3.5 rounded tracking-wider uppercase transition-colors"
                    >
                      Send Inquiry
                    </button>
                  </div>

                  {/* Immediate WhatsApp trigger */}
                  <a
                    href={`https://wa.me/918919329919?text=Hi%20Gajawada%20Jewellers,%20I%20saw%20your%2520beautiful%2520'${encodeURIComponent(selectedProduct.name)}'%2520online%2520and%2520would%2520like%2520to%2520get%2520a%2520price%2520quote%2520for%2520it%2520at%2520your%2520Boduppal%2520showroom.%2520Details%2520-%2520Purity:%2520${encodeURIComponent(selectedProduct.purity)}%2520Weight:%2520${encodeURIComponent(selectedProduct.weight || 'As requested')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-black text-xs font-sans font-bold py-3 px-4 rounded w-full transition-colors text-center"
                  >
                    <MessageSquare className="w-4 h-4" /> Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
