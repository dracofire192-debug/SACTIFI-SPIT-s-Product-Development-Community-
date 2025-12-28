import { motion } from 'framer-motion';
import { ArrowDown, Rocket, Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParticleGrid } from './ParticleGrid';
import { BinaryOverlay } from './BinaryOverlay';

const stats = [
  { value: '10+', label: 'Projects' },
  { value: '15+', label: 'Technologies' },
  { value: '6', label: 'Sectors' },
  { value: '50+', label: 'Team Members' },
];

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <ParticleGrid />
      <BinaryOverlay />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />

      {/* Floating 3D Elements */}
      <motion.div
        animate={{ y: [-20, 20, -20], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[10%] hidden lg:block"
      >
        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center backdrop-blur-sm">
          <Rocket className="w-10 h-10 text-primary" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [20, -20, 20], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-[15%] hidden lg:block"
      >
        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent/20 to-neon-green/20 border border-accent/30 flex items-center justify-center backdrop-blur-sm">
          <Zap className="w-8 h-8 text-accent" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-15, 15, -15], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[8%] hidden lg:block"
      >
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-green/20 to-primary/20 border border-neon-green/30 flex items-center justify-center backdrop-blur-sm">
          <Globe className="w-7 h-7 text-neon-green" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/10">
            SPIT's Product Development Ecosystem
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="gradient-text">SACTIFI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 font-light"
        >
          Startup and Collaboration for Technological and{' '}
          <span className="text-primary">Innovative Future of India</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10"
        >
          Transforming Ideas into Impact — Built by{' '}
          <span className="text-foreground font-medium">Chinmay Tawade</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display text-sm tracking-wide px-8">
            Explore Our Projects
          </Button>
          <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 font-display text-sm tracking-wide px-8">
            Partner With Us
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-3xl md:text-4xl font-display font-bold text-primary mb-1"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
};
