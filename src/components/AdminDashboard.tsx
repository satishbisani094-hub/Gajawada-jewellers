import React, { useState, useMemo } from 'react';
import { 
  Plus, 
  Trash2, 
  LogOut, 
  Package, 
  Folder, 
  DollarSign, 
  Award, 
  Search, 
  Image, 
  FileText, 
  Layers, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { Product, CollectionCategory } from '../types';

interface AdminDashboardProps {
  products: Product[];
  categories: CollectionCategory[];
  onAddProduct: (product: Product) => void;
  onDeleteProduct: (productId: string) => void;
  onLogout: () => void;
}

export default function AdminDashboard({
  products = [],
  categories = [],
  onAddProduct,
  onDeleteProduct,
  onLogout,
}: AdminDashboardProps) {
  // Form State
  const [name, setName] = useState('');
  const [category, setCategory] = useState('gold-necklaces');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [purity, setPurity] = useState('22K Gold');
  const [weight, setWeight] = useState('Custom weight');
  const [description, setDescription] = useState('Handcrafted premium BIS Hallmarked jewellery piece.');
  
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Stats calculation
  const stats = useMemo(() => {
    const total = products.length;
    const featured = products.filter(p => p.isFeatured).length;
    const pricedProducts = products.filter(p => p.price && p.price > 0);
    const avgPrice = pricedProducts.length > 0 
      ? Math.round(pricedProducts.reduce((sum, p) => sum + (p.price || 0), 0) / pricedProducts.length)
      : 0;
    
    return { total, featured, avgPrice };
  }, [products]);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !category) return;

    const createId = (val: string) => 
      val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now();

    const newProduct: Product = {
      id: createId(name),
      name,
      category,
      description,
      imageUrl: imageUrl || 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop',
      purity,
      weight,
      price: price ? Number(price) : undefined,
      originalPrice: originalPrice ? Number(originalPrice) : undefined,
      rating: 4.8,
      reviewCount: Math.floor(Math.random() * 20) + 10,
      tags: [],
      isFeatured: true,
      isBestseller: false
    };

    onAddProduct(newProduct);

    // Reset Form
    setName('');
    setImageUrl('');
    setPrice('');
    setOriginalPrice('');
    setPurity('22K Gold');
    setWeight('Custom weight');
    setDescription('Handcrafted premium BIS Hallmarked jewellery piece.');
  };

  return (
    <div className="bg-[#050505] min-h-screen text-white font-sans selection:bg-gold-500 selection:text-black">
      {/* 1. Header Bar */}
      <header className="border-b border-gold-950/20 bg-neutral-950/80 backdrop-blur-md sticky top-0 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-xl font-black text-gold-300 tracking-widest uppercase leading-none">
              Gajawada
            </span>
            <span className="font-sans text-[9px] font-bold text-white tracking-[0.35em] uppercase mt-0.5">
              Jewellers Dashboard
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-full flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live: Store Owner Session
            </span>
            <button
              onClick={onLogout}
              className="px-4 py-1.5 bg-red-950/40 hover:bg-red-900/60 border border-red-900/30 text-red-400 hover:text-white rounded-full text-xs font-bold transition-all flex items-center gap-1.5 active:scale-[0.97]"
            >
              <LogOut className="w-3.5 h-3.5" /> Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 space-y-8">
        {/* 2. Overview Stats Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glassmorphism bg-neutral-950/40 border border-gold-900/20 p-5 rounded-2xl flex items-center gap-4 hover:border-gold-500/30 transition-all group duration-300">
            <div className="bg-[#ea580c]/10 text-[#ea580c] p-3.5 rounded-xl group-hover:scale-110 transition-transform">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Total Products</p>
              <h3 className="text-2xl font-black mt-1 text-white">{stats.total}</h3>
            </div>
          </div>

          <div className="glassmorphism bg-neutral-950/40 border border-gold-900/20 p-5 rounded-2xl flex items-center gap-4 hover:border-gold-500/30 transition-all group duration-300">
            <div className="bg-gold-400/10 text-gold-400 p-3.5 rounded-xl group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Catalog Categories</p>
              <h3 className="text-2xl font-black mt-1 text-white">{categories.length}</h3>
            </div>
          </div>

          <div className="glassmorphism bg-neutral-950/40 border border-gold-900/20 p-5 rounded-2xl flex items-center gap-4 hover:border-gold-500/30 transition-all group duration-300">
            <div className="bg-emerald-500/10 text-emerald-400 p-3.5 rounded-xl group-hover:scale-110 transition-transform">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Average Gold Value</p>
              <h3 className="text-2xl font-black mt-1 text-white">₹{stats.avgPrice.toLocaleString('en-IN')}</h3>
            </div>
          </div>
        </section>

        {/* 3. Main Workspace Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Side: Product Creation Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-neutral-950 border border-gold-900/20 p-6 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="flex items-center gap-2 mb-6 border-b border-gold-900/10 pb-4">
                <Sparkles className="w-5 h-5 text-gold-400" />
                <h2 className="font-serif text-lg font-bold text-white uppercase tracking-wider">Add New Masterpiece</h2>
              </div>

              <form onSubmit={handleAddSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Product Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900/80 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
                    placeholder="e.g. Traditional Temple Choker"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Category</label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-900/80 px-4 py-3 text-sm text-white outline-none focus:border-gold-500"
                    >
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Gold Purity</label>
                    <input
                      type="text"
                      value={purity}
                      onChange={(e) => setPurity(e.target.value)}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-900/80 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-gold-500"
                      placeholder="e.g. 22K Gold"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Weight Description</label>
                    <input
                      type="text"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-900/80 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-gold-500"
                      placeholder="e.g. 45.2 grams"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Image URL</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="w-full rounded-xl border border-neutral-800 bg-neutral-900/80 pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-gold-500"
                        placeholder="https://images.unsplash..."
                      />
                      <Image className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Discount Price (₹)</label>
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-900/80 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-gold-500"
                      placeholder="e.g. 145000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Original Price (₹)</label>
                    <input
                      type="number"
                      value={originalPrice}
                      onChange={(e) => setOriginalPrice(e.target.value)}
                      className="w-full rounded-xl border border-neutral-800 bg-neutral-900/80 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-gold-500"
                      placeholder="e.g. 175000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1.5">Product Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900/80 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-gold-500 resize-none"
                    placeholder="Provide details about craftsmanship and style..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 rounded-xl bg-gradient-to-r from-gold-600 to-gold-400 text-neutral-950 py-3.5 text-sm font-bold tracking-wider uppercase transition hover:opacity-90 active:scale-[0.98] shadow-lg shadow-gold-500/10 flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4 stroke-[3]" /> Add to Catalog Collection
                </button>
              </form>
            </div>
          </div>

          {/* Right Side: Inventory Listing & Management */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-neutral-950 border border-gold-900/20 p-6 rounded-3xl">
              
              {/* Toolbar */}
              <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between mb-6">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search gold jewelry inventory..."
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-900/80 pl-10 pr-4 py-2.5 text-xs text-white placeholder-neutral-500 outline-none focus:border-gold-500"
                  />
                  <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>

                <div className="flex gap-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="rounded-xl border border-neutral-800 bg-neutral-900/80 px-3.5 py-2.5 text-xs text-neutral-300 outline-none focus:border-gold-500"
                  >
                    <option value="all">All Categories</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Table List */}
              <div className="border border-neutral-900 rounded-2xl overflow-hidden bg-neutral-950/50">
                <div className="max-h-[500px] overflow-y-auto divide-y divide-neutral-900">
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((p) => (
                      <div key={p.id} className="flex items-center justify-between p-4 hover:bg-neutral-900/40 transition-colors group">
                        <div className="flex items-center gap-4 min-w-0">
                          <img
                            src={p.imageUrl}
                            alt={p.name}
                            className="w-12 h-12 rounded-xl object-cover border border-gold-950/20 shrink-0 bg-neutral-900"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop';
                            }}
                          />
                          <div className="min-w-0">
                            <h4 className="font-serif text-sm font-bold text-white group-hover:text-gold-300 transition-colors truncate">
                              {p.name}
                            </h4>
                            <p className="text-[10px] text-neutral-500 mt-0.5 flex items-center gap-1.5 flex-wrap">
                              <span className="text-neutral-400 bg-neutral-900 border border-neutral-800/80 px-2 py-0.5 rounded uppercase font-sans">
                                {p.category.replace('-', ' ')}
                              </span>
                              <span>•</span>
                              <span>{p.purity}</span>
                              <span>•</span>
                              <span>{p.weight}</span>
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-6 shrink-0 pl-4">
                          <div className="text-right">
                            {p.price ? (
                              <>
                                <p className="text-xs font-bold text-white">₹{p.price.toLocaleString('en-IN')}</p>
                                {p.originalPrice && (
                                  <p className="text-[9px] text-neutral-500 line-through">₹{p.originalPrice.toLocaleString('en-IN')}</p>
                                )}
                              </>
                            ) : (
                              <span className="text-[10px] text-gold-400 italic">Call for Price</span>
                            )}
                          </div>

                          <button
                            onClick={() => {
                              if (confirm(`Are you sure you want to delete "${p.name}"?`)) {
                                onDeleteProduct(p.id);
                              }
                            }}
                            className="text-neutral-500 hover:text-red-500 hover:bg-red-500/10 p-2 rounded-xl transition-all"
                            title="Delete Item"
                          >
                            <Trash2 className="w-4.5 h-4.5" />
                          </button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12">
                      <Package className="w-12 h-12 text-neutral-600 mx-auto stroke-[1.25] mb-2" />
                      <p className="text-sm font-bold text-neutral-400">No items match your filters</p>
                      <p className="text-xs text-neutral-600 mt-1">Try resetting search or selecting another category.</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Status footer */}
              <div className="mt-4 flex justify-between items-center text-[10px] text-neutral-600 border-t border-neutral-900 pt-4">
                <span>Showing {filteredProducts.length} of {products.length} catalog items</span>
                <span className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-gold-400" /> BIS 916 Government Registered Vault
                </span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
