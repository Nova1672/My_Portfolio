import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { Section } from '@/components/Section';
import { experience } from '@/data/portfolio';
import { fadeUp, stagger } from '@/lib/motion';

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Building, leading, shipping"
      description="Internships, open-source contributions, leadership, and recognitions — the path so far."
    >
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="relative"
      >
        <div className="absolute left-[7px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-accent/50 via-border to-transparent" />
        <div className="space-y-8">
          {experience.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="relative pl-8">
              <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-bg ring-2 ring-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <div className="glass card-hover rounded-2xl p-6">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-base font-semibold text-white">{item.title}</h4>
                  <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium text-accent-soft">
                    {item.period}
                  </span>
                </div>
                <p className="mb-3 flex items-center gap-1.5 text-sm text-ink-muted">
                  <Briefcase size={14} className="text-ink-faint" />
                  {item.org}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-ink-faint">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-card/40 px-2.5 py-1 text-xs text-ink-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
