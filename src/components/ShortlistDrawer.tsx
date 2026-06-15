import { X, Trash2, MessageSquare, ArrowRight, Sparkles, Smile } from 'lucide-react';
import { Product } from '../types';

interface ShortlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  shortlist: Product[];
  onRemoveFromShortlist: (product: Product) => void;
  onOpenInquiryModal: (product?: Product) => void;
}

export default function ShortlistDrawer({
  isOpen,
  onClose,
  shortlist,
  onRemoveFromShortlist,
  onOpenInquiryModal,
}: ShortlistDrawerProps) {
  if (!isOpen) return null;

  // Compile standard shortlist inquiry text for a consolidated WhatsApp message
  const triggerConsolidatedWhatsAppInquiry = () => {
    if (shortlist.length === 0) return;

    let itemsText = shortlist
      .map((item, index) => `${index + 1}. ${item.name} (${item.purity}, Weight: ${item.weight || 'Custom'})`)
      .join('%0A');

    const message = `Hi Gajawada Jewellers! I am browsing your online showroom in Hyderabad and have shortlisted the following beautiful items for my wedding/jewellery collection:%0A%0A${itemsText}%0A%0ACould we please schedule an in-store appointment and provide a customized quote for these ornaments? Thank you!`;
    
    window.open(`https://wa.me/918919329919?text=${message}`, '_blank');
  };

  const resolveImagePath = (url: string) => {
    if (url === 'jewelry_hero_banner') {
      return '/src/assets/images/jewelry_hero_banner_1781324324478.jpg';
    }
    if (url === 'jewelry_diamond_ring') {
      return '/src/assets/images/jewelry_diamond_ring_1781324341784.jpg';
    }
    return url;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      {/* Click outside backdrop close trigger */}
      <div className="absolute inset-0 z-0" onClick={onClose} />

      {/* Drawer Card */}
      <div className="relative z-10 w-full max-w-md bg-neutral-950 border-l border-gold-900/30 h-full shadow-2xl flex flex-col justify-between p-6 animate-slideLeft">
        
        {/* Header Block */}
        <div>
          <div className="flex items-center justify-between border-b border-neutral-900 pb-4 mb-6">
            <div className="flex items-center gap-2 text-left">
              <Sparkles className="w-5 h-5 text-gold-400" />
              <h3 className="font-serif text-lg font-bold text-white tracking-wider uppercase">My Shortlist</h3>
            </div>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white p-1 rounded-full border border-neutral-800"
              aria-label="Close drawing drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="font-sans text-[11px] text-neutral-400 leading-tight text-left mb-6">
            Curate wedding or festival sets and send them directly to our store manager to evaluate exact pricing calculations.
          </p>

          {/* List content panel container */}
          {shortlist.length > 0 ? (
            <div className="space-y-4 max-h-[55vh] overflow-y-auto pr-1">
              {shortlist.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 bg-neutral-900/40 p-3 rounded-lg border border-neutral-900 text-left relative group hover:border-gold-900/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded overflow-hidden aspect-square shrink-0 bg-neutral-950 border border-neutral-800">
                    <img
                      src={resolveImagePath(item.imageUrl)}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow select-none">
                    <h4 className="text-xs font-serif font-semibold text-white line-clamp-1 pr-6">{item.name}</h4>
                    <p className="text-[10px] font-sans text-gold-400 mt-0.5">{item.purity}</p>
                    {item.weight && (
                      <p className="text-[9px] font-mono text-neutral-400 mt-0.5">Weight: {item.weight}</p>
                    )}
                  </div>

                  {/* Remove bin button */}
                  <button
                    onClick={() => onRemoveFromShortlist(item)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-neutral-500 hover:text-red-500 hover:bg-red-500/10 rounded transition-colors"
                    aria-label={`Remove ${item.name} from shortlist`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-neutral-900/20 rounded border border-dashed border-neutral-900">
              <Smile className="w-10 h-10 text-neutral-500 mx-auto mb-4" />
              <h4 className="font-serif text-sm font-bold text-neutral-400 uppercase tracking-widest mb-1">Your Shortlist is Empty</h4>
              <p className="text-[11px] text-neutral-500 max-w-xs mx-auto leading-relaxed">
                Explore our catalog page, view item detail cards, and tap the heart icon to shortlist gold masterpieces.
              </p>
              <button
                onClick={onClose}
                className="mt-6 text-[10px] font-sans font-extrabold uppercase bg-gold-500 text-black px-4 py-2 rounded-sm tracking-wider cursor-pointer"
              >
                Start Browsing
              </button>
            </div>
          )}
        </div>

        {/* Footer Panel Action triggers */}
        {shortlist.length > 0 && (
          <div className="border-t border-neutral-900 pt-6 space-y-3">
            <div className="flex gap-2 text-xs font-sans font-bold text-neutral-350 tracking-wider uppercase mb-1">
              <span>Total Curation:</span>
              <span className="text-gold-200">{shortlist.length} premium pieces</span>
            </div>

            <button
              onClick={triggerConsolidatedWhatsAppInquiry}
              className="w-full inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-black text-xs font-sans font-bold py-3.5 rounded tracking-wide uppercase transition-colors text-center cursor-pointer"
              id="shortlist-whatsapp-bulk-btn"
            >
              <MessageSquare className="w-4 h-4" /> Send Set to WhatsApp
            </button>

            <button
              onClick={() => {
                onOpenInquiryModal();
                onClose();
              }}
              className="w-full text-xs font-sans font-bold text-white hover:text-gold-300 bg-neutral-900 hover:bg-neutral-800 border border-gold-900/30 py-3 rounded text-center tracking-wide uppercase transition-colors"
            >
              Book Store Slot Appointment
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
