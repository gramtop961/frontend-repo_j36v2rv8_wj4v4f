import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const campaigns = [
  {
    title: 'Echoes of the Obsidian Crown',
    img: 'https://images.unsplash.com/photo-1549880181-56a44cf4a9a9?q=80&w=1400&auto=format&fit=crop',
    desc: 'A cursed monarchy and shards of power scattered across a haunted realm.'
  },
  {
    title: 'Storms of the Astral Sea',
    img: 'https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?q=80&w=1400&auto=format&fit=crop',
    desc: 'Sail voidborne currents to outwit cosmic leviathans and pirate mages.'
  },
  {
    title: 'The Gilded Labyrinth',
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1400&auto=format&fit=crop',
    desc: 'A sprawling dungeon of living gold that reshapes with each bell toll.'
  },
  {
    title: 'Whispers Beneath Blackspire',
    img: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1400&auto=format&fit=crop',
    desc: 'Descend into a city below the city, where shadows bargain for souls.'
  }
];

export default function CampaignShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);

  return (
    <section ref={ref} className="relative w-full bg-[#0a0e27] py-24 text-white">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 font-serif text-4xl text-[#e8e6ff]"
        >
          Campaign Showcase
        </motion.h2>

        <div className="overflow-hidden">
          <motion.div style={{ x }} className="flex gap-6">
            {campaigns.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20, rotate: -1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.6 }}
                className="group relative h-80 w-[22rem] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
              >
                <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${c.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] via-[#0a0e27cc] to-transparent" />
                <div className="relative z-10 flex h-full flex-col justify-end p-5">
                  <h3 className="font-serif text-2xl text-[#e8e6ff]">{c.title}</h3>
                  <p className="mt-1 text-sm text-[#c8d7de]">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
