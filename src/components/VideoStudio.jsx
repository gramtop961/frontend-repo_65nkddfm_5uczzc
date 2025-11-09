import React, { useState } from 'react';
import { Video, Loader2, Play } from 'lucide-react';

const API_BASE = import.meta.env.VITE_BACKEND_URL || (typeof window !== 'undefined' ? window.location.origin.replace('3000', '8000') : '');

const VideoStudio = () => {
  const [script, setScript] = useState("Hey everyone! Today I'm trying out the new smoothie from GreenBoost. Let me take a sip... wow, this tastes amazing! You've gotta try this.");
  const [aspect, setAspect] = useState('9:16');
  const [duration, setDuration] = useState(8);
  const [voice, setVoice] = useState('Female - Energetic');
  const [tone, setTone] = useState('Excited');
  const [refs, setRefs] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [provider, setProvider] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setVideoUrl('');
    try {
      const res = await fetch(`${API_BASE}/api/generate/video`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          script,
          aspect_ratio: aspect,
          duration_seconds: Number(duration),
          voice,
          tone,
          references: refs
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean),
        }),
      });
      if (!res.ok) throw new Error('Failed to generate video');
      const data = await res.json();
      setVideoUrl(data.video_url || '');
      setProvider(data.provider || '');
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="video-studio" className="w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-8 flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300 ring-1 ring-inset ring-indigo-300/20">
            <Video className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Video Creation Studio</h2>
            <p className="text-white/70">Animate images into videos powered by Veo 3.1.</p>
          </div>
        </div>

        <form onSubmit={handleGenerate} className="grid grid-cols-1 lg:grid-cols-4 gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
          <div className="lg:col-span-3">
            <label className="text-sm text-white/70">Script</label>
            <textarea value={script} onChange={(e) => setScript(e.target.value)} rows={4} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="text-sm text-white/70">Aspect Ratio</label>
            <select value={aspect} onChange={(e) => setAspect(e.target.value)} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500">
              <option>16:9</option>
              <option>9:16</option>
              <option>1:1</option>
            </select>
            <label className="mt-3 block text-sm text-white/70">Duration (sec)</label>
            <input type="number" min={4} max={30} value={duration} onChange={(e) => setDuration(e.target.value)} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
            <label className="mt-3 block text-sm text-white/70">Voice</label>
            <select value={voice} onChange={(e) => setVoice(e.target.value)} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Female - Energetic</option>
              <option>Female - Calm</option>
              <option>Male - Friendly</option>
              <option>Male - Authoritative</option>
              <option>Neutral</option>
            </select>
            <label className="mt-3 block text-sm text-white/70">Tone</label>
            <select value={tone} onChange={(e) => setTone(e.target.value)} className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500">
              <option>Excited</option>
              <option>Calm</option>
              <option>Friendly</option>
              <option>Authoritative</option>
            </select>
          </div>
          <div className="lg:col-span-4">
            <label className="text-sm text-white/70">Reference image URLs (comma‑separated, optional)</label>
            <input value={refs} onChange={(e) => setRefs(e.target.value)} placeholder="https://... , https://..." className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="lg:col-span-4 flex flex-wrap items-center gap-3">
            <button type="submit" disabled={loading} className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 px-5 py-3 font-medium transition-colors disabled:opacity-60">
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Play className="h-5 w-5" />} Generate Video
            </button>
            {provider && <span className="text-xs text-white/60">Provider: {provider}</span>}
            {error && <span className="text-xs text-red-400">{error}</span>}
          </div>
        </form>

        {videoUrl && (
          <div className="mt-8">
            <video src={videoUrl} controls className="w-full rounded-xl border border-white/10 bg-black" />
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoStudio;
