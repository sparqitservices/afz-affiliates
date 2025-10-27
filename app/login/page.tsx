'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: typeof window !== 'undefined' ? window.location.origin : undefined,
      },
    });
    setLoading(false);
    if (error) setError(error.message);
    else setSent(true);
  }

  return (
    <div className="max-w-md">
      <h1 className="text-2xl font-semibold">Login</h1>
      <p className="mt-2 text-sm text-slate-600">
        Enter your email to receive a magic sign-in link.
      </p>

      <form onSubmit={signIn} className="mt-6 space-y-3">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-md border px-3 py-2"
        />
        <button
          disabled={loading}
          className="w-full rounded-md bg-sky-600 px-3 py-2 text-white disabled:opacity-60"
        >
          {loading ? 'Sending...' : 'Send magic link'}
        </button>
      </form>

      {sent && (
        <p className="mt-4 text-green-600">
          Check your inbox for a sign-in link.
        </p>
      )}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
}