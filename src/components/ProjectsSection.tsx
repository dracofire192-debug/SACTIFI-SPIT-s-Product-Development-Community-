import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight, ExternalLink, Bot, Leaf, Cloud, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px]" />

      <div ref={ref} className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Our Solutions</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Flagship <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Innovative solutions addressing critical problems across India's economic landscape
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Project List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1 space-y-4"
          >
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  selectedProject.id === project.id
                    ? 'bg-primary/10 border-primary/50'
                    : 'bg-secondary/30 border-border hover:border-primary/30'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} border border-primary/20 flex items-center justify-center`}>
                    <project.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground text-sm">{project.title}</h4>
                    <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                  </div>
                  <Badge variant="outline" className="text-xs border-primary/30 text-primary">
                    {project.status}
                  </Badge>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="card-glow rounded-2xl p-8 bg-secondary/30 border border-border h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedProject.gradient} border border-primary/30 flex items-center justify-center`}>
                  <selectedProject.icon className="w-8 h-8 text-primary" />
                </div>
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

              <p className="text-muted-foreground leading-relaxed mb-8">
                {selectedProject.description}
              </p>

              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Key Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {selectedProject.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wide">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
