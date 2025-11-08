import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-orange-400" />
          <span className="font-semibold tracking-tight text-neutral-900 dark:text-white">AIVA</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition">Features</a>
          <a href="#how" className="hover:text-neutral-900 dark:hover:text-white transition">How it works</a>
          <a href="#cta" className="hover:text-neutral-900 dark:hover:text-white transition">Get started</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white">Sign in</button>
          <button className="px-4 py-2 text-sm font-medium rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 hover:opacity-90">Try free</button>
        </div>
      </div>
    </header>
  );
}
