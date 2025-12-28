import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const categories = ['All', 'Backend', 'Frontend', 'AI/ML', 'Database', 'Web3', 'Hardware', 'DevOps', 'Cloud'];

const technologies = [
  { name: 'Python', icon: '🐍', category: 'Backend' },
  { name: 'JavaScript', icon: 'JS', category: 'Frontend' },
  { name: 'TypeScript', icon: 'TS', category: 'Frontend' },
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'Next.js', icon: 'NX', category: 'Frontend' },
  { name: 'Node.js', icon: 'N', category: 'Backend' },
  { name: 'FastAPI', icon: 'FA', category: 'Backend' },
  { name: 'TensorFlow', icon: 'TF', category: 'AI/ML' },
  { name: 'PyTorch', icon: 'PT', category: 'AI/ML' },
  { name: 'OpenAI', icon: '🤖', category: 'AI/ML' },
  { name: 'MongoDB', icon: 'M', category: 'Database' },
  { name: 'PostgreSQL', icon: 'PG', category: 'Database' },
  { name: 'Redis', icon: 'R', category: 'Database' },
  { name: 'Blockchain', icon: '⛓️', category: 'Web3' },
  { name: 'Solidity', icon: 'S', category: 'Web3' },
  { name: 'IoT', icon: '📡', category: 'Hardware' },
  { name: 'Arduino', icon: 'A', category: 'Hardware' },
  { name: 'Raspberry Pi', icon: '🍓', category: 'Hardware' },
  { name: 'Docker', icon: '🐳', category: 'DevOps' },
  { name: 'Kubernetes', icon: 'K8s', category: 'DevOps' },
  { name: 'GitHub Actions', icon: 'GH', category: 'DevOps' },
  { name: 'AWS', icon: '☁️', category: 'Cloud' },
  { name: 'GCP', icon: 'G', category: 'Cloud' },
  { name: 'Tailwind CSS', icon: 'TW', category: 'Frontend' },
];

export const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTech = activeCategory === 'All' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeCategory);

  return (
    <section id="tech" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-background bg-grid-small" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Our Tech Stack</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Technologies We <span className="gradient-text">Use</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Cutting-edge tools and frameworks powering our innovative solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto"
        >
          {filteredTech.map((tech, index) => (
            <motion.div
              key={tech.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="card-glow rounded-xl p-6 bg-card border border-border h-full text-center hover:border-primary/50 transition-all">
                <div className="text-3xl mb-3 font-mono">
                  {tech.icon}
                </div>
                <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </h4>
                <span className="text-xs text-muted-foreground">{tech.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
