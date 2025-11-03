import { motion } from 'framer-motion';

const classes = [
  { name: 'Barbarian', color: '#b45309', glow: 'rgba(180,83,9,0.55)', img: 'https://images.unsplash.com/photo-1612036782180-6f0b6b0b0ae4?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Wizard', color: '#60a5fa', glow: 'rgba(96,165,250,0.55)', img: 'https://images.unsplash.com/photo-1527176930608-09cb256ab504?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Rogue', color: '#10b981', glow: 'rgba(16,185,129,0.55)', img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Cleric', color: '#f472b6', glow: 'rgba(244,114,182,0.55)', img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Ranger', color: '#86efac', glow: 'rgba(134,239,172,0.55)', img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop' },
  { name: 'Paladin', color: '#fde68a', glow: 'rgba(253,230,138,0.55)', img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop' }
];

export default function ClassShowcase() {
  return (
    <section className="relative w-full bg-[#0a0e27] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(30rem_20rem_at_80%_0%,rgba(212,175,55,0.15),transparent_65%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 font-serif text-4xl text-[#e8e6ff]"
        >
          Character Classes
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.04 * i, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
            >
              <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${c.img})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'saturate(0.75) contrast(1.15)' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27cc] to-transparent" />
              <div className="relative z-10 p-6">
                <div className="mb-2 h-1 w-16 rounded-full" style={{ background: c.color }} />
                <h3 className="font-serif text-2xl" style={{ color: c.color }}>{c.name}</h3>
                <p className="mt-2 max-w-md text-sm text-[#c8d7de]">
                  Harness unique abilities and playstyles, from arcane mastery to primal fury.
                </p>
                <button className="mt-4 rounded-lg border border-white/10 bg-black/30 px-4 py-2 text-sm text-[#e8e6ff] backdrop-blur transition-colors hover:border-white/20">
                  Learn More
                </button>
              </div>
              <div className="pointer-events-none absolute -inset-20 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" style={{ background: `radial-gradient(closest-side, ${c.glow}, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
