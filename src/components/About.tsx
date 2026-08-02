import { motion } from 'framer-motion';
import { GraduationCap, Target, Focus, Sparkles } from 'lucide-react';
import { Section } from '@/components/Section';
import { education, profile } from '@/data/portfolio';
import { fadeUp, stagger } from '@/lib/motion';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Turning data into decisions"
      description={profile.intro}
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        {/* Profile cards */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-4"
        >
          <motion.div variants={fadeUp} className="glass card-hover rounded-2xl p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent-soft ring-1 ring-accent/20">
              <Target size={18} />
            </div>
            <h3 className="mb-2 text-base font-semibold text-white">Career goal</h3>
            <p className="text-sm leading-relaxed text-ink-muted">
              Become a data scientist building production AI systems that drive measurable
              business and social impact — from problem framing to deployment.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="glass card-hover rounded-2xl p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan-soft ring-1 ring-cyan/20">
              <Focus size={18} />
            </div>
            <h3 className="mb-2 text-base font-semibold text-white">Current focus</h3>
            <p className="text-sm leading-relaxed text-ink-muted">
              Large language model applications, retrieval-augmented generation, and MLOps —
              shipping models that stay reliable in production.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="glass card-hover rounded-2xl p-6">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-fuchsia-500/10 text-fuchsia-300 ring-1 ring-fuchsia-500/20">
              <Sparkles size={18} />
            </div>
            <h3 className="mb-2 text-base font-semibold text-white">What drives me</h3>
            <p className="text-sm leading-relaxed text-ink-muted">
              The moment a model trained on messy reality actually works — and the chase to make
              it explainable, fair, and useful to the people who depend on it.
            </p>
          </motion.div>
        </motion.div>

        {/* Education timeline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
        >
          <h3 className="mb-8 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-ink-faint">
            <GraduationCap size={16} className="text-accent-soft" /> Education
          </h3>
          <div className="relative">
            <div className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-accent/50 via-border to-transparent" />
            <div className="space-y-8">
              {education.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="relative pl-8"
                >
                  <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-bg ring-2 ring-accent">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </span>
                  <div className="mb-1 text-xs font-medium uppercase tracking-wider text-accent-soft">
                    {item.period}
                  </div>
                  <h4 className="text-base font-semibold text-white">{item.title}</h4>
                  <p className="mb-2 text-sm text-ink-muted">{item.org}</p>
                  <p className="mb-3 text-sm leading-relaxed text-ink-faint">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-card/60 px-2.5 py-1 text-xs text-ink-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
