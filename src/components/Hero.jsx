import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mic, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/10 to-white/80 dark:from-neutral-950/70 dark:via-neutral-950/20 dark:to-neutral-950/90" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-200 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-purple-500" />
            Introducing your AI voice agent
          </span>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Talk to your website like a real assistant
          </h1>
          <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300">
            AIVA understands context, answers instantly, and connects to your tools. Futuristic, minimal, and incredibly capable.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-5 py-3 font-medium hover:opacity-90">
              <Mic className="h-4 w-4" /> Start talking
            </button>
            <button className="rounded-md px-5 py-3 font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white">
              Watch demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
