import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Layers, Database, Cpu, BarChart3, Lightbulb, X } from 'lucide-react';
import { Section } from '@/components/Section';
import { caseStudies, type CaseStudy } from '@/data/portfolio';
import { fadeUp, stagger } from '@/lib/motion';

export function CaseStudies() {
  const [active, setActive] = useState<CaseStudy | null>(null);

  return (
    <Section
      id="case-studies"
      eyebrow="Case Studies"
      title="How the work gets built"
      description="Deep dives into two flagship projects — the problem, the research, the architecture, and what I learned shipping them."
    >
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-6 lg:grid-cols-2"
      >
        {caseStudies.map((cs) => (
          <motion.button
            key={cs.id}
            variants={fadeUp}
            onClick={() => setActive(cs)}
            whileHover={{ y: -6 }}
            className="group glass relative overflow-hidden rounded-2xl p-7 text-left transition-colors hover:border-white/15"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-5 flex flex-wrap gap-2">
                {cs.metrics.slice(0, 3).map((m) => (
                  <span
                    key={m.label}
                    className="rounded-lg border border-border bg-card/60 px-3 py-1.5"
                  >
                    <span className="font-mono text-sm font-semibold text-white">{m.value}</span>
                    <span className="ml-1.5 text-xs text-ink-faint">{m.label}</span>
                  </span>
                ))}
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">{cs.title}</h3>
              <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-ink-muted">
                {cs.problem}
              </p>
              <div className="flex flex-wrap gap-2">
                {cs.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-card/40 px-2.5 py-1 font-mono text-xs text-ink-faint"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-accent-soft">
                Read full case study
                <ChevronDown size={16} className="-rotate-90 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {active && <CaseStudyModal cs={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </Section>
  );
}

function CaseStudyModal({ cs, onClose }: { cs: CaseStudy; onClose: () => void }) {
  const sections = [
    { icon: BarChart3, label: 'Problem', text: cs.problem },
    { icon: Lightbulb, label: 'Research', text: cs.research },
    { icon: Layers, label: 'Architecture', text: cs.architecture },
    { icon: Database, label: 'Data pipeline', text: cs.pipeline },
    { icon: Cpu, label: 'Challenges', text: cs.challenges },
    { icon: Cpu, label: 'Implementation', text: cs.implementation },
    { icon: BarChart3, label: 'Results', text: cs.results },
    { icon: Lightbulb, label: 'Lessons learned', text: cs.lessons },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-bg/80 p-4 backdrop-blur-md sm:p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="glass-strong relative my-auto max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-bg/80 px-6 py-4 backdrop-blur-xl sm:px-8">
          <h3 className="pr-4 text-lg font-semibold text-white">{cs.title}</h3>
          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-white/5 hover:text-white"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-6 sm:px-8">
          <div className="mb-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {cs.metrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-border bg-card/50 p-4">
                <div className="font-mono text-2xl font-bold text-gradient-accent">{m.value}</div>
                <div className="mt-1 text-xs text-ink-faint">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {sections.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.label}>
                  <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold text-white">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent/10 text-accent-soft ring-1 ring-accent/20">
                      <Icon size={14} />
                    </span>
                    {s.label}
                  </h4>
                  <p className="pl-9 text-sm leading-relaxed text-ink-muted">{s.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex flex-wrap gap-2 border-t border-border pt-6">
            {cs.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-border bg-card/60 px-2.5 py-1 font-mono text-xs text-ink-muted"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
