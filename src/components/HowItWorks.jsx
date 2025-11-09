import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    title: 'Create your influencer',
    desc: 'Describe your persona or pick a template. Optionally upload reference images to lock consistency.'
  },
  {
    title: 'Generate multi‑pose images',
    desc: 'Produce a gallery of 10–50+ photorealistic poses with backgrounds and styles that match your brand.'
  },
  {
    title: 'Animate into videos',
    desc: 'Add script, voice, and camera moves to turn stills into cinematic clips ready for social.'
  },
  {
    title: 'Organize & publish',
    desc: 'Keep assets in folders, track versions, and schedule posts across platforms.'
  }
];

const HowItWorks = () => {
  return (
    <section className="w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">How it works</h2>
        <p className="mt-3 text-white/70 max-w-2xl">From idea to publish‑ready content in minutes. Designed for creators, brands, and agencies.</p>
        <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="mt-1"><CheckCircle2 className="h-5 w-5 text-emerald-400" /></div>
                <div>
                  <div className="text-sm text-white/50">Step {i + 1}</div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;
