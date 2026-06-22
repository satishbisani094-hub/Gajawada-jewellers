import React, { useState } from 'react';
import { X, CheckCircle, ShieldAlert, Users, TrendingUp, HelpCircle, PlusCircle, Trash2 } from 'lucide-react';
import { Product, CollectionCategory } from '../types';

interface AdminLoginProps {
  onClose: () => void;
  initialTab?: 'customer' | 'owner';
  onLoginSuccess: (user: { type: 'customer' | 'owner'; name: string }) => void;
  products?: Product[];
  categories?: CollectionCategory[];
  onAddProduct?: (product: Product) => void;
  onDeleteProduct?: (productId: string) => void;
  currentUser?: { type: 'customer' | 'owner'; name: string } | null;
}

export default function AdminLogin({
  onClose,
  initialTab = 'customer',
  onLoginSuccess,
  products = [],
  categories = [],
  onAddProduct,
  onDeleteProduct,
  currentUser,
}: AdminLoginProps) {
  const [activeTab, setActiveTab] = useState<'customer' | 'owner'>(
    currentUser ? currentUser.type : initialTab
  );

  // Customer Form State
  const [fullName, setFullName] = useState(currentUser?.type === 'customer' ? currentUser.name : '');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [customerSuccess, setCustomerSuccess] = useState(currentUser?.type === 'customer');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');

  // Store Owner Form State
  const [username, setUsername] = useState('owner');
  const [password, setPassword] = useState('');
  const [ownerSuccess, setOwnerSuccess] = useState(currentUser?.type === 'owner');
  const [ownerError, setOwnerError] = useState('');

  // Form state for adding products
  const [name, setName] = useState('');
  const [category, setCategory] = useState('gold-necklaces');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !category) return;

    const createId = (val: string) => val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now();

    const newProduct: Product = {
      id: createId(name),
      name,
      category,
      description: 'Handcrafted premium BIS Hallmarked jewellery piece.',
      imageUrl: imageUrl || 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop',
      purity: '22K Gold',
      weight: 'Custom weight',
      price: price ? Number(price) : undefined,
      originalPrice: originalPrice ? Number(originalPrice) : undefined,
      rating: 4.8,
      reviewCount: 42,
      tags: [],
      isFeatured: true,
      isBestseller: false
    };

    if (onAddProduct) {
      onAddProduct(newProduct);
    }

    // Reset Form
    setName('');
    setImageUrl('');
    setPrice('');
    setOriginalPrice('');
  };

  // 1. Handle Customer OTP Request
  const handleRequestOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !mobileNumber) return;
    
    // Generate a random 4-digit code
    const code = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(code);
    setOtpSent(true);
    setToastMessage(`OTP sent successfully! Enter ${code} to verify.`);
    setShowToast(true);
  };

  // 2. Handle Customer OTP Verification
  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpCode) return;
    
    if (otpCode === generatedOtp || otpCode === '1234') {
      setCustomerSuccess(true);
      setShowToast(false);
      onLoginSuccess({ type: 'customer', name: fullName || 'Customer' });
      setTimeout(() => {
        onClose();
      }, 2500);
    } else {
      alert('Invalid OTP. Please enter the code shown in the notification.');
    }
  };

  // 3. Handle Owner Login
  const handleOwnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim() === 'owner' && password === 'Gajawada@Secure2026') {
      setOwnerSuccess(true);
      setOwnerError('');
      onLoginSuccess({ type: 'owner', name: 'Store Owner' });
    } else {
      setOwnerError('Invalid secure access credentials.');
    }
  };

  const isUserLoggedIn = customerSuccess || ownerSuccess;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
      <div className="w-full max-w-[460px] rounded-[28px] bg-white shadow-2xl overflow-hidden font-sans border border-neutral-100 relative">
        
        {/* Close button in the top right of the card */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-400 hover:text-neutral-600 transition-colors p-1 z-10 cursor-pointer"
          aria-label="Close portal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* PORTAL BODY CONTAINER */}
        <div className="p-8">
          
          {/* CUSTOMER PORTAL TAB FLOW */}
          {activeTab === 'customer' && (
            <div>
              {customerSuccess ? (
                <div className="text-center py-6 animate-fadeIn">
                  <div className="flex justify-center text-[#065f46] mb-4">
                    <CheckCircle className="w-16 h-16 stroke-[1.5]" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900">Successfully Signed In</h3>
                  <p className="text-sm text-neutral-500 mt-2">
                    Welcome back, <span className="font-semibold text-neutral-800">{fullName}</span>. Loading your profile and tracking database...
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="w-6 h-6 border-2 border-[#065f46] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </div>
              ) : (
                <form onSubmit={otpSent ? handleVerifyOTP : handleRequestOTP} className="space-y-5 animate-fadeIn">
                  {/* Silhouette and price tag overlay */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center mb-4 text-[#065f46]">
                      <div className="relative">
                        <div className="bg-[#065f46]/10 p-4 rounded-full">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-md border border-[#065f46]/20 text-[#065f46]">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">Customer Sign In</h3>
                    <p className="text-xs text-neutral-500 mt-1">Access saved addresses & view live order trackings.</p>
                  </div>

                  <label className="block space-y-2 text-sm font-semibold text-neutral-700">
                    Full Name
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      disabled={otpSent}
                      className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 outline-none transition focus:border-[#065f46] focus:ring-1 focus:ring-[#065f46] disabled:bg-neutral-50 disabled:text-neutral-500"
                      placeholder="e.g. Mani Raman"
                      required
                    />
                  </label>

                  <label className="block space-y-2 text-sm font-semibold text-neutral-700">
                    Mobile Number
                    <input
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value.replace(/[^\d+]/g, ''))}
                      disabled={otpSent}
                      className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 outline-none transition focus:border-[#065f46] focus:ring-1 focus:ring-[#065f46] disabled:bg-neutral-50 disabled:text-neutral-500"
                      placeholder="98765 43210"
                      required
                    />
                  </label>

                  {otpSent && (
                    <label className="block space-y-2 text-sm font-semibold text-neutral-700 animate-fadeIn">
                      Enter 4-Digit OTP
                      <input
                        type="text"
                        maxLength={4}
                        value={otpCode}
                        onChange={(e) => setOtpCode(e.target.value.replace(/\D/g, ''))}
                        className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 outline-none transition focus:border-[#065f46] focus:ring-1 focus:ring-[#065f46]"
                        placeholder="1234"
                        required
                      />
                    </label>
                  )}

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#065f46] py-3.5 text-sm font-bold text-white transition hover:bg-[#044e39] active:scale-[0.99] shadow-md shadow-[#065f46]/15"
                  >
                    {otpSent ? 'Verify & Access' : 'Request OTP'}
                  </button>

                  {otpSent && (
                    <button
                      type="button"
                      onClick={() => {
                        setOtpSent(false);
                        setShowToast(false);
                        setOtpCode('');
                      }}
                      className="w-full text-center text-xs text-neutral-500 hover:text-neutral-700 transition"
                    >
                      Resend OTP / Edit Info
                    </button>
                  )}
                </form>
              )}
            </div>
          )}

          {/* STORE OWNER TAB FLOW */}
          {activeTab === 'owner' && (
            <div>
              {ownerSuccess ? (
                <div className="space-y-5 animate-fadeIn text-neutral-800 relative">
                  <div className="text-center border-b border-neutral-100 pb-3">
                    <div className="flex items-center justify-center text-[#ea580c] mb-2">
                      <CheckCircle className="w-10 h-10 stroke-[1.5]" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900">Store Owner Admin Panel</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">Manage products in the live catalog.</p>
                  </div>

                  <div className="max-h-[420px] overflow-y-auto pr-1 space-y-5">
                    
                    {/* Add Product Form */}
                    <form onSubmit={handleAddSubmit} className="space-y-3.5 border border-neutral-200/60 p-4 rounded-2xl bg-neutral-50">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#ea580c] text-left">Add New Product</h4>
                      
                      <label className="block space-y-1 text-xs font-semibold text-neutral-700 text-left">
                        Product Name
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-800 outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]"
                          placeholder="e.g. Kundan Necklace"
                          required
                        />
                      </label>

                      <label className="block space-y-1 text-xs font-semibold text-neutral-700 text-left">
                        Category
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                          className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-800 outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]"
                        >
                          {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                          ))}
                        </select>
                      </label>

                      <label className="block space-y-1 text-xs font-semibold text-neutral-700 text-left">
                        Image URL
                        <input
                          type="text"
                          value={imageUrl}
                          onChange={(e) => setImageUrl(e.target.value)}
                          className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-800 outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]"
                          placeholder="https://..."
                        />
                      </label>

                      <div className="grid grid-cols-2 gap-3">
                        <label className="block space-y-1 text-xs font-semibold text-neutral-700 text-left">
                          Price (₹)
                          <input
                            type="number"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-800 outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]"
                            placeholder="e.g. 15000"
                          />
                        </label>
                        <label className="block space-y-1 text-xs font-semibold text-neutral-700 text-left">
                          Original Price (₹)
                          <input
                            type="number"
                            value={originalPrice}
                            onChange={(e) => setOriginalPrice(e.target.value)}
                            className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-800 outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]"
                            placeholder="e.g. 18000"
                          />
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-lg bg-[#ea580c] py-2 text-xs font-bold text-white transition hover:bg-[#d94e06] active:scale-[0.99]"
                      >
                        Add Product to Collection
                      </button>
                    </form>

                    {/* Inventory List */}
                    <div className="space-y-2 text-left">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Live Inventory ({products.length})</h4>
                      <div className="divide-y divide-neutral-100 border border-neutral-200/60 rounded-2xl bg-neutral-50 p-2 space-y-1.5">
                        {products.length > 0 ? (
                          products.map((p) => (
                            <div key={p.id} className="flex justify-between items-center text-xs py-1.5 px-2">
                              <div>
                                <p className="font-semibold text-neutral-900">{p.name}</p>
                                <p className="text-[10px] text-neutral-500">{p.category} {p.price && `• ₹${p.price.toLocaleString('en-IN')}`}</p>
                              </div>
                              <button
                                type="button"
                                onClick={() => onDeleteProduct?.(p.id)}
                                className="text-red-500 hover:text-red-700 p-1 transition"
                                title="Delete product"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          ))
                        ) : (
                          <p className="text-[10px] text-neutral-400 p-4 text-center">No products in inventory.</p>
                        )}
                      </div>
                    </div>

                  </div>

                  <button
                    onClick={() => {
                      setOwnerSuccess(false);
                      setPassword('');
                    }}
                    className="w-full rounded-xl bg-neutral-900 py-3 text-xs font-bold text-white transition hover:bg-neutral-800 mt-2"
                  >
                    Logout Portal Session
                  </button>
                </div>
              ) : (
                <form onSubmit={handleOwnerSubmit} className="space-y-5 animate-fadeIn">
                  {/* Silhouette and shield overlay */}
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center mb-4 text-[#ea580c]">
                      <div className="relative">
                        <div className="bg-[#ea580c]/10 p-4 rounded-full">
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-white p-1 rounded-full shadow-md border border-[#ea580c]/20 text-[#ea580c]">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900">Store Owner Sign In</h3>
                  </div>

                  <label className="block space-y-2 text-sm font-semibold text-neutral-700">
                    Phone / Username
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]"
                      placeholder="owner"
                      required
                    />
                  </label>

                  <label className="block space-y-2 text-sm font-semibold text-neutral-700">
                    Access Password
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c]"
                      placeholder="••••••••"
                      required
                    />
                  </label>

                  {ownerError && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-600 flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 shrink-0 text-red-500" />
                      <span>{ownerError}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-[#ea580c] py-3.5 text-sm font-bold text-white transition hover:bg-[#d94e06] active:scale-[0.99] shadow-md shadow-[#ea580c]/15"
                  >
                    Secure Owner Portal
                  </button>

                  <div className="flex justify-between items-center text-[10px] text-neutral-400 font-medium">
                    <span className="flex items-center gap-1">
                      <HelpCircle className="w-3 h-3 text-[#ea580c]" /> Username: owner
                    </span>
                    <span>Password: Gajawada@Secure2026</span>
                  </div>
                </form>
              )}
            </div>
          )}

        </div>
      </div>

      {/* Verification Toast Alert */}
      {showToast && (
        <div className="fixed bottom-6 left-6 z-[100] flex items-center justify-between gap-3 bg-[#111] text-white rounded-xl shadow-2xl px-4 py-3.5 border border-neutral-800 animate-slideUp font-sans text-xs tracking-wide max-w-sm">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
              <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="text-neutral-200">{toastMessage}</span>
          </div>
          <button
            onClick={() => setShowToast(false)}
            className="text-neutral-400 hover:text-white transition-colors ml-1 p-0.5"
            type="button"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
