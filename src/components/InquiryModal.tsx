import { useState, useEffect, FormEvent } from 'react';
import { X, User, Smartphone, Send, MessageSquare, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { Product } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  product?: Product | null;
  onClearProduct?: () => void;
}

export default function InquiryModal({ isOpen, onClose, product, onClearProduct }: InquiryModalProps) {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [messageText, setMessageText] = useState('');
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    if (product) {
      setMessageText(
        `Hi Gajawada Jewellers! I would like to inquire about the beautiful "${product.name}" (${product.purity || '22K Gold'}, Approximate Weight: ${product.weight || 'Custom'}). Could you please provide a price quote and confirm availability at your Boduppal showroom?`
      );
    } else {
      setMessageText('');
    }
  }, [product, isOpen]);

  if (!isOpen) return null;

  const handleSendInquiry = (e: FormEvent) => {
    e.preventDefault();
    if (!customerName || !phoneNumber) return;

    setIsSent(true);

    setTimeout(() => {
      onClose();
      setIsSent(false);
      setCustomerName('');
      setPhoneNumber('');
    }, 4000);
  };

  const handleCloseFromSuccess = () => {
    setIsSent(false);
    setCustomerName('');
    setPhoneNumber('');
    onClose();
  };

  const handleWhatsAppInstant = () => {
    const text = messageText || `Hi Gajawada Jewellers! I would like to request an exclusive bridal consultation or ask a question about your custom gold casting designs.`;
    const formatUrl = `https://wa.me/918919329919?text=${encodeURIComponent(text)}`;
    window.open(formatUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-neutral-950 border border-gold-900/40 rounded-lg overflow-hidden shadow-2xl p-6 md:p-8 text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-white bg-neutral-900/50 p-1.5 rounded-full border border-neutral-800"
          aria-label="Close modal dialog"
        >
          <X className="w-4 h-4" />
        </button>

        {isSent ? (
          <div className="text-center py-8 relative">
            <button
              onClick={handleCloseFromSuccess}
              aria-label="Close success"
              className="absolute top-3 right-3 text-neutral-300 hover:text-white bg-neutral-900/40 p-1.5 rounded-full border border-neutral-800"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="w-12 h-12 bg-green-950 border border-green-500/35 rounded-full flex items-center justify-center mx-auto mb-4 text-green-400">
              <Check className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="font-serif text-lg font-bold text-white mb-2 uppercase tracking-wider">Inquiry Sent Successfully!</h3>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-xs mx-auto mb-6">
              Thank you, {customerName}. The Gajawada Jewellers valuation and styling team has registered your interest. We will reach out on {phoneNumber} shortly.
            </p>
            <div className="flex justify-center">
              <span className="text-[10px] uppercase font-bold text-gold-400 tracking-widest bg-gold-950/20 px-3 py-1 rounded border border-gold-900/20">
                Purity Guaranteed Since 1998
              </span>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-gold-500" />
              <span className="text-[10px] font-sans font-bold text-gold-400 uppercase tracking-widest">
                {product ? 'Product Price Quote Booking' : 'Designer Appointment Request'}
              </span>
            </div>

            <h3 className="font-serif text-xl font-bold text-white mb-2 tracking-wide text-left">
              {product ? 'Inquire Luxury Jewelry Design' : 'Book Showroom Consultation'}
            </h3>
            <p className="text-xs text-neutral-400 leading-snug mb-6 text-left font-sans">
              Connect with a verified gemologist and shop advisor at our Hanuman Nagar, Boduppal site.
            </p>

            {product && (
              <div className="flex items-center gap-3 bg-neutral-900/50 p-3 rounded border border-neutral-900 mb-6 text-left">
                <div className="w-10 h-10 rounded overflow-hidden aspect-square shrink-0 bg-neutral-950 border border-neutral-800 relative">
                  {console.debug('InquiryModal image', { id: product.id, imageUrl: product.imageUrl })}
                  <button
                    onClick={() => {
                      if (onClearProduct) onClearProduct();
                      else onClose();
                    }}
                    aria-label="Clear selected product"
                    className="absolute top-1 right-1 z-20 bg-neutral-900/60 hover:bg-neutral-900 text-neutral-200 p-1 rounded-full"
                  >
                    <X className="w-3 h-3" />
                  </button>
                  <img
                    src={product.imageUrl === 'jewelry_hero_banner' ? '/src/assets/images/jewelry_hero_banner_1781324324478.jpg' : product.imageUrl === 'jewelry_diamond_ring' ? '/src/assets/images/jewelry_diamond_ring_1781324341784.jpg' : product.imageUrl}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-xs font-serif font-bold text-gold-200 line-clamp-1">{product.name}</h4>
                  <p className="text-[10px] font-mono text-neutral-400">{product.purity} • {product.weight || 'Custom Weights'}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSendInquiry} className="space-y-4 text-left">
              <div>
                <label className="block text-[10px] font-sans font-bold text-neutral-300 uppercase tracking-widest mb-1.5">
                  Your Full Name *
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3.5 text-neutral-500">
                    <User className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-500 rounded pl-10 pr-4 py-3 text-sm text-neutral-200 placeholder-neutral-500 outline-none font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-sans font-bold text-neutral-300 uppercase tracking-widest mb-1.5">
                  WhatsApp Contact Mobile *
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-3.5 text-neutral-500">
                    <Smartphone className="w-4 h-4" />
                  </span>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. +91 99999 99999"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-500 rounded pl-10 pr-4 py-3 text-sm text-neutral-200 placeholder-neutral-500 outline-none font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-sans font-bold text-neutral-300 uppercase tracking-widest mb-1.5">
                  Notes or Custom Weights Specs
                </label>
                <textarea
                  rows={3}
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  placeholder="Specify sizes, customization needs, or preferred callback hours..."
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-500 rounded px-3 py-3 text-xs sm:text-sm text-neutral-350 placeholder-neutral-500 outline-none font-sans resize-none"
                ></textarea>
              </div>

              <div className="pt-2 border-t border-neutral-900 grid grid-cols-1 gap-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-sans font-bold bg-gold-500 hover:bg-gold-600 text-black py-3 rounded text-center transition-colors uppercase tracking-widest cursor-pointer shadow-lg"
                  id="inquiry-form-submit-btn"
                >
                  Send Inquiry <Send className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInstant}
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] text-black text-xs font-sans font-bold py-3 rounded transition-colors whitespace-nowrap cursor-pointer"
                  id="inquiry-whatsapp-btn"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Message on WhatsApp Instead
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="mt-6 flex items-center justify-center gap-1 text-[11px] text-neutral-500">
          <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
          <span>BIS Hallmarked • GIA/IGI Diamonds • Fully HIPAA Encrypted Secure data</span>
        </div>
      </div>
    </div>
  );
}
