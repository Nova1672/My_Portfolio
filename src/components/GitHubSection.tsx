import { motion } from 'framer-motion';
import { Star, GitFork } from 'lucide-react';
import { Section } from '@/components/Section';
import { githubPinned, contributionPattern, contributionWeeks } from '@/data/portfolio';
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
                  <Star size={12} /> {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork size={12} /> {repo.forks}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contribution graph */}
        <motion.div variants={fadeUp} className="glass rounded-2xl p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-white">Contributions</h3>
            <span className="text-xs text-ink-faint">Last {contributionWeeks} weeks</span>
          </div>
          <div className="flex gap-1.5 overflow-hidden">
            {contributionPattern.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-1.5">
                {week.map((level, di) => (
                  <motion.div
                    key={di}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (wi * 7 + di) * 0.003, duration: 0.3 }}
                    className={`h-3 w-3 rounded-sm ${levelColors[level]}`}
                    title={`${level * 2} contributions`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-end gap-1.5 text-[11px] text-ink-faint">
            Less
            {levelColors.map((c, i) => (
              <span key={i} className={`h-3 w-3 rounded-sm ${c}`} />
            ))}
            More
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3 border-t border-border pt-5">
            <div>
              <div className="font-mono text-xl font-bold text-white">412</div>
              <div className="text-xs text-ink-faint">Contributions</div>
            </div>
            <div>
              <div className="font-mono text-xl font-bold text-white">34</div>
              <div className="text-xs text-ink-faint">Repositories</div>
            </div>
            <div>
              <div className="font-mono text-xl font-bold text-white">89</div>
              <div className="text-xs text-ink-faint">Day streak</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
