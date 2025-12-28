import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Lightbulb, Users } from 'lucide-react';

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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Who We Are</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            About <span className="gradient-text">SACTIFI</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            SACTIFI is more than just a startup — it's a dynamic, multidisciplinary ecosystem dedicated to solving critical problems across India's economic landscape through technology and innovation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="card-glow rounded-2xl p-8 bg-secondary/50 border border-border h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
