import { ArrowRight, MapPin, Sparkles, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenInquiryModal: () => void;
}

export default function Hero({ onOpenInquiryModal }: HeroProps) {
  // Let's resolve our custom generated bridal banner image
  // The path saved from generate_image is /src/assets/images/jewelry_hero_banner_1781324324478.jpg
  const heroImage = '/src/assets/images/jewelry_hero_banner_1781324324478.jpg';

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] md:min-h-screen bg-black flex items-center justify-center overflow-hidden pt-28 pb-12"
    >
      {/* Cinematic zoom background and dim overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Gold Bridal Jewelry Gajawada Jewellers"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-85 scale-105 animate-[pulse_8s_infinite] transition-transform duration-1000"
        />
        {/* Multilayer gradient maps over image for premium atmosphere */}
        <div className="absolute inset-0 bg-neutral-950/70" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
        <div className="absolute inset-y-0 left-0 w-full md:w-2/3 bg-gradient-to-r from-neutral-950/90 via-neutral-950/50 to-transparent" />
      </div>

      {/* Decorative Gold Rings / Lights Glow effects */}
      <div className="absolute top-1/4 right-10 w-96 h-96 rounded-full bg-gold-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-12 w-80 h-80 rounded-full bg-gold-900/20 blur-[100px] pointer-events-none" />

      {/* Hero Content Frame */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 w-full text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Brand Text Intro */}
        <div className="lg:col-span-8 flex flex-col justify-center">
          {/* Subtle Royal Badge Tag */}
          <div className="inline-flex items-center gap-2 bg-gold-900/40 border border-gold-500/20 text-gold-300 font-sans text-[11px] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-[0.25em] mb-6 w-fit animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            Empowering Legacies Since 1998
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide leading-[1.125] mb-6">
            Timeless Elegance, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-400 to-gold-100 italic font-serif">
              Crafted for Every
            </span>{' '}
            Occasion
          </h1>

          <p className="font-sans text-sm sm:text-base text-neutral-300/90 leading-relaxed max-w-xl mb-8 tracking-wide">
            Discover exquisite gold, diamond, bridal, and traditional jewelry collections at{' '}
            <strong className="text-gold-300">Gajawada Jewellers</strong>. Every ornament is a
            masterpiece designed to celebrate your unique love story and purity of lineage.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#collections"
              className="inline-flex items-center gap-2 group text-xs font-sans font-bold bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-600 hover:to-gold-500 text-black px-6 py-4 rounded-md shadow-xl shadow-gold-500/10 transition-all duration-300 tracking-[0.15em] uppercase hover:-translate-y-0.5"
            >
              Explore Collection
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-sans font-bold bg-neutral-900/80 hover:bg-neutral-900 text-white border border-gold-900/30 hover:border-gold-500/60 transition-all duration-300 px-6 py-4 rounded-md tracking-[0.15em] uppercase hover:-translate-y-0.5"
            >
              Visit Store
            </a>

            <button
              onClick={onOpenInquiryModal}
              className="inline-flex items-center gap-2 text-xs font-sans font-bold text-gold-300 hover:text-gold-200 bg-transparent transition-colors px-4 py-2 tracking-[0.15em] uppercase"
              id="hero-inquiry-btn"
            >
              <PhoneCall className="w-4 h-4" /> Contact Us
            </button>
          </div>
        </div>

        {/* Right Side: Floating Premium Store Stat Card */}
        <div className="lg:col-span-4 mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <div className="glassmorphism p-6 rounded-lg border border-gold-900/30 max-w-xs w-full shadow-2xl relative overflow-hidden backdrop-blur-md">
            {/* Background luxury texture glow */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <h3 className="font-serif text-lg font-bold text-white mb-4 tracking-wider flex items-center justify-between border-b border-gold-900/30 pb-2">
              <span>Why Visit Us</span>
              <Sparkles className="w-4 h-4 text-gold-400" />
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-gold-400/10 p-1.5 rounded text-gold-400">
                  <span className="font-bold font-sans text-xs">Purity</span>
                </div>
                <div>
                  <h4 className="text-xs font-sans font-bold text-gold-100 uppercase tracking-widest">100% Certified</h4>
                  <p className="text-[11px] text-neutral-400">Every single gold piece carries the government-certified BIS 916 Hallmark.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-gold-400/10 p-1.5 rounded text-gold-400">
                  <span className="font-bold font-sans text-xs">Trust</span>
                </div>
                <div>
                  <h4 className="text-xs font-sans font-bold text-gold-100 uppercase tracking-widest">Generations of Trust</h4>
                  <p className="text-[11px] text-neutral-400">Providing personalized customer care to families across Hyderabad.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1 bg-gold-400/10 p-1.5 rounded text-gold-400">
                  <span className="font-bold font-sans text-xs">Custom</span>
                </div>
                <div>
                  <h4 className="text-xs font-sans font-bold text-gold-100 uppercase tracking-widest">Bespoke Fitting</h4>
                  <p className="text-[11px] text-neutral-400">Get customized weights, gem carvings, and personalized designer styles.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gold-900/30 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-400" />
              <div className="text-left">
                <h5 className="text-[10px] font-sans font-extrabold text-neutral-300 uppercase tracking-widest">Boduppal, Hyderabad</h5>
                <p className="text-[9px] text-neutral-500 leading-tight">IICT Colony, Hanuman Nagar</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
