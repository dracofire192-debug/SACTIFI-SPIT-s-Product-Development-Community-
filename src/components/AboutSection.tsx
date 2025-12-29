import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Lightbulb, Users } from 'lucide-react';
import { LaptopDisplay } from './LaptopDisplay';
import { InteractiveCard } from './InteractiveCard';
import { ScrollReveal, StaggerContainer, StaggerItem, TextReveal } from './ScrollAnimations';

const features = [
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To envision an India renowned for self-produced, high-quality products that rival global brands, fostering an era of innovation and self-reliance.',
  },
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To solve critical problems across India\'s economic landscape by building groundbreaking solutions that elevate national and international quality standards.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We empower the next generation of innovators with the insights and resources needed to build impactful products from concept to deployment.',
  },
  {
    icon: Users,
    title: 'Collaborative Ecosystem',
    description: 'A dynamic, multidisciplinary ecosystem for students dedicated to solving real-world problems through technology and innovation.',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      />
      
      {/* Animated glow */}
      <motion.div 
        className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"
        animate={{ 
          x: [0, 50, 0],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div ref={ref} className="relative z-10 container mx-auto px-4">
        <ScrollReveal className="text-center mb-16">
          <motion.span 
            className="text-primary font-medium text-sm uppercase tracking-widest inline-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Who We Are
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            <TextReveal text="About" delay={0.2} /> <span className="gradient-text"><TextReveal text="SACTIFI" delay={0.3} /></span>
          </h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            SACTIFI is more than just a startup — it's a dynamic, multidisciplinary ecosystem dedicated to solving critical problems across India's economic landscape through technology and innovation.
          </motion.p>
        </ScrollReveal>

        {/* Laptop Display with 3D Robot */}
        <ScrollReveal className="mb-20" delay={0.2}>
          <LaptopDisplay />
        </ScrollReveal>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" staggerDelay={0.15}>
          {features.map((feature, index) => (
            <StaggerItem key={feature.title}>
              <motion.div
                className="group relative h-full"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <InteractiveCard className="h-full">
                  <div className="card-glow rounded-2xl p-8 bg-secondary/50 border border-border h-full group-hover:border-primary/50 transition-all duration-300">
                    <motion.div 
                      className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </InteractiveCard>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
