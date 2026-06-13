import { Shield, Award, Star, Hammer, Scale, ThumbsUp, Lock, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-gold-400" />,
      title: 'BIS Hallmarked Gold',
      description: 'Every single gold ornament we sell is stamped with the government-backed BIS Hallmark to guarantee standard purity.',
    },
    {
      icon: <Shield className="w-6 h-6 text-gold-400" />,
      title: 'Certified Diamonds',
      description: 'Our diamonds are fully certified by reputable global labs (GIA, IGI) with pristine VVS-EF clarity and color.',
    },
    {
      icon: <Star className="w-6 h-6 text-gold-400" />,
      title: 'Trusted Quality',
      description: 'Providing genuine jewelry to families across Hyderabad for decades with an unblemished reputation.',
    },
    {
      icon: <Sparkles className="w-6 h-6 text-gold-400" />,
      title: 'Custom Designs',
      description: 'Work hand-in-hand with our design team. We create custom hand-sketches and 3D mockups before casting.',
    },
    {
      icon: <Scale className="w-6 h-6 text-gold-400" />,
      title: 'Transparent Pricing',
      description: 'No hidden commissions. Our final invoices showcase exact gold weights, gem values, and making charges.',
    },
    {
      icon: <Hammer className="w-6 h-6 text-gold-400" />,
      title: 'Experienced Craftsmanship',
      description: 'Crafted manually by legacy Bengali and South Indian Karyakars who bring ancient filigree to life.',
    },
    {
      icon: <ThumbsUp className="w-6 h-6 text-gold-400" />,
      title: 'Excellent Customer Service',
      description: 'Friendly consultation, secure doorstep delivery, gold testing, and lifelong post-purchase support.',
    },
    {
      icon: <Lock className="w-6 h-6 text-gold-400" />,
      title: 'Secure Transactions',
      description: 'Fully insured store visits, secured digital payments, standard billing, and private jewelry safety deposit folders.',
    },
  ];

  return (
    <section className="py-24 bg-neutral-900 border-t border-b border-gold-900/10 text-white relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-900/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 text-center">
          <span className="font-sans text-[10px] font-bold text-gold-400 uppercase tracking-[0.35em] block mb-2">
            The Gajawada Commitment
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-wide text-white">
            Why Discerning Clients Choose Us
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-950 p-6 md:p-8 rounded-lg border border-neutral-900 hover:border-gold-500/30 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Gold light corner accent on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500 pointer-events-none"></div>
              
              <div className="bg-neutral-900 p-3 rounded w-fit text-left mb-6 group-hover:bg-gold-500 group-hover:text-black transition-colors duration-300">
                {item.icon}
              </div>

              <h3 className="font-serif text-base font-bold text-gold-200 mb-3 tracking-wide group-hover:text-gold-400 transition-colors">
                {item.title}
              </h3>

              <p className="font-sans text-xs text-neutral-400 leading-relaxed group-hover:text-neutral-300 transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
