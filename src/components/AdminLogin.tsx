import { useState } from 'react';
import { X, CheckCircle, ShieldAlert, Users, TrendingUp, HelpCircle } from 'lucide-react';

interface AdminLoginProps {
  onClose: () => void;
  initialTab?: 'customer' | 'owner';
}

export default function AdminLogin({ onClose, initialTab = 'customer' }: AdminLoginProps) {
  const [activeTab, setActiveTab] = useState<'customer' | 'owner'>(initialTab);

  // Customer Form State
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [customerSuccess, setCustomerSuccess] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');

  // Store Owner Form State
  const [username, setUsername] = useState('owner');
  const [password, setPassword] = useState('');
  const [ownerSuccess, setOwnerSuccess] = useState(false);
  const [ownerError, setOwnerError] = useState('');

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
    if (username.trim() === 'owner' && password === 'admin@123') {
      setOwnerSuccess(true);
      setOwnerError('');
    } else {
      setOwnerError('Invalid secure access credentials.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm">
      <div className="w-full max-w-[460px] rounded-[28px] bg-white shadow-2xl overflow-hidden font-sans border border-neutral-100">
        
        {/* TAB CONTROLS */}
        <div className="flex border-b border-neutral-200/80 relative">
          <button
            type="button"
            onClick={() => {
              if (!customerSuccess && !ownerSuccess) {
                setActiveTab('customer');
                setOwnerError('');
              }
            }}
            className={`flex-1 py-4 text-center font-bold text-sm tracking-wide transition-all ${
              activeTab === 'customer'
                ? 'text-[#065f46] border-b-[3px] border-[#065f46]'
                : 'text-neutral-500 hover:text-neutral-700 bg-neutral-50/50'
            }`}
            disabled={customerSuccess || ownerSuccess}
          >
            Customer Portal
          </button>
          <button
            type="button"
            onClick={() => {
              if (!customerSuccess && !ownerSuccess) {
                setActiveTab('owner');
                setOwnerError('');
              }
            }}
            className={`flex-1 py-4 text-center font-bold text-sm tracking-wide transition-all ${
              activeTab === 'owner'
                ? 'text-[#ea580c] border-b-[3px] border-[#ea580c]'
                : 'text-neutral-500 hover:text-neutral-700 bg-neutral-50/50'
            }`}
            disabled={customerSuccess || ownerSuccess}
          >
            Store Owner
          </button>
          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors p-1"
            aria-label="Close portal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

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
                <div className="space-y-6 animate-fadeIn text-neutral-800">
                  <div className="text-center border-b border-neutral-100 pb-4">
                    <div className="flex items-center justify-center text-[#ea580c] mb-3">
                      <CheckCircle className="w-12 h-12 stroke-[1.5]" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900">Secure Portal Active</h3>
                    <p className="text-xs text-neutral-500">Welcome back, Gajawada Admin Store Representative.</p>
                  </div>

                  {/* MINI MOCK DASHBOARD STATS */}
                  <div className="grid grid-cols-2 gap-3.5">
                    <div className="bg-neutral-50 p-3.5 rounded-2xl border border-neutral-200/50">
                      <div className="flex items-center gap-2 text-neutral-500 mb-1">
                        <Users className="w-4 h-4 text-[#ea580c]" />
                        <span className="text-[10px] uppercase font-bold tracking-wider">Today's Visits</span>
                      </div>
                      <p className="text-xl font-bold text-neutral-900">45 Users</p>
                    </div>

                    <div className="bg-neutral-50 p-3.5 rounded-2xl border border-neutral-200/50">
                      <div className="flex items-center gap-2 text-neutral-500 mb-1">
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                        <span className="text-[10px] uppercase font-bold tracking-wider">Gold (22K)</span>
                      </div>
                      <p className="text-xl font-bold text-neutral-900">₹11,900/g</p>
                    </div>
                  </div>

                  {/* MOCK CLIENT INQUIRIES VIEW */}
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500">Active WhatsApp Leads</h4>
                      <span className="bg-[#ea580c]/10 text-[#ea580c] px-2 py-0.5 rounded text-[10px] font-bold">18 Pending</span>
                    </div>
                    
                    <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
                      <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100 flex justify-between items-center text-xs">
                        <div>
                          <p className="font-semibold text-neutral-900">Kundan Bridal Choker</p>
                          <p className="text-[10px] text-neutral-500">Inquiry by Ramesh K. • 12 mins ago</p>
                        </div>
                        <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Live</span>
                      </div>

                      <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100 flex justify-between items-center text-xs">
                        <div>
                          <p className="font-semibold text-neutral-900">Diamond Solitaire Ring</p>
                          <p className="text-[10px] text-neutral-500">Inquiry by Priya S. • 45 mins ago</p>
                        </div>
                        <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Live</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setOwnerSuccess(false);
                      setPassword('');
                    }}
                    className="w-full rounded-xl bg-neutral-900 py-3 text-xs font-bold text-white transition hover:bg-neutral-800"
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
                    <span>Password: admin@123</span>
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
