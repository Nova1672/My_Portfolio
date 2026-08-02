import { motion } from 'framer-motion';
import { Section } from '@/components/Section';
import { stats } from '@/data/portfolio';
import { useCounter, useReveal } from '@/lib/motion';

export function Statistics() {
  const { ref, inView } = useReveal<HTMLDivElement>();

  return (
    <Section id="statistics" eyebrow="By the numbers" title="A snapshot in metrics">
      <div ref={ref} className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <StatCard key={s.label} label={s.label} value={s.value} suffix={s.suffix} inView={inView} delay={i * 0.1} />
        ))}
      </div>
    </Section>
  );
}

function StatCard({
  label,
  value,
  suffix,
  inView,
  delay,
}: {
  label: string;
  value: number;
  suffix: string;
  inView: boolean;
  delay: number;
}) {
  const count = useCounter(value, inView);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="glass card-hover relative overflow-hidden rounded-2xl p-6 text-center sm:p-8"
    >
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="font-mono text-4xl font-bold tracking-tightest text-white sm:text-5xl">
        {count}
        <span className="text-gradient-accent">{suffix}</span>
      </div>
      <div className="mt-2 text-sm text-ink-muted">{label}</div>
    </motion.div>
  );
}
