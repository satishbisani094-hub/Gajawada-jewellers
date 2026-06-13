import { X, Trash2 } from 'lucide-react';
import { Product } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  cart: Product[];
  onClose: () => void;
  onRemoveFromCart: (productId: string) => void;
}

export default function CartDrawer({ isOpen, cart, onClose, onRemoveFromCart }: CartDrawerProps) {
  if (!isOpen) return null;

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
      <div className="absolute inset-0 z-0" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md bg-neutral-950 border-l border-gold-900/30 h-full shadow-2xl flex flex-col justify-between p-6 animate-slideLeft">
        <div>
          <div className="flex items-center justify-between border-b border-neutral-900 pb-4 mb-6">
            <div className="flex items-center gap-2 text-left">
              <h3 className="font-serif text-lg font-bold text-white tracking-wider uppercase">My Cart</h3>
            </div>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white p-1 rounded-full border border-neutral-800"
              aria-label="Close cart drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-16 bg-neutral-900/20 rounded border border-dashed border-neutral-900">
              <p className="text-sm text-neutral-400">Your cart is empty. Add products from the collection.</p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[65vh] overflow-y-auto pr-1">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3 bg-neutral-900/40 p-3 rounded-lg border border-neutral-900 text-left relative group hover:border-gold-900/30 transition-colors">
                  <div className="w-14 h-14 rounded overflow-hidden aspect-square shrink-0 bg-neutral-950 border border-neutral-800">
                    <img
                      src={resolveImagePath(item.imageUrl)}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-xs font-serif font-semibold text-white line-clamp-1">{item.name}</h4>
                    <p className="text-[10px] text-neutral-400 mt-1">{item.purity}</p>
                    {item.price !== undefined && (
                      <p className="text-[11px] text-gold-300 font-bold mt-1">₹{item.price.toLocaleString('en-IN')}</p>
                    )}
                  </div>
                  <button
                    onClick={() => onRemoveFromCart(item.id)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-neutral-500 hover:text-red-500 hover:bg-red-500/10 rounded transition-colors"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
