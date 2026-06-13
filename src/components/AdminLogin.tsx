import { useState } from 'react';
import { X, Lock, User, AlertCircle, ArrowRight } from 'lucide-react';

interface AdminLoginProps {
  onAuthenticate: (username: string, password: string) => void;
  onClose: () => void;
  errorMessage?: string;
}

export default function AdminLogin({ onAuthenticate, onClose, errorMessage }: AdminLoginProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAuthenticate(username.trim(), password);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-6 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-3xl border border-gold-900/50 bg-neutral-950/95 p-6 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-white">Admin Login</h2>
            <p className="mt-1 text-sm text-neutral-400">Enter admin credentials to access the product dashboard.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-neutral-800 bg-neutral-900 p-2 text-neutral-400 transition hover:text-white"
            aria-label="Close admin login"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <label className="block text-sm text-neutral-300">
            <span className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-300">
              <User className="w-4 h-4" /> Username
            </span>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white outline-none focus:border-gold-500"
              placeholder="admin"
              autoComplete="username"
            />
          </label>

          <label className="block text-sm text-neutral-300">
            <span className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-300">
              <Lock className="w-4 h-4" /> Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 text-sm text-white outline-none focus:border-gold-500"
              placeholder="Enter password"
              autoComplete="current-password"
            />
          </label>

          {errorMessage && (
            <div className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4" />
                <span>{errorMessage}</span>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-5 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-gold-400"
          >
            <ArrowRight className="w-4 h-4" /> Login
          </button>
        </form>

        <p className="mt-5 text-xs text-neutral-500">
          Admin credentials are hardcoded in the app state and required to open the dashboard.
        </p>
      </div>
    </div>
  );
}
