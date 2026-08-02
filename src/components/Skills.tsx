import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { skillCategories } from '@/data/portfolio';
import { fadeUp, stagger } from '@/lib/motion';

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="The toolkit behind the work"
      description="A focused stack spanning data engineering, modeling, and deployment — chosen for reliability in production, not just notebooks."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6 }}
              className="group glass relative overflow-hidden rounded-2xl p-6 transition-colors hover:border-white/15"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-soft ring-1 ring-accent/20 transition-transform duration-500 group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <h3 className="mb-5 text-base font-semibold text-white">{cat.title}</h3>
                <div className="space-y-4">
                  {cat.skills.map((s) => (
                    <div key={s.name}>
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className="text-sm text-ink-muted">{s.name}</span>
                        <span className="font-mono text-xs text-ink-faint">{s.level}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, margin: '-60px' }}
                          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-cyan"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
