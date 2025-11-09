import React from 'react';
import { Image, Video, Sparkles, FolderOpen, Clock, Shield } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'Influencer Creation Studio',
    desc: 'Design lifelike virtual personas with text prompts, templates, or reference uploads — no 3D skills required.'
  },
  {
    icon: Image,
    title: 'Multi‑Pose Image Packs',
    desc: 'Generate 10–50+ consistent, photorealistic poses per click with background controls and styles.'
  },
  {
    icon: Video,
    title: 'Video Creation Studio',
    desc: 'Animate your character with cinematic camera moves, lip‑sync, and voice options in 50+ languages.'
  },
  {
    icon: FolderOpen,
    title: 'Asset Library & CMS',
    desc: 'Organize images and videos by influencer and campaign, with versions, favorites, and bulk export.'
  },
  {
    icon: Clock,
    title: 'Automation & Scheduling',
    desc: 'Auto‑generate content batches and schedule drops across platforms with calendar workflows.'
  },
  {
    icon: Shield,
    title: 'Collaboration & Rights',
    desc: 'Invite teammates, manage approvals, and control usage rights with watermarking options.'
  }
];

const FeaturesGrid = () => {
  return (
    <section id="studios" className="w-full bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">End‑to‑End Creation Pipeline</h2>
          <p className="mt-3 text-white/70 max-w-2xl">Everything you need to create, animate, manage, and monetize AI influencers — fast, consistent, and production‑ready.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300 ring-1 ring-inset ring-indigo-300/20">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
