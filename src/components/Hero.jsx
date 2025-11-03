import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Volume2, VolumeX } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 600], [0, -100]);
  const yMist = useTransform(scrollY, [0, 600], [0, -40]);
  const yForeground = useTransform(scrollY, [0, 600], [0, -20]);

  // Ambient audio toggle
  const audioRef = useRef(null);
  const [soundOn, setSoundOn] = useState(false);
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.25;
    if (soundOn) {
      const play = async () => {
        try { await audio.play(); } catch { /* ignore */ }
      };
      play();
    } else {
      audio.pause();
    }
  }, [soundOn]);

  // Cursor glow
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const onMouseMove = (e) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  const gradientOverlay = useMemo(() => (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.10),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(45,27,78,0.25),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(26,77,92,0.25),transparent_45%)]" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(60rem 60rem at 50% 120%, rgba(10,14,39,0) 0%, rgba(10,14,39,0.8) 60%, rgba(10,14,39,1) 100%)'
      }} />
    </div>
  ), []);

  return (
    <section
      onMouseMove={onMouseMove}
      className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0e27] text-white"
    >
      {/* Parallax layers */}
      <motion.div style={{ y: yBg }} className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>
      {gradientOverlay}

      {/* Mist layer */}
      <motion.div style={{ y: yMist }} className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(60rem_20rem_at_50%_120%,rgba(255,255,255,0.06),transparent_70%)]" />
      </motion.div>

      {/* Dynamic cursor light */}
      <div
        className="pointer-events-none absolute h-56 w-56 rounded-full"
        style={{
          left: cursor.x - 112,
          top: cursor.y - 112,
          background: 'radial-gradient(circle, rgba(212,175,55,0.35) 0%, rgba(212,175,55,0.15) 35%, rgba(212,175,55,0) 70%)',
          filter: 'blur(16px)',
          mixBlendMode: 'screen',
          transition: 'transform 80ms linear',
          transform: 'translateZ(0)'
        }}
      />

      {/* Content */}
      <motion.div
        style={{ y: yForeground }}
        className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="font-serif text-5xl leading-tight text-[#e8e6ff] sm:text-6xl md:text-7xl"
          style={{ textShadow: '0 2px 18px rgba(212,175,55,0.15)' }}
        >
          <span className="bg-gradient-to-b from-[#e8e6ff] via-[#d4af37] to-[#9a7b1f] bg-clip-text text-transparent">
            Begin Your Legend
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-5 max-w-2xl text-lg text-[#c8d7de]"
        >
          Step through the portal and enter a realm of dice, destiny, and daring tales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 flex flex-col gap-4 sm:flex-row"
        >
          <button
            className="group relative overflow-hidden rounded-xl border border-[#d4af3755] bg-gradient-to-b from-[#2d1b4e] to-[#1a4d5c] px-7 py-3 text-lg font-semibold text-[#e8e6ff] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition-transform hover:scale-[1.02]"
          >
            <span className="relative z-10">Create a Character</span>
            <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: 'radial-gradient(40rem_12rem_at_50%_0%, rgba(212,175,55,0.35), transparent 60%)' }} />
          </button>
          <button
            className="group relative overflow-hidden rounded-xl border border-[#e8e6ff22] bg-white/5 px-7 py-3 text-lg font-semibold text-[#e8e6ff] backdrop-blur-md transition-transform hover:scale-[1.02]"
          >
            <span className="relative z-10">Discover Campaigns</span>
            <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{ background: 'radial-gradient(40rem_12rem_at_50%_0%, rgba(26,77,92,0.4), transparent 60%)' }} />
          </button>
          <button
            onClick={() => setSoundOn((s) => !s)}
            className="group flex items-center gap-2 rounded-xl border border-[#ffffff1a] bg-black/30 px-4 py-3 text-sm text-[#cdd6f4] backdrop-blur-md transition-colors hover:bg-white/10"
          >
            {soundOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
            {soundOn ? 'Ambient On' : 'Ambient Off'}
          </button>
          <audio
            ref={audioRef}
            loop
            src="https://cdn.pixabay.com/download/audio/2022/03/30/audio_3f1d61e5a1.mp3?filename=fantasy-ambience-ambient-music-110397.mp3"
          />
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-[#c8d7de] opacity-80">
        <div className="mx-auto h-12 w-[2px] overflow-hidden rounded-full bg-gradient-to-b from-[#d4af37] to-transparent">
          <div className="animate-[scroll_2s_ease-in-out_infinite] h-2 w-full bg-[#d4af37]" />
        </div>
      </div>
      <style>{`
        @keyframes scroll { 0% {transform: translateY(-100%);} 50% {transform: translateY(400%);} 100% {transform: translateY(-100%);} }
      `}</style>
    </section>
  );
}
