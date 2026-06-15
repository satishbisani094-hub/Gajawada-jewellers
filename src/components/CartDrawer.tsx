import { useState, useEffect } from 'react';
import { X, Trash2, ShoppingBag, Check, Send, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  cart: Product[];
  onClose: () => void;
  onRemoveFromCart: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartDrawer({
  isOpen,
  cart,
  onClose,
  onRemoveFromCart,
  onClearCart
}: CartDrawerProps) {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [isOrdered, setIsOrdered] = useState(false);

  // Reset success state when drawer closes/opens
  useEffect(() => {
    if (!isOpen) {
      setIsOrdered(false);
    }
  }, [isOpen]);

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

  const totalPrice = cart.reduce((sum, item) => sum + (item.price || 0), 0);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName || !phoneNumber || !deliveryAddress) return;

    // Construct the WhatsApp message body
    let messageText = `*NEW ORDER - GAJAWADA JEWELLERS*\n\n`;
    messageText += `*Customer Info:*\n`;
    messageText += `- Name: ${customerName}\n`;
    messageText += `- Phone: ${phoneNumber}\n`;
    if (emailAddress) {
      messageText += `- Email: ${emailAddress}\n`;
    }
    messageText += `- Address: ${deliveryAddress}\n\n`;
    
    messageText += `*Products:* \n`;
    cart.forEach((item, index) => {
      messageText += `${index + 1}. ${item.name} (${item.purity || '22K Gold'})${item.price !== undefined ? ` - ₹${item.price.toLocaleString('en-IN')}` : ''}\n`;
    });
    
    if (totalPrice > 0) {
      messageText += `\n*Total Order Value:* ₹${totalPrice.toLocaleString('en-IN')}\n`;
    }
    
    messageText += `\nPlease confirm availability and let me know the payment options. Thank you!`;

    const formatUrl = `https://wa.me/918919329919?text=${encodeURIComponent(messageText)}`;
    window.open(formatUrl, '_blank');

    setIsOrdered(true);
    
    // Clear cart contents
    onClearCart();
    
    // Reset form fields
    setCustomerName('');
    setPhoneNumber('');
    setEmailAddress('');
    setDeliveryAddress('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div className="absolute inset-0 z-0" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md bg-neutral-950 border-l border-gold-900/30 h-full shadow-2xl flex flex-col justify-between p-6 animate-slideLeft">
        
        {/* Scrollable container for items + form */}
        <div className="flex-grow flex flex-col overflow-y-auto pr-1">
          <div className="flex items-center justify-between border-b border-neutral-900 pb-4 mb-6">
            <div className="flex items-center gap-2 text-left">
              <ShoppingBag className="w-5 h-5 text-gold-400" />
              <h3 className="font-serif text-lg font-bold text-white tracking-wider uppercase">My Cart</h3>
            </div>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-white p-1 rounded-full border border-neutral-800 cursor-pointer"
              aria-label="Close cart drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {isOrdered ? (
            <div className="text-center py-12 px-4 animate-fadeIn my-auto">
              <div className="w-14 h-14 bg-green-950 border border-green-500/35 rounded-full flex items-center justify-center mx-auto mb-6 text-green-400">
                <Check className="w-8 h-8 animate-pulse" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white mb-3 uppercase tracking-wider">Order Submitted!</h3>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-xs mx-auto mb-8 font-sans">
                We have initialized WhatsApp with your order summary. Please send the pre-filled message to complete your order with the store manager.
              </p>
              <button
                onClick={onClose}
                className="bg-neutral-900 hover:bg-neutral-800 text-neutral-200 border border-neutral-800 text-xs font-sans font-bold uppercase tracking-wider py-2.5 px-6 rounded-md transition-colors cursor-pointer"
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              {cart.length === 0 ? (
                <div className="text-center py-16 bg-neutral-900/20 rounded border border-dashed border-neutral-900/60 my-auto">
                  <p className="text-sm text-neutral-400 font-sans">Your cart is empty.</p>
                  <p className="text-xs text-neutral-500 mt-2 font-sans">Browse our collections to add premium designs.</p>
                </div>
              ) : (
                <div className="flex flex-col flex-grow">
                  <div className="space-y-4 max-h-[35vh] overflow-y-auto mb-6 pr-1">
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
                        <div className="flex-grow pr-8">
                          <h4 className="text-xs font-serif font-semibold text-white line-clamp-1">{item.name}</h4>
                          <p className="text-[10px] text-neutral-400 mt-1">{item.purity}</p>
                          {item.price !== undefined && (
                            <p className="text-[11px] text-gold-300 font-bold mt-1">₹{item.price.toLocaleString('en-IN')}</p>
                          )}
                        </div>
                        <button
                          onClick={() => onRemoveFromCart(item.id)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-neutral-500 hover:text-red-500 hover:bg-red-500/10 rounded transition-colors cursor-pointer"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Checkout details Form */}
                  <form onSubmit={handlePlaceOrder} className="border-t border-neutral-900 pt-6 space-y-4 text-left mt-auto">
                    <div className="flex items-center gap-1.5 mb-2">
                      <Sparkles className="w-3.5 h-3.5 text-gold-500" />
                      <span className="text-[9px] font-sans font-bold text-gold-400 uppercase tracking-wider">
                        Delivery & Checkout Details
                      </span>
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-bold text-neutral-350 uppercase tracking-widest mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="e.g. Anand Sharma"
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-500 rounded px-3 py-2.5 text-xs text-neutral-200 placeholder-neutral-600 outline-none font-sans"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-sans font-bold text-neutral-350 uppercase tracking-widest mb-1.5">
                          WhatsApp Mobile *
                        </label>
                        <input
                          type="tel"
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="e.g. +91 99999 99999"
                          className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-500 rounded px-3 py-2.5 text-xs text-neutral-200 placeholder-neutral-600 outline-none font-sans"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-sans font-bold text-neutral-350 uppercase tracking-widest mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={emailAddress}
                          onChange={(e) => setEmailAddress(e.target.value)}
                          placeholder="anand@example.com"
                          className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-500 rounded px-3 py-2.5 text-xs text-neutral-200 placeholder-neutral-600 outline-none font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans font-bold text-neutral-350 uppercase tracking-widest mb-1.5">
                        Delivery Address *
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={deliveryAddress}
                        onChange={(e) => setDeliveryAddress(e.target.value)}
                        placeholder="House No., Street name, Area, City, Pincode"
                        className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-500 rounded px-3 py-2.5 text-xs text-neutral-200 placeholder-neutral-600 outline-none font-sans resize-none"
                      />
                    </div>

                    {/* Total & Submit */}
                    <div className="pt-4 border-t border-neutral-900 mt-4 flex items-center justify-between font-sans">
                      <span className="text-xs font-semibold text-neutral-400">Total Price:</span>
                      <span className="text-base font-bold text-white">₹{totalPrice.toLocaleString('en-IN')}</span>
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-sans font-bold bg-gold-500 hover:bg-gold-600 text-black py-3 rounded text-center transition-colors uppercase tracking-widest cursor-pointer shadow-lg mt-2"
                    >
                      Place Order <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
