import React, { useState } from 'react';
import { Image as ImageIcon, Loader2, Sparkles } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || (typeof window !== 'undefined' ? window.location.origin.replace('3000', '8000') : '');

const ImageStudio = () => {
  const [prompt, setPrompt] = useState('25-year-old Korean fashion model with short black hair, athletic build, wearing streetwear');
  const [count, setCount] = useState(8);
  const [style, setStyle] = useState('Photorealistic');
  const [refs, setRefs] = useState('');
  const [images, setImages] = useState([]);
  const [provider, setProvider] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setImages([]);
    try {
      const res = await fetch(`${API_BASE}/api/generate/images`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          count: Number(count),
          style,
          references: refs
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean),
        }),
      });
      if (!res.ok) throw new Error('Failed to generate images');
      const data = await res.json();
      setImages(data.images || []);
      setProvider(data.provider || '');
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="image-studio" className="w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300 ring-1 ring-inset ring-indigo-300/20">
            <ImageIcon className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Influencer Creation Studio</h2>
            <p className="text-white/70">Generate multi‑pose images powered by Nano Banana.</p>
          </div>
        </div>

        <form onSubmit={handleGenerate} className="grid grid-cols-1 lg:grid-cols-4 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <div className="lg:col-span-2">
            <label className="text-sm text-white/70">Prompt</label>
            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={3} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="text-sm text-white/70">Count</label>
            <input type="number" min={1} max={50} value={count} onChange={(e) => setCount(e.target.value)} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="text-sm text-white/70">Style</label>
            <select value={style} onChange={(e) => setStyle(e.target.value)} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Photorealistic</option>
              <option>Cinematic</option>
              <option>Editorial</option>
              <option>Fashion</option>
              <option>Fitness</option>
            </select>
          </div>
          <div className="lg:col-span-4">
            <label className="text-sm text-white/70">Reference image URLs (comma‑separated, optional)</label>
            <input value={refs} onChange={(e) => setRefs(e.target.value)} placeholder="https://... , https://..." className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="lg:col-span-4 flex flex-wrap items-center gap-3">
            <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 px-5 py-3 font-medium transition-colors disabled:opacity-60">
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Sparkles className="h-5 w-5" />} Generate Images
            </button>
            {provider && <span className="text-xs text-white/60">Provider: {provider}</span>}
            {error && <span className="text-xs text-red-400">{error}</span>}
          </div>
        </form>

        {images.length > 0 && (
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((src, idx) => (
              <div key={src + idx} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
                <img src={src} alt={`Generated ${idx + 1}`} className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageStudio;
