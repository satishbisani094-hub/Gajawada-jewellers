import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation, Train } from 'lucide-react';

export default function LocationMap() {
  // Let's build a highly pristine, responsive Google Maps iframe representation 
  // geared at Gajawada Jewellers' address in Boduppal, Hyderabad.
  // We can use a query-based maps embed or embed a beautiful interactive iframe.
  const mapIframeUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.13529323712!2d78.5721111!3d17.4053611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9ec0ff59196b%3A0xe5a363db836ee1cf!2sGajawada%20Jewellers!5e0!3m2!1sen!2sin!4v1717835122194!5m2!1sen!2sin";

  return (
    <section id="location" className="py-24 bg-[#111111] text-white relative">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-sans text-[10px] font-bold text-gold-400 uppercase tracking-[0.35em] block mb-2">
            Visit Our Showroom
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-wide text-white">
            Find Us At Boduppal, Hyderabad
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* Dynamic Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Side: Editorial Store Card */}
          <div className="lg:col-span-5 bg-neutral-950 p-6 md:p-10 rounded-lg border border-gold-900/30 flex flex-col justify-between text-left h-full">
            <div>
              <span className="text-[10px] font-sans font-bold text-gold-400 uppercase tracking-[0.2em] block mb-3">
                Flagship Storefront
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-4">
                Gajawada Jewellers
              </h3>
              
              <div className="space-y-6 mt-8">
                {/* Physical Google address */}
                <div className="flex items-start gap-4 text-left">
                  <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs uppercase font-sans font-bold text-neutral-400 tracking-widest">Address</h4>
                    <p className="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed mt-1">
                      Sep-68, IICT Colony,<br />
                      Hanuman Nagar Colony, Boduppal,<br />
                      Hyderabad, Telangana 500092, India.
                    </p>
                  </div>
                </div>

                {/* Operating hours */}
                <div className="flex items-start gap-4 text-left">
                  <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs uppercase font-sans font-bold text-neutral-400 tracking-widest">Business Hours</h4>
                    <p className="text-xs sm:text-sm text-neutral-200 font-sans mt-1">
                      Open Every Day: 10:30 AM – 9:00 PM <br />
                      <span className="text-gold-400 text-[11px] font-sans font-medium">(Sundays included for festive shopping)</span>
                    </p>
                  </div>
                </div>

                {/* Local Landmarks guidelines */}
                <div className="flex items-start gap-4 text-left">
                  <Train className="w-5 h-5 text-gold-400 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs uppercase font-sans font-bold text-neutral-400 tracking-widest">How to Reach</h4>
                    <p className="text-xs text-neutral-300 font-sans mt-1 leading-relaxed">
                      Located conveniently close to the mainBoduppal Hanuman Temple. <br />
                      Nearest Metro Station is <strong className="text-white">Uppal Metro</strong> (~10 minutes cabinet drive).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google maps trigger */}
            <div className="pt-8 border-t border-gold-900/20 mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.app.goo.gl/e5a363db836ee1cf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-600 hover:to-gold-500 text-black text-xs font-sans font-bold py-3.5 px-6 rounded transition-colors text-center w-full shadow-lg"
              >
                <Navigation className="w-4 h-4" /> Open Navigation
              </a>
              <a
                href="https://www.google.com/maps/place/Gajawada+Jewellers/@17.4053611,78.5721111,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-sans font-medium py-3.5 px-4 rounded border border-gold-900/25 transition-colors text-center"
              >
                View on Web <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Side: Embedded Google Maps Iframe */}
          <div className="lg:col-span-7 bg-neutral-900 rounded-lg overflow-hidden border border-gold-900/20 shadow-2xl relative min-h-[350px] md:min-h-[450px]">
            <iframe
              title="Gajawada Jewellers Location Map Boduppal Hyderabad"
              src={mapIframeUrl}
              className="w-full h-full border-0 absolute inset-0 opacity-90 invert-[15%] saturate-[110%] hue-rotate-[320deg]"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
