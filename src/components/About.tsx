import { Award, ShieldCheck, Zap, Users, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#FAF8F4] text-neutral-900 relative overflow-hidden">
      {/* Visual background elegant textures */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-200/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-300/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Title Grid */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[10px] font-bold text-gold-600 uppercase tracking-[0.35em] block mb-2">
            The Heritage & Legacy
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-neutral-950 mb-6">
            Bespoke Craftsmanship, Trust for a Lifetime
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto"></div>
        </div>

        {/* Story Layout Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Side: Editorial Typography & Story */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <h3 className="font-serif text-2xl font-bold text-neutral-950 mb-4 italic tracking-wide">
              "Honesty in gold rates, purity in gold ornaments."
            </h3>
            
            <p className="font-sans text-sm md:text-base text-neutral-600 leading-relaxed mb-5">
              Welcome to the digital atelier of <strong className="text-gold-700 font-semibold font-serif">Gajawada Jewellers</strong>. Establishe d with a strong vision to marry heritage Indian designs with modern purity standards, we have grown to become a cornerstone of trust, celebration, and luxury in Boduppal, Hyderabad.
            </p>

            <p className="font-sans text-sm md:text-base text-neutral-600 leading-relaxed mb-5">
              At Gajawada, jewelry is not merely an accessory; it is an ancestral blessing, a pledge of love, and a beautiful work of high fine art. Our master karyakars (artisans) carve every detail utilizing traditional wisdom handed down across generations, combined with state-of-the-art precision tools to perfect the geometry, weights, and gemstone lockups.
            </p>

            <p className="font-sans text-sm text-neutral-500 leading-relaxed mb-8">
              Whether you are an expectant bride searching for your custom 185-gram royal Nizam Haram set, a father purchasing traditional waist-threads for his toddler, or looking for premium GIA-EF certified diamond engagement solitaires, Gajawada Jewellers guarantees 100% transparent weighing, laser hallmarking, and customizable gold ratios.
            </p>

            {/* Quick trust counts */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gold-200">
              <div>
                <h4 className="font-serif text-3xl font-extrabold text-gold-600 mb-1">25+</h4>
                <p className="font-sans text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Years of Trust</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl font-extrabold text-gold-600 mb-1">10k+</h4>
                <p className="font-sans text-[10px] font-bold text-neutral-500 uppercase tracking-widest font-serif">Happy Clients</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl font-extrabold text-gold-600 mb-1">100%</h4>
                <p className="font-sans text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Hallmarked 916</p>
              </div>
            </div>
          </div>

          {/* Right Side: Visual Artistic Framing */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Elegant luxury framing with solid border and background overlay */}
            <div className="relative max-w-md w-full">
              <div className="absolute -top-3 -left-3 w-full h-full border border-gold-300 rounded translate-x-3 translate-y-3 pointer-events-none z-0"></div>
              
              <div className="relative bg-neutral-900 rounded overflow-hidden z-10 aspect-[4/5] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=600&auto=format&fit=crop"
                  alt="Traditional Temple Jewelry Crafting Gajawada Jewellers"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[20%] hover:scale-105 hover:grayscale-0 transition-all duration-750"
                />
                {/* Vintage gold lighting gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent flex flex-col justify-end p-6 text-left" />
                <div className="absolute bottom-6 left-6 z-20 text-white">
                  <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-gold-400">Our Boduppal Store</span>
                  <h4 className="font-serif text-lg font-bold">Sep-68, IICT Colony</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Gajawada Jewelry */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-100 hover:border-gold-300 hover:shadow-md transition-all duration-300 group">
            <div className="bg-gold-50 p-4 rounded-full w-12 h-12 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-black transition-all">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-neutral-950 mb-3 tracking-wide">Purity Verified</h3>
            <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed">
              We verify all our gold using government-certified XFR spectrometers. Every purchase comes with computerized gold reports and standard hallmarks.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-100 hover:border-gold-300 hover:shadow-md transition-all duration-300 group">
            <div className="bg-gold-50 p-4 rounded-full w-12 h-12 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-black transition-all">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-neutral-950 mb-3 tracking-wide">Uncompromised Trust</h3>
            <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed">
              We operate strictly with ethical sourcing and fair rate cards. Our markup is completely transparently itemized so you pay only for exactly what is made.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-neutral-100 hover:border-gold-300 hover:shadow-md transition-all duration-300 group">
            <div className="bg-gold-50 p-4 rounded-full w-12 h-12 flex items-center justify-center text-gold-600 mb-6 group-hover:bg-gold-500 group-hover:text-black transition-all">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-neutral-950 mb-3 tracking-wide">Family First Care</h3>
            <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed">
              From resizing necklaces to creating special customized gift wraps on festival days, we welcome you to find personalized service in Hyderabad.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
