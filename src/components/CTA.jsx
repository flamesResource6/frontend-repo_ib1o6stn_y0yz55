import React from 'react';
import { Rocket } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-tr from-purple-600 via-blue-600 to-orange-500 p-1">
          <div className="rounded-2xl bg-white/90 dark:bg-neutral-900/90 p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">Launch your AI assistant in minutes</h3>
                <p className="mt-2 text-neutral-700 dark:text-neutral-200">Add a voice agent to your website with a single snippet. No heavy setup. Start free.</p>
              </div>
              <div className="flex md:justify-end">
                <button className="inline-flex items-center gap-2 rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 px-6 py-3 font-semibold hover:opacity-90">
                  <Rocket className="h-4 w-4" /> Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
