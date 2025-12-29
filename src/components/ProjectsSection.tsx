import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ExternalLink, Bot, Leaf, Cloud, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollReveal, TextReveal } from './ScrollAnimations';
import { MagneticButton } from './MagneticButton';

const projects = [
  {
    id: 1,
    title: 'Citizen Connect',
    subtitle: 'Digital Governance',
    status: 'In Development',
    description: 'AI-powered grievance redressal platform ensuring transparency, accountability, and efficiency in civic problem resolution.',
    features: ['AI-Powered Automation', 'Geolocation Integration', 'Transparent Tracking', 'Real-time Analytics'],
    techStack: ['React', 'Node.js', 'TensorFlow', 'PostgreSQL'],
    icon: Bot,
    gradient: 'from-primary/20 to-accent/20',
  },
  {
    id: 2,
    title: 'Smart Agricultural Traceability',
    subtitle: 'AgriTech Solution',
    status: 'In Development',
    description: 'Blockchain-based traceability system for agricultural products ensuring quality and authenticity from farm to table.',
    features: ['Blockchain Traceability', 'IoT Sensors', 'Quality Detection', 'Supply Chain Visibility'],
    techStack: ['Blockchain', 'IoT', 'Python', 'MongoDB'],
    icon: Leaf,
    gradient: 'from-neon-green/20 to-primary/20',
  },
  {
    id: 3,
    title: 'Environmental Monitoring',
    subtitle: 'Sustainability Platform',
    status: 'Research Phase',
    description: 'IoT-powered environmental monitoring system for real-time tracking of air quality, water levels, and ecological data.',
    features: ['Real-time Monitoring', 'Predictive Analytics', 'Alert Systems', 'Data Visualization'],
    techStack: ['IoT', 'Python', 'AWS', 'React'],
    icon: Cloud,
    gradient: 'from-neon-green/20 to-accent/20',
  },
  {
    id: 4,
    title: 'Healthcare AI Platform',
    subtitle: 'MedTech Innovation',
    status: 'Research Phase',
    description: 'AI-powered healthcare platform for predictive diagnostics, patient care optimization, and medical data analysis.',
    features: ['Predictive Diagnostics', 'Patient Analytics', 'Medical Imaging AI', 'EHR Integration'],
    techStack: ['TensorFlow', 'PyTorch', 'FastAPI', 'PostgreSQL'],
    icon: Heart,
    gradient: 'from-destructive/20 to-accent/20',
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-card" />
      <motion.div 
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
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
            Our Solutions
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            <TextReveal text="Flagship" delay={0.1} /> <span className="gradient-text"><TextReveal text="Projects" delay={0.3} /></span>
          </h2>
          <motion.p 
            className="text-muted-foreground text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Innovative solutions addressing critical problems across India's economic landscape
          </motion.p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Project List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-4"
          >
            {projects.map((project, index) => (
              <motion.button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 8, scale: 1.02 }}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selectedProject.id === project.id
                    ? 'bg-primary/10 border-primary/50 shadow-[0_0_20px_hsl(var(--primary)/0.2)]'
                    : 'bg-secondary/30 border-border hover:border-primary/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} border border-primary/20 flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <project.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm">{project.title}</h4>
                    <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                  </div>
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                    {project.status}
                  </Badge>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="card-glow rounded-2xl p-8 bg-secondary/30 border border-border h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <motion.div 
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedProject.gradient} border border-primary/30 flex items-center justify-center`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.5, type: "spring" }}
                  >
                    <selectedProject.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <div>
                    <Badge variant="outline" className="text-xs border-primary/30 text-primary mb-2">
                      {selectedProject.status}
                    </Badge>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      {selectedProject.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">{selectedProject.subtitle}</p>
                  </div>
                </div>

                <motion.p 
                  className="text-muted-foreground leading-relaxed mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedProject.description}
                </motion.p>

                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Key Features</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <motion.div 
                        key={feature} 
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                      >
                        <ArrowRight className="w-4 h-4 text-primary" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech, i) => (
                      <motion.div
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.05 }}
                      >
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <MagneticButton>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]">
                    Learn More <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </MagneticButton>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
