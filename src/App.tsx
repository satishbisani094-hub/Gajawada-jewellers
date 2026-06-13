/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Product } from './types';

// Importing premium modular components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collections from './components/Collections';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedProducts from './components/FeaturedProducts';
import VirtualConsultant from './components/VirtualConsultant';
import Services from './components/Services';
import LocationMap from './components/LocationMap';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ShortlistDrawer from './components/ShortlistDrawer';
import InquiryModal from './components/InquiryModal';

export default function App() {
  const [shortlist, setShortlist] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isShortlistDrawerOpen, setIsShortlistDrawerOpen] = useState<boolean>(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);
  const [activeInquiryProduct, setActiveInquiryProduct] = useState<Product | null>(null);

  // 1. LocalStorage synchronization for shortlisted products
  useEffect(() => {
    try {
      const stored = localStorage.getItem('gajawada_shortlist');
      if (stored) {
        setShortlist(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('Could not load shortlist state from localStorage:', e);
    }
  }, []);

  const saveShortlist = (updatedList: Product[]) => {
    setShortlist(updatedList);
    try {
      localStorage.setItem('gajawada_shortlist', JSON.stringify(updatedList));
    } catch (e) {
      console.warn('Could not save shortlist state to localStorage:', e);
    }
  };

  // 2. Add / Remove handlers
  const handleToggleShortlist = (product: Product) => {
    const exists = shortlist.some((item) => item.id === product.id);
    if (exists) {
      const filtered = shortlist.filter((item) => item.id !== product.id);
      saveShortlist(filtered);
    } else {
      const updated = [...shortlist, product];
      saveShortlist(updated);
    }
  };

  const handleRemoveFromShortlist = (product: Product) => {
    const filtered = shortlist.filter((item) => item.id !== product.id);
    saveShortlist(filtered);
  };

  const handleOpenInquiryModal = (product?: Product | null) => {
    setActiveInquiryProduct(product || null);
    setIsInquiryModalOpen(true);
  };

  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans antialiased overflow-x-hidden selection:bg-gold-500 selection:text-black">
      
      {/* 1. GLASS NAVIGATIONAL CORE */}
      <Navbar
        shortlist={shortlist}
        onRemoveFromShortlist={handleRemoveFromShortlist}
        onOpenShortlist={() => setIsShortlistDrawerOpen(true)}
        onOpenInquiryModal={handleOpenInquiryModal}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
      />

      {/* 2. MAIN APP CONTENT FLOW */}
      <main className="relative">
        {/* Cinematic Landing Screen */}
        <Hero onOpenInquiryModal={() => handleOpenInquiryModal(null)} />

        {/* Our Heritage Story */}
        <About />

        {/* Dynamic Jewelry Catalogue & Categories */}
        <Collections
          shortlist={shortlist}
          onToggleShortlist={handleToggleShortlist}
          onOpenInquiryModal={handleOpenInquiryModal}
          searchQuery={searchQuery}
        />

        {/* Luxury Brand Pillar Credentials */}
        <WhyChooseUs />

        {/* High-Fidelity Masterpiece Spotlight */}
        <FeaturedProducts
          shortlist={shortlist}
          onToggleShortlist={handleToggleShortlist}
          onOpenInquiryModal={handleOpenInquiryModal}
        />

        {/* Interactive Virtual Jewelry Stylist Assistant */}
        <VirtualConsultant onOpenInquiryModal={handleOpenInquiryModal} />

        {/* Exclusive Store Services (Repairs, Exchanges) */}
        <Services onOpenInquiryModal={(item) => handleOpenInquiryModal(item)} />

        {/* Detailed Google Maps Integrations */}
        <LocationMap />

        {/* Complete Client Enquiry Form */}
        <ContactForm initialSubject={activeInquiryProduct ? `Inquiry for ${activeInquiryProduct.name}` : ''} />
      </main>

      {/* 3. FOOTER */}
      <Footer />

      {/* 4. OVERLAY CORE CONTROLLERS */}
      
      {/* Shortlist drawer widget */}
      <ShortlistDrawer
        isOpen={isShortlistDrawerOpen}
        onClose={() => setIsShortlistDrawerOpen(false)}
        shortlist={shortlist}
        onRemoveFromShortlist={handleRemoveFromShortlist}
        onOpenInquiryModal={handleOpenInquiryModal}
      />

      {/* Product-specific Inquiry Modal dialog */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        product={activeInquiryProduct}
      />

      {/* Floating active WhatsApp widget */}
      <WhatsAppButton />

    </div>
  );
}
