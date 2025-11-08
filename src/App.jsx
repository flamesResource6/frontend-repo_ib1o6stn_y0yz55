import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="border-t border-black/5 dark:border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 text-sm text-neutral-600 dark:text-neutral-300 flex items-center justify-between">
          <p>© {new Date().getFullYear()} AIVA. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Terms</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
