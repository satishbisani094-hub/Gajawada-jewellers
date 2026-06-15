import { useState } from 'react';
import { X, Trash2, PlusCircle } from 'lucide-react';
import { CollectionCategory, Product } from '../types';

interface AdminDashboardProps {
  categories: CollectionCategory[];
  products: Product[];
  onSaveProducts: (products: Product[]) => void;
  onDeleteProduct: (productId: string) => void;
  onClose: () => void;
}

export default function AdminDashboard({ categories, products, onSaveProducts, onDeleteProduct, onClose }: AdminDashboardProps) {
  const [name, setName] = useState('');
  const [category, setCategory] = useState(categories[0]?.id || '');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [rating, setRating] = useState('4.7');
  const [reviewCount, setReviewCount] = useState('120');
  const [tagsText, setTagsText] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [isBestseller, setIsBestseller] = useState(false);

  const createId = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') + '-' + Date.now();

  const resetForm = () => {
    setName('');
    setCategory(categories[0]?.id || '');
    setImageUrl('');
    setPrice('');
    setOriginalPrice('');
    setRating('4.7');
    setReviewCount('120');
    setTagsText('');
    setIsFeatured(false);
    setIsBestseller(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !category) {
      return;
    }

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
      rating: rating ? Number(rating) : undefined,
      reviewCount: reviewCount ? Number(reviewCount) : undefined,
      tags: tagsText.split(',').map((tag) => tag.trim()).filter(Boolean),
      isFeatured,
      isBestseller,
    };

    onSaveProducts([...products, newProduct]);
    resetForm();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm p-4">
      <div className="mx-auto w-full max-w-6xl rounded-3xl bg-neutral-950 border border-gold-900/50 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-gold-900/30 bg-neutral-900 px-6 py-4">
          <div>
            <h2 className="text-lg font-semibold text-white">Admin Dashboard</h2>
            <p className="text-xs text-neutral-400">Add products to the collection and manage existing inventory.</p>
          </div>
          <button onClick={onClose} className="text-neutral-400 hover:text-white p-2 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid gap-6 p-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-gold-800/40 bg-neutral-900/80 p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-neutral-300">
                  Product Name
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white outline-none focus:border-gold-500"
                    placeholder="e.g. Kundan Bridal Choker"
                  />
                </label>
                <label className="space-y-2 text-sm text-neutral-300">
                  Category
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white outline-none focus:border-gold-500"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="space-y-2 text-sm text-neutral-300 block">
                Image URL
                <input
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white outline-none focus:border-gold-500"
                  placeholder="https://..."
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-neutral-300">
                  Price
                  <input
                    type="number"
                    step="0.01"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white outline-none focus:border-gold-500"
                    placeholder="e.g. 3699"
                  />
                </label>
                <label className="space-y-2 text-sm text-neutral-300">
                  Original Price
                  <input
                    type="number"
                    step="0.01"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(e.target.value)}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white outline-none focus:border-gold-500"
                    placeholder="e.g. 6999"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-neutral-300">
                  Rating
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="5"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white outline-none focus:border-gold-500"
                    placeholder="e.g. 4.7"
                  />
                </label>
                <label className="space-y-2 text-sm text-neutral-300">
                  Review Count
                  <input
                    type="number"
                    min="0"
                    value={reviewCount}
                    onChange={(e) => setReviewCount(e.target.value)}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white outline-none focus:border-gold-500"
                    placeholder="e.g. 120"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-neutral-300">
                  Tags
                  <input
                    value={tagsText}
                    onChange={(e) => setTagsText(e.target.value)}
                    className="w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white outline-none focus:border-gold-500"
                    placeholder="e.g. Bridal, Kundan, Gold"
                  />
                </label>
                <label className="inline-flex flex-col justify-between gap-2 text-sm text-neutral-300">
                  <span>Bestseller</span>
                  <input
                    type="checkbox"
                    checked={isBestseller}
                    onChange={(e) => setIsBestseller(e.target.checked)}
                    className="h-4 w-4 rounded border-neutral-700 bg-neutral-900 text-gold-500 focus:ring-gold-500"
                  />
                </label>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <label className="inline-flex items-center gap-2 text-sm text-neutral-300">
                  <input
                    type="checkbox"
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.checked)}
                    className="h-4 w-4 rounded border-neutral-700 bg-neutral-900 text-gold-500 focus:ring-gold-500"
                  />
                  Feature this product
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-gold-400"
                >
                  <PlusCircle className="w-4 h-4" /> Add Product
                </button>
              </div>
            </form>
          </section>

          <section className="space-y-5">
            <div className="rounded-3xl border border-gold-800/40 bg-neutral-900/80 p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-300">Inventory</h3>
              <p className="text-xs text-neutral-400 mt-2">Manage products currently available for the collections page.</p>
            </div>

            <div className="divide-y divide-neutral-800 overflow-hidden rounded-3xl border border-gold-800/40 bg-neutral-900/90">
              {products.length === 0 ? (
                <div className="p-6 text-center text-sm text-neutral-400">No products added yet.</div>
              ) : (
                products.map((product) => (
                  <div key={product.id} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-white">{product.name}</p>
                      <p className="text-xs text-neutral-400">{product.category}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-neutral-400">
                        {product.price !== undefined && (
                          <span className="font-semibold text-white">₹{product.price.toLocaleString('en-IN')}</span>
                        )}
                        {product.originalPrice !== undefined && (
                          <span className="line-through text-red-400">₹{product.originalPrice.toLocaleString('en-IN')}</span>
                        )}
                        {product.rating !== undefined && (
                          <span>{product.rating.toFixed(1)} ★</span>
                        )}
                        {product.reviewCount !== undefined && (
                          <span>({product.reviewCount} reviews)</span>
                        )}
                        {product.isBestseller && (
                          <span className="rounded-full bg-gold-500/15 px-2 py-0.5 text-gold-200">Bestseller</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onDeleteProduct(product.id)}
                        className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-2 text-xs text-red-300 transition hover:bg-red-500/15"
                      >
                        <Trash2 className="w-4 h-4" /> Delete
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
