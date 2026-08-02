import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const codeLines = [
  { text: 'import numpy as np', color: 'text-ink-faint' },
  { text: 'from sklearn.ensemble import GradientBoostingClassifier', color: 'text-ink-faint' },
  { text: '', color: '' },
  { text: 'class DataScientist:', color: 'text-cyan-soft' },
  { text: '    def __init__(self):', color: 'text-ink-muted' },
  { text: '        self.name = "Suraj Patil"', color: 'text-ink.DEFAULT' },
  { text: '        self.role = "AI Engineer"', color: 'text-ink.DEFAULT' },
  { text: '        self.stack = ["Python", "ML", "SQL"]', color: 'text-ink.DEFAULT' },
  { text: '', color: '' },
  { text: '    def solve(self, problem):', color: 'text-ink-muted' },
  { text: '        data = self.gather(problem)', color: 'text-ink.DEFAULT' },
  { text: '        model = self.train(data)', color: 'text-ink.DEFAULT' },
  { text: '        return self.deploy(model)', color: 'text-ink.DEFAULT' },
  { text: '', color: '' },
  { text: 'ds = DataScientist()', color: 'text-accent-soft' },
  { text: 'insight = ds.solve("real_world")', color: 'text-accent-soft' },
];

export function CodeWindow() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typed, setTyped] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const line = codeLines[visibleLines];
    if (!line.text) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 120);
      return () => clearTimeout(t);
    }
    if (typed.length < line.text.length) {
      const t = setTimeout(() => setTyped(line.text.slice(0, typed.length + 1)), 18);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      setTyped('');
    }, 90);
    return () => clearTimeout(t);
  }, [visibleLines, typed]);

  useEffect(() => {
    if (visibleLines >= codeLines.length) {
      const t = setTimeout(() => {
        setVisibleLines(0);
        setTyped('');
      }, 4000);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 30, rotateX: 8 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      whileHover={{ y: -6 }}
      className="glass-strong relative w-full max-w-md overflow-hidden rounded-2xl shadow-2xl"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent/20 via-transparent to-cyan/10 opacity-60" />
      <div className="relative">
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          <span className="ml-3 font-mono text-xs text-ink-faint">suraj_portfolio.py</span>
        </div>
        <div className="min-h-[340px] px-5 py-4 font-mono text-[13px] leading-relaxed">
          {codeLines.slice(0, visibleLines).map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-4 w-4 select-none text-right text-ink-faint/50">
                {i + 1}
              </span>
              <span className={line.color}>{line.text || '\u00A0'}</span>
            </div>
          ))}
          {visibleLines < codeLines.length && (
            <div className="flex">
              <span className="mr-4 w-4 select-none text-right text-ink-faint/50">
                {visibleLines + 1}
              </span>
              <span className={codeLines[visibleLines].color}>
                {typed}
                <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-blink bg-accent-soft align-middle" />
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
