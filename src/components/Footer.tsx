import { Mail, Phone, MapPin, ExternalLink, Calendar, Facebook, Instagram, Youtube, Award, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const collectionsList = [
    { name: 'Gold Necklaces', hash: '#collections' },
    { name: 'Bridal Collections', hash: '#collections' },
    { name: 'Bangles & Bracelets', hash: '#collections' },
    { name: 'Diamond Jewelry', hash: '#collections' },
    { name: 'Rings & Solitaires', hash: '#collections' },
    { name: 'Temple Relic Pieces', hash: '#collections' },
  ];

  const servicesList = [
    { name: 'Custom Jewelry Design', hash: '#services' },
    { name: 'Bridal Consultation', hash: '#services' },
    { name: 'Old Gold Exchange', hash: '#services' },
    { name: 'Repair & Lasercut Polishing', hash: '#services' },
    { name: 'Custom Gift Box Wraps', hash: '#services' },
  ];

  return (
    <footer className="bg-neutral-950 text-white pt-20 border-t border-gold-900/40 select-none">
      
      {/* Top Footer: Grid divisions */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 text-left">
        
        {/* Brand Block (Col span 4) */}
        <div className="lg:col-span-4 flex flex-col justify-between">
          <div>
            <a href="#hero" className="flex flex-col mb-4 bg-transparent outline-none self-start">
              <span className="font-serif text-2xl font-black text-gold-300 tracking-widest leading-none uppercase">
                Gajawada
              </span>
              <span className="font-sans text-[11px] font-bold text-white tracking-[0.35em] uppercase mt-0.5">
                Jewellers
              </span>
            </a>
            
            <p className="font-sans text-xs text-neutral-400 leading-relaxed mt-4 max-w-sm">
              Gajawada Jewellers is Hyderabad's premier boutique goldsmith. Designing heirloom gold, certified diamonds, and temple necklaces crafted with absolute purity and generations of trust.
            </p>

            {/* Certification badges stamp row */}
            <div className="flex gap-4 items-center mt-6">
              <div className="flex items-center gap-1.5 bg-black/50 border border-gold-900/30 p-2 rounded">
                <Award className="w-5 h-5 text-gold-400" />
                <div className="text-[9px] font-sans">
                  <span className="font-bold text-white uppercase block">BIS 916</span>
                  <span className="text-neutral-500 uppercase">Hallmarked</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 bg-black/50 border border-gold-900/30 p-2 rounded">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
                <div className="text-[9px] font-sans">
                  <span className="font-bold text-white uppercase block">GIA / IGI</span>
                  <span className="text-neutral-500 uppercase">Diamonds</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social icons */}
          <div className="mt-8 flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 hover:bg-gold-500 hover:text-black border border-neutral-800 rounded transition-colors text-neutral-400" aria-label="Visit Instagram Node">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 hover:bg-gold-500 hover:text-black border border-neutral-800 rounded transition-colors text-neutral-400" aria-label="Visit Facebook Node">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-900 hover:bg-gold-500 hover:text-black border border-neutral-800 rounded transition-colors text-neutral-400" aria-label="Visit Youtube Node">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Collections checklist (Col span 2) */}
        <div className="lg:col-span-2">
          <h4 className="font-serif text-sm font-bold text-gold-300 uppercase tracking-wider border-b border-neutral-900 pb-2 mb-4">
            Our Collections
          </h4>
          <ul className="space-y-2 text-xs font-sans text-neutral-400">
            {collectionsList.map((item, idx) => (
              <li key={idx}>
                <a href={item.hash} className="hover:text-gold-300 transition-colors block py-0.5">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services mapping (Col span 2) */}
        <div className="lg:col-span-2">
          <h4 className="font-serif text-sm font-bold text-gold-300 uppercase tracking-wider border-b border-neutral-900 pb-2 mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-xs font-sans text-neutral-400">
            {servicesList.map((item, idx) => (
              <li key={idx}>
                <a href={item.hash} className="hover:text-gold-300 transition-colors block py-0.5">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Address and Store coordinates (Col span 4) */}
        <div className="lg:col-span-4 text-xs font-sans">
          <h4 className="font-serif text-sm font-bold text-gold-300 uppercase tracking-wider border-b border-neutral-900 pb-2 mb-4">
            Contact Info
          </h4>
          
          <div className="space-y-4 text-neutral-400 text-left">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-gold-400 shrink-0 select-none mt-0.5" />
              <p className="leading-relaxed">
                Sep-68, IICT Colony, <br />
                Hanuman Nagar Colony, Boduppal, <br />
                Hyderabad, Telangana 500092.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold-400 shrink-0" />
              <a href="tel:+918919329919" className="hover:text-white font-mono transition-colors">
                +91 89193 29919
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold-400 shrink-0" />
              <a href="mailto:satishbysani83@gmail.com" className="hover:text-white font-mono transition-colors break-all">
                satishbysani83@gmail.com
              </a>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.app.goo.gl/e5a363db836ee1cf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-gold-400 hover:text-gold-300 transition-colors font-bold uppercase tracking-wider text-[11px]"
              >
                Get Google Maps Route <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Local SEO keywords checklist divider segment */}
      <div className="border-t border-neutral-900 py-6 text-center text-xs text-neutral-500 max-w-7xl mx-auto px-4">
        <h5 className="font-sans font-extrabold uppercase text-[9px] text-neutral-400 tracking-widest mb-2 font-serif">
          Telangana Region Local Keywords Tagboard
        </h5>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[10.5px]">
          <span>Gajawada Jewellers Boduppal</span>
          <span className="text-neutral-800">•</span>
          <span>Gold Jewellery Shop in Boduppal</span>
          <span className="text-neutral-800">•</span>
          <span>Gold Shop Hyderabad</span>
          <span className="text-neutral-800">•</span>
          <span>Bridal Jewellery Hyderabad</span>
          <span className="text-neutral-800">•</span>
          <span>Diamond Jewellery Hyderabad</span>
          <span className="text-neutral-800">•</span>
          <span>Gold Necklaces in Store</span>
          <span className="text-neutral-800">•</span>
          <span>Gold Bangles Telangana</span>
          <span className="text-neutral-800">•</span>
          <span>Hallmarked Gold Jewellery Hyderabad</span>
          <span className="text-neutral-800">•</span>
          <span>Jewellery Store Boduppal Near Uppal</span>
        </div>
      </div>

      {/* Bottom Footer: Legal copyrights */}
      <div className="border-t border-neutral-900 bg-black/60 py-6 text-center text-[11px] text-neutral-500 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-sans leading-none">
          <p>&copy; {new Date().getFullYear()} Gajawada Jewellers. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed for timeless elegance matching 100% BIS certification guidelines</span>
          </p>
        </div>
      </div>

    </footer>
  );
}
