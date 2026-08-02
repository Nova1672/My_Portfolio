import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/lib/motion';
import type { ReactNode } from 'react';

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="container-page">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-14 max-w-2xl"
        >
          <motion.div variants={fadeUp} className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent-soft">
              {eyebrow}
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl font-bold tracking-tightest text-white sm:text-4xl md:text-5xl"
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p variants={fadeUp} className="mt-5 text-base leading-relaxed text-ink-muted">
              {description}
            </motion.p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
