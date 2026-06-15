import { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show a small friendly chat bubble tooltip after 6 seconds to capture user attention elegantly
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const triggerWhatsApp = () => {
    const text = `Hi Gajawada Jewellers! I am exploring your gold, diamond, and bridal collection online and would like to ask a few questions. Could you please help me?`;
    window.open(`https://wa.me/918919329919?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none">
      
      {/* Dynamic Animated Tooltip bubble */}
      {showTooltip && (
        <div className="bg-neutral-900 text-white text-xs font-sans rounded-lg py-2.5 px-4 pr-8 border border-gold-900/40 shadow-2xl relative animate-fadeIn flex flex-col items-start leading-snug w-48 text-left">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-neutral-400 hover:text-white p-0.5 rounded-full"
            aria-label="Close message"
          >
            <X className="w-3 h-3" />
          </button>
          <span className="font-bold text-gold-400 uppercase tracking-widest text-[9px] mb-0.5">Showroom chat</span>
          <span className="text-neutral-300">Hi! Chat with our jewelry consultant on WhatsApp.</span>
        </div>
      )}

      {/* Circle Pulsing Fab */}
      <button
        onClick={triggerWhatsApp}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-black rounded-full flex items-center justify-center shadow-2xl relative group focus:outline-none focus:ring-2 focus:ring-[#25D366]/40 cursor-pointer animate-smooth"
        aria-label="Chat with us on WhatsApp"
        id="floating-whatsapp-btn"
      >
        {/* Dual Ripple effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping -z-10"></span>
        <MessageSquare className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
      </button>

    </div>
  );
}
