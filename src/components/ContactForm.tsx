import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface ContactFormProps {
  initialSubject?: string;
}

export default function ContactForm({ initialSubject = '' }: ContactFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState(initialSubject || 'General Store Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Simulate luxury API persistence or local success states
    setIsSubmitted(true);
    
    // Clear forms after nice submission delay
    setTimeout(() => {
      setName('');
      setPhone('');
      setEmail('');
      setSubject('General Store Inquiry');
      setMessage('');
      setIsSubmitted(false);
    }, 5000);
  };

  // WhatsApp click handler
  const triggerWhatsApp = () => {
    const defaultText = `Hi Gajawada Jewellers! I am interested in exploring custom gold jewelry and bridal consulting options. Please let me know the appropriate team to contact. Thanks!`;
    window.open(`https://wa.me/919573838383?text=${encodeURIComponent(defaultText)}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-neutral-950 text-white relative">
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 text-center">
          <span className="font-sans text-[10px] font-bold text-gold-400 uppercase tracking-[0.35em] block mb-2">
            Stay Connected
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-wide text-white">
            Send Us An Inquiry
          </h2>
          <div className="w-16 h-[2px] bg-gold-400 mx-auto mt-4"></div>
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Contact Info cards */}
          <div className="lg:col-span-4 space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="font-serif text-xl font-bold text-gold-200 tracking-wider">
                Our Showroom Office
              </h3>
              <p className="font-sans text-xs md:text-sm text-neutral-400 leading-relaxed mb-6">
                Have questions about specific custom models or want to book an exclusive slot for bridal outfit jewelry matching? Our store managers in Boduppal will call you back within 2 hours.
              </p>

              <div className="space-y-4 pt-4">
                {/* Phone support */}
                <a
                  href="tel:+919848521360"
                  className="flex items-center gap-4 bg-neutral-900/60 p-4 rounded border border-neutral-900 hover:border-gold-500/30 transition-all text-left"
                >
                  <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                  <div>
                    <h4 className="text-[10px] font-sans font-bold text-neutral-400 uppercase tracking-widest">Call Showroom</h4>
                    <span className="text-xs font-mono text-neutral-200 mt-0.5 block">+91 98485 21360</span>
                  </div>
                </a>

                {/* WhatsApp support */}
                <button
                  onClick={triggerWhatsApp}
                  className="w-full flex items-center gap-4 bg-neutral-900/60 p-4 rounded border border-neutral-900 hover:border-gold-500/30 transition-all text-left cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 text-green-400 shrink-0" />
                  <div>
                    <h4 className="text-[10px] font-sans font-bold text-neutral-400 uppercase tracking-widest">WhatsApp Support</h4>
                    <span className="text-xs font-mono text-neutral-200 mt-0.5 block">+91 95738 38383</span>
                  </div>
                </button>

                {/* Email Support */}
                <a
                  href="mailto:satishbysani83@gmail.com"
                  className="flex items-center gap-4 bg-neutral-900/60 p-4 rounded border border-neutral-900 hover:border-gold-500/30 transition-all text-left"
                >
                  <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                  <div>
                    <h4 className="text-[10px] font-sans font-bold text-neutral-400 uppercase tracking-widest font-serif">Email Address</h4>
                    <span className="text-xs sm:text-xs text-neutral-200 mt-0.5 block break-all">satishbysani83@gmail.com</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Micro badges showing certifications */}
            <div className="bg-neutral-950 p-4 rounded-md border border-neutral-900 text-left mt-6">
              <span className="text-[10px] font-sans font-bold text-gold-400 uppercase tracking-widest block mb-1">Local SEO Verified</span>
              <p className="text-[10.5px] text-neutral-500 leading-relaxed font-sans">
                Gajawada Jewellers, Trusted Gold Jewellery Shop in Boduppal, Gold Shop Hyderabad, Bridal Jewellery Hyderabad, Diamond Jewellery Hyderabad. Trusted by clients of Telangana.
              </p>
            </div>
          </div>

          {/* Right: Glassmorphism form */}
          <div className="lg:col-span-8 bg-neutral-900/60 p-6 md:p-10 rounded-lg border border-gold-900/15 relative">
            
            {/* Overlay if form was submitted */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-neutral-950/95 backdrop-blur-md z-40 flex flex-col items-center justify-center p-8 text-center rounded-lg">
                <CheckCircle2 className="w-14 h-14 text-green-400 mb-4 animate-bounce" />
                <h3 className="font-serif text-xl font-bold text-white mb-2 uppercase tracking-wide">Inquiry Registered Successfully!</h3>
                <p className="text-xs text-neutral-400 font-sans max-w-sm leading-relaxed mb-6">
                  Thank you for in touch with <strong className="text-gold-300">Gajawada Jewellers</strong>. A certified jewelry appraiser or store manager will contact you at your preferred callback telephone shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs text-black font-sans font-bold bg-gold-400 py-2 px-6 rounded hover:bg-gold-500 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            )}

            <h3 className="font-serif text-lg font-bold text-white mb-6 text-left border-b border-neutral-800 pb-2 flex items-center justify-between">
              <span>Showroom Appraiser Contact Form</span>
              <span className="text-xs text-neutral-450 uppercase tracking-wider font-mono">Fill all * fields</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-sans font-bold text-neutral-300 uppercase tracking-widest mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-500 rounded px-4 py-3 text-sm text-neutral-200 placeholder-neutral-500 outline-none font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans font-bold text-neutral-300 uppercase tracking-widest mb-2">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 99999 99999"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-500 rounded px-4 py-3 text-sm text-neutral-200 placeholder-neutral-500 outline-none font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[11px] font-sans font-bold text-neutral-300 uppercase tracking-widest mb-2">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address"
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-500 rounded px-4 py-3 text-sm text-neutral-200 placeholder-neutral-500 outline-none font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-sans font-bold text-neutral-300 uppercase tracking-widest mb-2">
                    Subject Panel *
                  </label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-500 rounded px-4 py-3 text-sm text-neutral-250 outline-none font-sans"
                  >
                    <option value="General Store Inquiry">General Store Inquiry</option>
                    <option value="Custom Jewelry Casting Design">Custom Jewelry Design Layout</option>
                    <option value="Bridal Collection Consultation Booking">Bridal Consultation Appointment</option>
                    <option value="Exchange Value Calculation">Old Gold Exchange Buyback</option>
                    <option value="Solitaire Diamond Certification Inquiry">Diamond Purity Verification</option>
                    <option value="Other Specific Request">Other Specific Request</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-sans font-bold text-neutral-300 uppercase tracking-widest mb-2">
                  Your Message & Specifications
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Specify ornaments styles, gram weights, sizes, or custom requirements..."
                  className="w-full bg-neutral-950 border border-neutral-800 focus:border-gold-500 rounded px-4 py-3 text-sm text-neutral-250 placeholder-neutral-500 outline-none font-sans resize-none"
                ></textarea>
              </div>

              {/* Action buttons */}
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-sans font-bold bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-600 hover:to-gold-500 text-black py-4 rounded shadow-xl hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-widest cursor-pointer"
                id="contact-form-submit-btn"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
