import { motion } from 'framer-motion';
import { Star, GitFork } from 'lucide-react';
import { Section } from '@/components/Section';
import { githubPinned } from '@/data/portfolio';
import { fadeUp, stagger } from '@/lib/motion';

const levelColors = [
  'bg-white/5',
  'bg-accent/30',
  'bg-accent/50',
  'bg-accent/70',
  'bg-accent',
];

const langColor: Record<string, string> = {
  Python: 'text-yellow-300',
  TypeScript: 'text-blue-400',
};

export function GitHubSection() {
  return (
    <Section
      id="github"
      eyebrow="Open Source"
      title="GitHub activity"
      description="Pinned repositories and a live contribution snapshot — the work I ship in the open."
    >
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid gap-6 lg:grid-cols-[1.4fr_1fr]"
      >
        {/* Pinned repos */}
        <div className="grid gap-4 sm:grid-cols-2">
          {githubPinned.map((repo) => (
            <motion.a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              variants={fadeUp}
              whileHover={{ y: -5 }}
              className="group glass card-hover flex flex-col rounded-2xl p-5"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                <span className="font-mono text-sm text-ink.DEFAULT group-hover:text-white">
                  {repo.name}
                </span>
              </div>
              <p className="mb-4 flex-1 text-xs leading-relaxed text-ink-muted">{repo.description}</p>
              <div className="flex items-center gap-4 text-xs text-ink-faint">
                <span className={`flex items-center gap-1 ${langColor[repo.language] ?? 'text-ink-muted'}`}>
                  <span className="h-2 w-2 rounded-full bg-current" />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={12} /> 
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
}