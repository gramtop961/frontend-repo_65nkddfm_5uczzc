import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesGrid from './components/FeaturesGrid';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <HeroSection />
      <FeaturesGrid />
      <HowItWorks />
      <Pricing />
      <footer className="border-t border-white/10 bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/60">© {new Date().getFullYear()} InfluencerForge AI. All rights reserved.</div>
          <div className="flex items-center gap-6 text-sm text-white/70">
            <a href="#studios" className="hover:text-white">Studios</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Docs</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
