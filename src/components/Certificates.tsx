import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, X } from 'lucide-react';
import { Section } from '@/components/Section';
import { certificates, type Certificate } from '@/data/portfolio';
import { fadeUp, stagger } from '@/lib/motion';

export function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <Section
      id="certificates"
      eyebrow="Certificates"
      title="Verified credentials"
      description="Specializations and certifications earned across machine learning, deep learning, cloud, and data engineering."
    >
      <motion.div
        variants={stagger(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certificates.map((cert) => (
          <motion.button
            key={cert.credentialId}
            variants={fadeUp}
            onClick={() => setActive(cert)}
            whileHover={{ y: -5 }}
            className="group glass relative overflow-hidden rounded-2xl p-5 text-left transition-colors hover:border-white/15"
          >
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-soft ring-1 ring-accent/20 transition-transform group-hover:scale-110">
                  <Award size={20} />
                </div>
                <span className="rounded-full border border-border bg-card/60 px-2.5 py-1 text-xs text-ink-faint">
                  {cert.year}
                </span>
              </div>
              <h3 className="mb-1 text-sm font-semibold leading-snug text-white">{cert.title}</h3>
              <p className="mb-3 text-xs text-ink-muted">{cert.issuer}</p>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.slice(0, 2).map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border bg-card/40 px-2 py-0.5 text-[11px] text-ink-faint"
                  >
                    {s}
                  </span>
                ))}
                {cert.skills.length > 2 && (
                  <span className="rounded-full border border-border bg-card/40 px-2 py-0.5 text-[11px] text-ink-faint">
                    +{cert.skills.length - 2}
                  </span>
                )}
              </div>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {active && <CertModal cert={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </Section>
  );
}

function CertModal({ cert, onClose }: { cert: Certificate; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-bg/80 p-4 backdrop-blur-md sm:p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="glass-strong relative w-full max-w-lg overflow-hidden rounded-2xl"
      >
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-accent/15 to-transparent" />
        <div className="relative p-8">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-ink-muted transition-colors hover:bg-white/5 hover:text-white"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent-soft ring-1 ring-accent/20">
            <Award size={26} />
          </div>
          <h3 className="mb-1 text-xl font-bold text-white">{cert.title}</h3>
          <p className="mb-5 text-sm text-ink-muted">{cert.issuer} · {cert.year}</p>

          <div className="mb-5 flex items-center gap-2 rounded-xl border border-border bg-card/50 px-4 py-3">
            <ShieldCheck size={16} className="text-green-400" />
            <span className="font-mono text-xs text-ink-muted">ID: {cert.credentialId}</span>
          </div>

          <div className="mb-6">
            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-soft">
              Skills covered
            </h4>
            <div className="flex flex-wrap gap-2">
              {cert.skills.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-ink-muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <a
            href={cert.url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:scale-105"
          >
            <ExternalLink size={15} /> Verify credential
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
