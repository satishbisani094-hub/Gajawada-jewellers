import { useState, useEffect } from 'react';
import { Menu, X, Heart, Search, Phone, Award, TrendingUp, TrendingDown, Clock, MapPin, ShoppingCart, User, Lock } from 'lucide-react';
import { liveRates } from '../data/jewelryData';
import { Product, LiveRate } from '../types';
import { fetchLiveRates } from '../utils/goldRateService';

interface NavbarProps {
  shortlist: Product[];
  cart: Product[];
  onRemoveFromShortlist: (product: Product) => void;
  onOpenShortlist: () => void;
  onOpenInquiryModal: (product?: Product) => void;
  onOpenAdmin: (tab: 'customer' | 'owner') => void;
  onOpenCart: () => void;
  onSearchChange: (query: string) => void;
  searchQuery: string;
  currentUser: { type: 'customer' | 'owner'; name: string } | null;
  onLogout: () => void;
}

export default function Navbar({
  shortlist,
  cart,
  onRemoveFromShortlist,
  onOpenShortlist,
  onOpenCart,
  onOpenInquiryModal,
  onOpenAdmin,
  onSearchChange,
  searchQuery,
  currentUser,
  onLogout,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [rates, setRates] = useState<LiveRate[]>(liveRates);

  // Fetch live market rates on component load
  useEffect(() => {
    let active = true;
    const loadRates = async () => {
      const live = await fetchLiveRates(liveRates);
      if (active) {
        setRates(live);
      }
    };
    loadRates();
    return () => {
      active = false;
    };
  }, []);

  // Monitor page scroll to activate elegant sticky navbar style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* 1. TOP TICKER BAR: Live Gold Rates & Store Info */}
      <div className="bg-black text-white py-1.5 px-4 text-xs select-none border-b border-gold-900/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1.5">
          {/* Daily Gold Ticker */}
          <div className="flex items-center gap-2 overflow-hidden w-full md:w-3/4">
            <span className="text-[10px] font-sans font-bold bg-gold-500 text-black px-1.5 py-0.5 rounded tracking-wider uppercase shrink-0">
              Live Rates
            </span>
            <div className="relative overflow-hidden w-full h-4 flex items-center">
              <div className="animate-ticker flex gap-8 whitespace-nowrap text-[11px] font-mono font-medium tracking-wide text-gold-200">
                {/* Double the array for seamless loops */}
                {[...rates, ...rates].map((rate, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1.5">
                    <span className="font-sans font-semibold text-white">{rate.item} ({rate.purity})</span>: 
                    <span>₹{rate.rate.toLocaleString('en-IN')}/{rate.unit}</span>
                    {rate.change >= 0 ? (
                      <span className="text-green-400 inline-flex items-center text-[10px]">
                        <TrendingUp className="w-3 h-3" /> +₹{rate.change}
                      </span>
                    ) : (
                      <span className="text-red-400 inline-flex items-center text-[10px]">
                        <TrendingDown className="w-3 h-3" /> -₹{Math.abs(rate.change)}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick contact context */}
          <div className="hidden md:flex items-center gap-4 text-neutral-400 shrink-0 font-sans tracking-wide">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gold-500" /> 10:30 AM – 9:00 PM
            </span>
            <span className="h-3 w-[1px] bg-neutral-800"></span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-gold-500" /> Boduppal, Hyderabad
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled || isSearchOpen
            ? 'bg-neutral-950/95 backdrop-blur-md shadow-lg border-b border-gold-900/30 py-3'
            : 'bg-gradient-to-b from-black/80 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Logo Brand Frame */}
          <a href="#hero" className="flex flex-col select-none group text-left">
            <span className="font-serif text-xl md:text-2xl font-bold text-gold-300 tracking-widest leading-none group-hover:text-gold-200 transition-colors uppercase">
              Gajawada
            </span>
            <span className="font-sans text-[9px] md:text-[10px] font-semibold text-white tracking-[0.35em] uppercase text-left">
              Jewellers
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-8 text-xs font-sans font-medium uppercase tracking-[0.18em] text-neutral-300">
            <li>
              <a href="#hero" className="hover:text-gold-300 transition-colors">Home</a>
            </li>
            <li>
              <a href="#collections" className="hover:text-gold-300 transition-colors">Collections</a>
            </li>
            <li>
              <a href="#services" className="hover:text-gold-300 transition-colors">Services</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gold-300 transition-colors">Contact</a>
            </li>
          </ul>

          {/* Action Icons and CTA */}
          <div className="flex items-center gap-3 md:gap-5">
            {/* Search Toggle */}
            <div className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="text-neutral-400 hover:text-gold-300 transition-colors p-1"
                aria-label="Toggle search bar"
                id="navbar-search-btn"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>



            {/* Shortlist Bag Heart */}
            <button
              onClick={onOpenShortlist}
              className="relative text-neutral-400 hover:text-gold-300 transition-colors p-1 flex items-center"
              aria-label="Open Shortlist"
              id="navbar-shortlist-btn"
            >
              <Heart className={`w-5 h-5 ${shortlist.length > 0 ? 'text-red-500 fill-red-500' : ''}`} />
              {shortlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold-400 text-black font-sans text-[9px] font-bold rounded-full flex items-center justify-center animate-bounce">
                  {shortlist.length}
                </span>
              )}
            </button>

            <button
              onClick={onOpenCart}
              className="relative text-neutral-400 hover:text-gold-300 transition-colors p-1 flex items-center"
              aria-label="Open Cart"
              id="navbar-cart-btn"
            >
              <ShoppingCart className="w-5 h-5" />
              {cart.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold-400 text-black font-sans text-[9px] font-bold rounded-full flex items-center justify-center animate-bounce">
                  {cart.length}
                </span>
              )}
            </button>

            {/* Store Call CTA */}
            <a
              href="tel:+918919329919"
              className="hidden sm:flex items-center gap-1.5 text-xs font-sans font-bold bg-gold-900/10 border border-gold-500/35 text-gold-300 px-3 py-1.5 rounded hover:bg-gold-500 hover:text-black transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5" /> Call Store
            </a>

            {/* Book Consult btn */}
            <button
              onClick={() => onOpenInquiryModal()}
              className="hidden lg:block text-xs font-sans font-bold bg-gold-500 hover:bg-gold-600 text-black px-4 py-2 rounded shadow-md hover:shadow-gold-500/20 transition-all duration-300 tracking-wider uppercase"
              id="navbar-book-btn"
            >
              Inquire Now
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-neutral-300 hover:text-gold-300 p-1 block"
              aria-label="Open main menu"
              id="navbar-hamburger-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* 3. EXPANDABLE HERO SEARCH PANEL */}
        {isSearchOpen && (
          <div className="absolute top-[100%] left-0 w-full bg-neutral-950 border-b border-gold-900/30 p-4 animate-fadeIn">
            <div className="max-w-2xl mx-auto flex items-center gap-2">
              <Search className="w-5 h-5 text-gold-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search gold necklaces, diamond rings, bangles, bridal sets..."
                className="w-full bg-transparent text-white border-b border-neutral-800 focus:border-gold-500 px-2 py-1.5 text-sm uppercase tracking-wider outline-none font-sans"
              />
              <button
                onClick={() => {
                  onSearchChange('');
                  setIsSearchOpen(false);
                }}
                className="text-xs text-neutral-400 hover:text-white"
              >
                close
              </button>
            </div>
          </div>
        )}

        {/* 4. MOBILE DRAWER NAVIGATION */}
        {isOpen && (
          <div className="lg:hidden absolute top-[100%] left-0 w-full bg-neutral-950 border-b border-gold-900/35 shadow-2xl p-6 py-8 flex flex-col gap-6 animate-slideDown">
            <ul className="flex flex-col gap-6 text-sm font-sans font-bold tracking-[0.2em] text-neutral-200">
              <li>
                <a
                  href="#hero"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gold-300 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#collections"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gold-300 transition-colors"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gold-300 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="hover:text-gold-300 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>

            <div className="h-[1px] bg-neutral-900 w-full"></div>

            {/* Mobile Live rate snapshot status badge */}
            <div className="bg-neutral-900/70 py-3 px-4 rounded border border-gold-900/20 text-left">
              <h4 className="text-[10px] font-bold text-gold-400 uppercase tracking-widest flex items-center gap-1.5 mb-1.5">
                <Award className="w-3.5 h-3.5 text-gold-400" /> Boduppal Store Gold Rate (22K)
              </h4>
              <p className="font-mono text-base font-semibold text-white">
                ₹{rates[1].rate.toLocaleString('en-IN')}/gram
                <span className={`text-xs ml-2 font-sans ${rates[1].change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {rates[1].change >= 0 ? '+' : ''}₹{Math.abs(rates[1].change)} Today
                </span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="tel:+918919329919"
                className="flex items-center justify-center gap-2 text-xs font-sans font-bold bg-neutral-900 border border-gold-500/25 text-gold-300 py-3 rounded"
              >
                <Phone className="w-4 h-4" /> Call Us
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenInquiryModal();
                }}
                className="text-xs font-sans font-bold bg-gold-500 text-black py-3 rounded uppercase tracking-wider"
              >
                Inquire Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
