/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Product } from './types';
import { collectionCategories } from './data/jewelryData';

// Importing premium modular components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import AdminLogin from './components/AdminLogin';
import CartDrawer from './components/CartDrawer';
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
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState<boolean>(false);
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState<boolean>(false);
  const [activeInquiryProduct, setActiveInquiryProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [isLoginOpen, setIsLoginOpen] = useState<boolean>(false);
  const [loginTab, setLoginTab] = useState<'customer' | 'owner'>('customer');
  const [currentUser, setCurrentUser] = useState<{ type: 'customer' | 'owner'; name: string } | null>(null);

  const handleLogout = () => {
    setCurrentUser(null);
  };

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

  const DB_URL = 'https://api.restful-api.dev/objects/ff8081819d82fab6019eca12b0160b03';

  useEffect(() => {
    const loadProducts = async () => {
      let localData: Product[] = [];
      try {
        const stored = localStorage.getItem('gajawada_products');
        if (stored) {
          localData = JSON.parse(stored);
        }
      } catch (e) {
        console.warn('Could not load from localStorage:', e);
      }

      try {
        const response = await fetch(DB_URL);
        if (response.ok) {
          const result = await response.json();
          if (result && result.data && Array.isArray(result.data.products)) {
            setProducts(result.data.products);
            localStorage.setItem('gajawada_products', JSON.stringify(result.data.products));
            return;
          }
        }
      } catch (e) {
        console.warn('Could not load products from remote database, using local cache:', e);
      }

      setProducts(localData);
    };

    loadProducts();
  }, []);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem('gajawada_cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    } catch (e) {
      console.warn('Could not load cart from localStorage:', e);
    }
  }, []);

  const saveProducts = async (updatedProducts: Product[]) => {
    setProducts(updatedProducts);
    try {
      localStorage.setItem('gajawada_products', JSON.stringify(updatedProducts));
    } catch (e) {
      console.warn('Could not save product collection to localStorage:', e);
    }

    try {
      await fetch(DB_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'gajawada-products',
          data: {
            products: updatedProducts,
          },
        }),
      });
    } catch (e) {
      console.error('Could not save product collection to remote database:', e);
    }
  };

  const handleAddProduct = (product: Product) => {
    saveProducts([...products, product]);
  };

  const handleDeleteProduct = (productId: string) => {
    saveProducts(products.filter((item) => item.id !== productId));
  };

  const saveShortlist = (updatedList: Product[]) => {
    setShortlist(updatedList);
    try {
      localStorage.setItem('gajawada_shortlist', JSON.stringify(updatedList));
    } catch (e) {
      console.warn('Could not save shortlist state to localStorage:', e);
    }
  };

  const saveCart = (updatedCart: Product[]) => {
    setCart(updatedCart);
    try {
      localStorage.setItem('gajawada_cart', JSON.stringify(updatedCart));
    } catch (e) {
      console.warn('Could not save cart state to localStorage:', e);
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

  const handleAddToCart = (product: Product) => {
    if (cart.some((item) => item.id === product.id)) {
      setIsCartDrawerOpen(true);
      return;
    }
    saveCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId: string) => {
    saveCart(cart.filter((item) => item.id !== productId));
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
        cart={cart}
        onRemoveFromShortlist={handleRemoveFromShortlist}
        onOpenShortlist={() => setIsShortlistDrawerOpen(true)}
        onOpenCart={() => setIsCartDrawerOpen(true)}
        onOpenInquiryModal={handleOpenInquiryModal}
        onOpenAdmin={(tab) => {
          setLoginTab(tab);
          setIsLoginOpen(true);
        }}
        onSearchChange={setSearchQuery}
        searchQuery={searchQuery}
        currentUser={currentUser}
        onLogout={handleLogout}
      />

      {/* 2. MAIN APP CONTENT FLOW */}
      <main className="relative">
        {/* Cinematic Landing Screen */}
        <Hero onOpenInquiryModal={() => handleOpenInquiryModal(null)} />

        {/* Dynamic Jewelry Catalogue & Categories */}
        <Collections
          products={products}
          shortlist={shortlist}
          cart={cart}
          onToggleShortlist={handleToggleShortlist}
          onAddToCart={handleAddToCart}
          onOpenInquiryModal={handleOpenInquiryModal}
          searchQuery={searchQuery}
        />

        {isLoginOpen && (
          <AdminLogin
            initialTab={loginTab}
            products={products}
            categories={collectionCategories}
            onAddProduct={handleAddProduct}
            onDeleteProduct={handleDeleteProduct}
            onClose={() => setIsLoginOpen(false)}
            onLoginSuccess={setCurrentUser}
            currentUser={currentUser}
          />
        )}

        {/* Luxury Brand Pillar Credentials */}
        <WhyChooseUs />

        {/* High-Fidelity Masterpiece Spotlight */}
        <FeaturedProducts
          products={products}
          shortlist={shortlist}
          onToggleShortlist={handleToggleShortlist}
          onOpenInquiryModal={handleOpenInquiryModal}
        />

        {/* Interactive Virtual Jewelry Stylist Assistant */}
        <VirtualConsultant products={products} onOpenInquiryModal={handleOpenInquiryModal} />

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

      <CartDrawer
        isOpen={isCartDrawerOpen}
        cart={cart}
        onClose={() => setIsCartDrawerOpen(false)}
        onRemoveFromCart={handleRemoveFromCart}
      />

      {/* Product-specific Inquiry Modal dialog */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        product={activeInquiryProduct}
        onClearProduct={() => setActiveInquiryProduct(null)}
      />

      {/* Floating active WhatsApp widget */}
      <WhatsAppButton />

    </div>
  );
}
