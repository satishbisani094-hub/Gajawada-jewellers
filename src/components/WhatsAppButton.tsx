import { MessageSquare } from 'lucide-react';

export default function WhatsAppButton() {
  const triggerWhatsApp = () => {
    const text = `Hi Gajawada Jewellers! I am exploring your gold, diamond, and bridal collection online and would like to ask a few questions. Could you please help me?`;
    window.open(`https://wa.me/918919329919?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 select-none">
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
