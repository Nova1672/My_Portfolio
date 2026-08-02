import { motion } from 'framer-motion';
import { ArrowDownRight, Github, Linkedin, MapPin, Sparkles } from 'lucide-react';
import { ParticleField } from '@/components/ParticleField';
import { CodeWindow } from '@/components/CodeWindow';
import { profile } from '@/data/portfolio';
import { fadeUp, stagger } from '@/lib/motion';

export function Hero() {
  const scrollTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <ParticleField />
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-1/4 h-[420px] w-[420px] translate-x-1/2 rounded-full bg-cyan/15 blur-[120px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      <div className="container-page relative z-10 grid items-center gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div variants={stagger(0.12)} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-xs text-ink-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for internships & full-time roles
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-5xl font-bold leading-[1.05] tracking-tightest text-white sm:text-6xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-lg font-medium text-ink-muted sm:text-xl"
          >
            {profile.roles.map((role, i) => (
              <span key={role} className="flex items-center gap-3">
                {i > 0 && <span className="text-accent">•</span>}
                <span className="text-gradient-accent">{role}</span>
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('#projects')}
              className="group relative overflow-hidden rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects
                <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-accent to-cyan opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="rounded-full border border-border bg-card/50 px-6 py-3 text-sm font-semibold text-ink.DEFAULT backdrop-blur transition-colors hover:border-white/20 hover:bg-card"
            >
              Contact Me
            </button>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 flex items-center gap-5 text-sm text-ink-faint">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-ink.DEFAULT"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-ink.DEFAULT"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={16} /> {profile.location}
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="animate-float">
            <CodeWindow />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute -left-2 top-10 hidden rounded-xl border border-border bg-card/80 px-3 py-2 text-xs text-ink-muted backdrop-blur md:flex"
          >
            <Sparkles size={14} className="mr-1.5 text-accent-soft" /> model.train() running
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute -right-1 bottom-12 hidden rounded-xl border border-border bg-card/80 px-3 py-2 text-xs text-ink-muted backdrop-blur md:flex"
          >
            <span className="mr-1.5 h-2 w-2 rounded-full bg-green-400" /> accuracy: 0.92
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint transition-colors hover:text-ink.DEFAULT md:flex"
        aria-label="Scroll to about"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="flex h-9 w-5 items-start justify-center rounded-full border border-border p-1"
        >
          <span className="h-1.5 w-1 rounded-full bg-ink-faint" />
        </motion.span>
      </motion.button>
    </section>
  );
}
