import { motion } from 'framer-motion';
import { ScrollText, Swords, BookOpen, Dice5 } from 'lucide-react';

const items = [
  {
    icon: ScrollText,
    title: 'Storytelling',
    desc: 'Collaborative adventures shaped by your choices and imagination.'
  },
  {
    icon: Swords,
    title: 'Combat & Strategy',
    desc: 'Tactical encounters where clever plans beat brute force.'
  },
  {
    icon: BookOpen,
    title: 'Roleplay',
    desc: 'Become your character and forge bonds with a living world.'
  },
  {
    icon: Dice5,
    title: 'The Dice',
    desc: 'Fate hangs on a roll—moments of triumph, twists, and epic fails.'
  }
];

export default function WhatIsDnD() {
  return (
    <section className="relative w-full bg-[#0a0e27] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_20rem_at_10%_10%,rgba(45,27,78,0.25),transparent_60%),radial-gradient(50rem_20rem_at_90%_20%,rgba(26,77,92,0.25),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-6 font-serif text-4xl text-[#e8e6ff]"
        >
          What is Dungeons & Dragons?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-12 max-w-3xl text-[#c8d7de]"
        >
          A tabletop role‑playing game where you and your party become heroes in a shared story—guided by a Dungeon Master, powered by creativity, and decided by the roll of the dice.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{background:'radial-gradient(30rem_12rem_at_50%_0%,rgba(212,175,55,0.20),transparent_60%)'}} />
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-b from-[#2d1b4e] to-[#1a4d5c] text-[#d4af37] shadow-inner">
                <Icon />
              </div>
              <h3 className="mb-2 font-serif text-xl text-[#e8e6ff]">{title}</h3>
              <p className="text-sm text-[#c8d7de]">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
