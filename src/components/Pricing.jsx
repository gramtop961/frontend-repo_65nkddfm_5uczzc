import React from 'react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    highlight: 'Get started',
    features: [
      '1 influencer profile',
      '10 images / month',
      '2 videos / month',
      'Watermarked outputs',
      '720p video'
    ]
  },
  {
    name: 'Creator',
    price: '$29',
    highlight: 'Most popular',
    featured: true,
    features: [
      '3 influencer profiles',
      '200 images / month',
      '20 videos / month',
      'No watermarks',
      '1080p video',
      'Priority queue'
    ]
  },
  {
    name: 'Pro',
    price: '$99',
    highlight: 'Scale content',
    features: [
      'Unlimited profiles',
      '1,000 images / month',
      '100 videos / month',
      'Advanced editing suite',
      'Team collaboration',
      'Social auto‑publishing'
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Simple, scalable pricing</h2>
          <p className="mt-3 text-white/70">Only pay for what you need. Upgrade anytime as your content engine grows.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`relative rounded-2xl border border-white/10 p-6 backdrop-blur bg-white/5 ${t.featured ? 'ring-2 ring-indigo-500' : ''}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <span className="text-xs rounded-full bg-white/10 px-2 py-1 text-white/70">{t.highlight}</span>
              </div>
              <div className="mt-4 text-4xl font-bold">{t.price}<span className="text-base font-medium text-white/60">/mo</span></div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-white/80">
                    <Check className="h-5 w-5 text-emerald-400" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 px-4 py-2 font-medium transition-colors">
                Choose {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
