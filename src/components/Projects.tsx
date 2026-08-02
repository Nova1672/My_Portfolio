import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check, ExternalLink, FileText, Github } from 'lucide-react';
import { Section } from '@/components/Section';
import { projects, type Project } from '@/data/portfolio';
import { fadeUp, stagger } from '@/lib/motion';

export function Projects() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      description="End-to-end data science and AI systems — from problem framing and data engineering to modeling, evaluation, and deployment."
    >
      <motion.div
        variants={stagger(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-6 lg:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            expanded={expanded === project.id}
            onToggle={() =>
              setExpanded((prev) => (prev === project.id ? null : project.id))
            }
          />
        ))}
      </motion.div>
    </Section>
  );
}

function ProjectCard({
  project,
  expanded,
  onToggle,
}: {
  project: Project;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      className="group glass relative flex flex-col overflow-hidden rounded-2xl transition-colors hover:border-white/15"
    >
      {/* Visual header */}
      <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${project.accent}`}>
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="font-mono text-5xl font-bold text-white/10 transition-transform duration-700 group-hover:scale-110">
            {project.title.split(' ').map((w) => w[0]).join('')}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
        <div className="absolute bottom-4 left-5 right-5">
          <div className="mb-1 text-xs font-medium uppercase tracking-wider text-accent-soft">
            {project.tagline}
          </div>
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-4 text-sm leading-relaxed text-ink-muted">{project.description}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-card/60 px-2.5 py-1 font-mono text-xs text-ink-muted"
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.div
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          <div className="space-y-4 border-t border-border pt-4">
            <Detail label="Challenge" text={project.challenge} />
            <Detail label="Solution" text={project.solution} />
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-soft">
                Key features
              </h4>
              <ul className="space-y-1.5">
                {project.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                    <Check size={14} className="mt-0.5 shrink-0 text-cyan-soft" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent-soft">
                Results
              </h4>
              <ul className="space-y-1.5">
                {project.results.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-ink-muted">
                    <ArrowUpRight size={14} className="mt-0.5 shrink-0 text-green-400" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="mt-auto flex items-center gap-2 pt-5">
          <button
            onClick={onToggle}
            className="flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-4 py-2 text-xs font-medium text-ink.DEFAULT transition-colors hover:border-white/20 hover:bg-card"
          >
            <FileText size={14} />
            {expanded ? 'Hide details' : 'Case study'}
          </button>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full border border-border bg-card/50 px-4 py-2 text-xs font-medium text-ink.DEFAULT transition-colors hover:border-white/20 hover:bg-card"
          >
            <Github size={14} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-medium text-bg transition-transform hover:scale-105"
          >
            <ExternalLink size={14} /> Demo
          </a>
        </div>
      </div>
    </motion.article>
  );
}

function Detail({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <h4 className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-accent-soft">
        {label}
      </h4>
      <p className="text-sm leading-relaxed text-ink-muted">{text}</p>
    </div>
  );
}
