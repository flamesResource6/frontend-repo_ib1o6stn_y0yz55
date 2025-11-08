import React from 'react';
import { Bot, Waves, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Human-like conversations',
    desc: 'Understands context, remembers details, and responds naturally to your users.'
  },
  {
    icon: Waves,
    title: 'Voice-first UX',
    desc: 'Latency-optimized streaming for snappy, realtime voice interactions.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade security',
    desc: 'Privacy by default with SOC2-ready logging, rate limits, and redaction.'
  },
  {
    icon: Zap,
    title: 'Connect your tools',
    desc: 'Integrates with calendars, CRMs, and knowledge bases to get work done.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">What makes it powerful</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">Designed for futuristic, minimal, digital experiences with real business impact.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 p-6 backdrop-blur">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
