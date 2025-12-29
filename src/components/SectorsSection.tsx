import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Leaf, Cpu, Heart, TreePine, Building, TrendingUp } from 'lucide-react';
import { InteractiveCard } from './InteractiveCard';

const sectors = [
  {
    icon: Leaf,
    title: 'Agriculture',
    description: 'Smart agricultural solutions with blockchain traceability and AI-powered quality detection',
    color: 'text-neon-green',
    bgColor: 'bg-neon-green/10',
    borderColor: 'border-neon-green/30',
    hoverGlow: '0 0 40px hsl(150 100% 50% / 0.3)',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Cutting-edge tech solutions leveraging AI, IoT, and blockchain technologies',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/30',
    hoverGlow: '0 0 40px hsl(var(--primary) / 0.3)',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'AI-powered healthcare platforms for predictive diagnostics and patient care',
    color: 'text-destructive',
    bgColor: 'bg-destructive/10',
    borderColor: 'border-destructive/30',
    hoverGlow: '0 0 40px hsl(0 84% 60% / 0.3)',
  },
  {
    icon: TreePine,
    title: 'Environment',
    description: 'Sustainable solutions for environmental conservation and monitoring',
    color: 'text-neon-green',
    bgColor: 'bg-neon-green/10',
    borderColor: 'border-neon-green/30',
    hoverGlow: '0 0 40px hsl(150 100% 50% / 0.3)',
  },
  {
    icon: Building,
    title: 'Governance',
    description: 'Digital governance platforms for transparent and efficient civic services',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/30',
    hoverGlow: '0 0 40px hsl(var(--accent) / 0.3)',
  },
  {
    icon: TrendingUp,
    title: 'Economy',
    description: 'Solutions to bolster India\'s global economic standing through innovation',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/30',
    hoverGlow: '0 0 40px hsl(var(--primary) / 0.3)',
  },
];

export const SectorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="sectors" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-background bg-grid" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Our Impact Areas</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Sectors of <span className="gradient-text">Influence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            SACTIFI's influence spans multiple sectors, driven by problem-solving and collaboration to transform India's landscape
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <InteractiveCard className="h-full">
                <motion.div 
                  className={`rounded-2xl p-6 bg-card border ${sector.borderColor} h-full transition-all duration-300`}
                  animate={{
                    boxShadow: hoveredIndex === index ? sector.hoverGlow : '0 0 0 transparent',
                    borderColor: hoveredIndex === index ? 'hsl(var(--primary) / 0.6)' : undefined,
                  }}
                >
                  <motion.div 
                    className={`w-12 h-12 rounded-xl ${sector.bgColor} border ${sector.borderColor} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <sector.icon className={`w-6 h-6 ${sector.color}`} />
                  </motion.div>
                  <h3 className="font-display text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {sector.description}
                  </p>
                </motion.div>
              </InteractiveCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
