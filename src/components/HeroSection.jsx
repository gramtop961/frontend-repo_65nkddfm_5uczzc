import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: Copy */}
        <div className="relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Star className="h-4 w-4 text-yellow-400" /> New: Ultra‑realistic multi‑pose generation
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            InfluencerForge AI
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-xl">
            Create, animate, and monetize photorealistic AI influencers in minutes. Generate multi‑pose images with Nano Banana and cinematic videos with Veo 3.1 — all in one place.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#studios"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 px-5 py-3 font-medium transition-colors"
            >
              <Rocket className="h-5 w-5" /> Get Started
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 px-5 py-3 font-medium backdrop-blur transition-colors"
            >
              View Pricing
            </a>
          </div>
          <div className="flex items-center gap-6 pt-4 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Live generation queue
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-400" />
              Trusted by creators & brands
            </div>
          </div>
        </div>

        {/* Right: Spline Scene */}
        <div className="relative h-[420px] md:h-[520px] lg:h-[560px]">
          <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-white/10">
            <Spline
              scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            {/* Subtle gradient overlay that won't block interactions */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
