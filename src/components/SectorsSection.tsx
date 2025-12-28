import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Cpu, Heart, TreePine, Building, TrendingUp } from 'lucide-react';

const sectors = [
  {
    icon: Leaf,
    title: 'Agriculture',
    description: 'Smart agricultural solutions with blockchain traceability and AI-powered quality detection',
    color: 'text-neon-green',
    bgColor: 'bg-neon-green/10',
    borderColor: 'border-neon-green/30',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description: 'Cutting-edge tech solutions leveraging AI, IoT, and blockchain technologies',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/30',
  },
  {
    icon: Heart,
    title: 'Healthcare',
    description: 'AI-powered healthcare platforms for predictive diagnostics and patient care',
    color: 'text-destructive',
    bgColor: 'bg-destructive/10',
    borderColor: 'border-destructive/30',
  },
  {
    icon: TreePine,
    title: 'Environment',
    description: 'Sustainable solutions for environmental conservation and monitoring',
    color: 'text-neon-green',
    bgColor: 'bg-neon-green/10',
    borderColor: 'border-neon-green/30',
  },
  {
    icon: Building,
    title: 'Governance',
    description: 'Digital governance platforms for transparent and efficient civic services',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/30',
  },
  {
    icon: TrendingUp,
    title: 'Economy',
    description: 'Solutions to bolster India\'s global economic standing through innovation',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/30',
  },
];

export const SectorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            >
              <div className={`card-glow rounded-2xl p-6 bg-card border ${sector.borderColor} h-full hover:border-opacity-100 transition-all`}>
                <div className={`w-12 h-12 rounded-xl ${sector.bgColor} border ${sector.borderColor} flex items-center justify-center mb-4`}>
                  <sector.icon className={`w-6 h-6 ${sector.color}`} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                  {sector.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {sector.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
