import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import { Section } from '@/components/Section';
import { profile } from '@/data/portfolio';
import { fadeUp, stagger } from '@/lib/motion';

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3500);
    }, 1200);
  };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something"
      description="I'm open to internships, full-time AI/Data Science roles, and collaborations on interesting problems. Reach out — I read every message."
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        {/* Info */}
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col gap-4"
        >
          <motion.div variants={fadeUp} className="glass rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              <span className="text-sm font-medium text-white">Available for new opportunities</span>
            </div>
            <p className="text-sm leading-relaxed text-ink-muted">
              Currently seeking AI/ML internships and full-time data science roles. Typical
              response time is under 24 hours.
            </p>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href={`mailto:${profile.email}`}
            className="group glass card-hover flex items-center gap-4 rounded-2xl p-5"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent-soft ring-1 ring-accent/20">
              <Mail size={18} />
            </span>
            <div className="flex-1">
              <div className="text-xs text-ink-faint">Email</div>
              <div className="text-sm font-medium text-white">{profile.email}</div>
            </div>
            <ArrowUpRight size={16} className="text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="group glass card-hover flex items-center gap-3 rounded-2xl p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-ink-muted ring-1 ring-white/10">
                <Github size={18} />
              </span>
              <div>
                <div className="text-xs text-ink-faint">GitHub</div>
                <div className="text-sm text-white">@surajpatil-ai</div>
              </div>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group glass card-hover flex items-center gap-3 rounded-2xl p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-ink-muted ring-1 ring-white/10">
                <Linkedin size={18} />
              </span>
              <div>
                <div className="text-xs text-ink-faint">LinkedIn</div>
                <div className="text-sm text-white">in/surajpatil-ai</div>
              </div>
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="glass flex items-center gap-4 rounded-2xl p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-ink-muted ring-1 ring-white/10">
              <MapPin size={18} />
            </span>
            <div>
              <div className="text-xs text-ink-faint">Location</div>
              <div className="text-sm text-white">{profile.location} · Remote-friendly</div>
            </div>
          </motion.div>

          <motion.a
            variants={fadeUp}
            href={profile.resume}
            className="group flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-5 py-3 text-sm font-medium text-ink.DEFAULT transition-colors hover:border-white/20 hover:bg-card"
          >
            <Download size={15} /> Download résumé
          </motion.a>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          onSubmit={onSubmit}
          className="glass-strong rounded-2xl p-6 sm:p-8"
        >
          <div className="space-y-5">
            <Field label="Name">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="input"
                placeholder="Your name"
              />
            </Field>
            <Field label="Email">
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="input"
                placeholder="you@company.com"
              />
            </Field>
            <Field label="Message">
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="input resize-none"
                placeholder="Tell me about the role or project..."
              />
            </Field>
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
          >
            {status === 'sending' ? (
              'Sending...'
            ) : status === 'sent' ? (
              'Message sent — thank you!'
            ) : (
              <>
                Send message
                <Send size={15} className="transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-faint">
        {label}
      </span>
      {children}
    </label>
  );
}
