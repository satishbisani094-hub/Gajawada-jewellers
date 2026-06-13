import { PenTool, Sparkles, RefreshCw, Flame, Gift, Check, ShieldAlert } from 'lucide-react';
import { services } from '../data/jewelryData';

interface ServicesProps {
  onOpenInquiryModal: (product?: any) => void;
}

export default function Services({ onOpenInquiryModal }: ServicesProps) {
  
  // Icon chooser helper to map string names to Lucide icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'PenTool':
        return <PenTool className="w-8 h-8 text-gold-400" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-gold-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-8 h-8 text-gold-400" />;
      case 'Flame':
        return <Flame className="w-8 h-8 text-gold-400" />;
      case 'Gift':
        return <Gift className="w-8 h-8 text-gold-400" />;
      default:
        return <Sparkles className="w-8 h-8 text-gold-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-neutral-950 text-white relative">
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 text-center">
          <span className="font-sans text-[10px] font-bold text-gold-400 uppercase tracking-[0.35em] block mb-2">
            Luxury Conveniences
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-wide text-white">
            Exclusive In-Store Services
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4 col-span-1"></div>
        </div>

        {/* Services Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-900/60 rounded-xl overflow-hidden border border-neutral-800/80 hover:border-gold-500/35 transition-all duration-300 flex flex-col justify-between p-8 group relative"
            >
              {/* Subtle hover background highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div>
                <div className="mb-6 bg-neutral-900 p-4 rounded-full w-16 h-16 flex items-center justify-center border border-gold-900/25 group-hover:bg-gold-500 group-hover:text-black group-hover:border-gold-400 transition-all duration-300">
                  {renderIcon(item.iconName)}
                </div>

                <h3 className="font-serif text-lg font-bold text-gold-200 group-hover:text-gold-400 transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-neutral-450 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Service booking CTA button */}
              <button
                onClick={() => onOpenInquiryModal({ name: `Service: ${item.title}` })}
                className="mt-4 font-sans text-xs font-bold text-gold-400 group-hover:text-gold-300 transition-colors flex items-center gap-1.5 self-start cursor-pointer"
                id={`service-cta-${item.id}`}
              >
                Inquire Service &rarr;
              </button>
            </div>
          ))}
        </div>

        {/* Extra Bottom Trust Statement */}
        <div className="mt-16 bg-gradient-to-r from-gold-950/20 to-neutral-900/20 p-6 rounded-lg border border-gold-900/20 max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4 text-left">
            <div className="p-2.5 bg-gold-400/10 text-gold-400 rounded-md shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-sans font-extrabold text-gold-200 uppercase tracking-widest">
                Transparent Buyback Policy
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed font-sans">
                We accept old jewelry bought from any retail house across Telangana. Bring your original invoices to claim maximum valuation matching today's spot rate card.
              </p>
            </div>
          </div>
          
          <button
            onClick={() => onOpenInquiryModal({ name: 'Old Gold Exchange Quote' })}
            className="text-xs font-sans font-bold bg-gold-500 text-black hover:bg-gold-400 py-3 px-6 rounded shrink-0 uppercase tracking-wider"
            id="buyback-cta-btn"
          >
            Get Gold Valuation
          </button>
        </div>

      </div>
    </section>
  );
}
