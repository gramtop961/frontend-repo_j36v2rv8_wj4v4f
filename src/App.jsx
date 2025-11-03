import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import WhatIsDnD from './components/WhatIsDnD';
import ClassShowcase from './components/ClassShowcase';
import CampaignShowcase from './components/CampaignShowcase';

export default function App() {
  // Scroll progress (crystal torch)
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const sTop = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const p = docH > 0 ? Math.min(1, Math.max(0, sTop / docH)) : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#0a0e27] antialiased">
      {/* Scroll progress crystal */}
      <div className="fixed right-5 top-1/2 z-50 -translate-y-1/2">
        <div className="relative flex h-40 w-5 items-end justify-center rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur">
          <div className="absolute inset-x-0 top-1/2 -z-0 h-24 -translate-y-1/2 rounded-full blur-2xl" style={{background:'radial-gradient(closest-side, rgba(212,175,55,0.35), transparent)'}} />
          <div
            className="relative z-10 w-full rounded-full bg-gradient-to-b from-[#d4af37] via-[#f5e6a1] to-[#6b4e0e] shadow-[0_0_20px_rgba(212,175,55,0.45)] transition-[height]"
            style={{ height: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
      </div>

      <header className="sticky top-0 z-40 w-full bg-gradient-to-b from-black/40 to-transparent py-4 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 text-[#e8e6ff]">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gradient-to-b from-[#2d1b4e] to-[#1a4d5c] shadow-inner" />
            <span className="font-serif text-xl">Portal to Adventure</span>
          </div>
          <nav className="hidden gap-6 sm:flex">
            <a href="#classes" className="text-sm text-[#c8d7de] hover:text-white">Classes</a>
            <a href="#campaigns" className="text-sm text-[#c8d7de] hover:text-white">Campaigns</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <WhatIsDnD />
        <div id="classes"><ClassShowcase /></div>
        <div id="campaigns"><CampaignShowcase /></div>
      </main>

      <footer className="relative w-full bg-[#080b20] py-12 text-[#c8d7de]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_20rem_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <div className="text-sm">© {new Date().getFullYear()} Portal to Adventure. All rights reserved.</div>
          <div className="text-sm">Crafted with arcane energies and a pinch of fate.</div>
        </div>
      </footer>
    </div>
  );
}
