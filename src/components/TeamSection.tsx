import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Github, Mail, Users, GraduationCap, Building2, Handshake } from 'lucide-react';

const teamMembers = [
  {
    name: 'Chinmay Tawade',
    role: 'Founder & Lead',
    description: 'Visionary leader driving SACTIFI\'s mission to transform India\'s technological landscape.',
    icon: Users,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    name: 'SPIT Students',
    role: 'Core Team',
    description: 'Passionate engineering students bringing innovation and technical expertise to every project.',
    icon: GraduationCap,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    name: 'SPIT Alumni',
    role: 'Mentors & Advisors',
    description: 'Industry professionals guiding the next generation of innovators with real-world experience.',
    icon: Building2,
    color: 'text-neon-green',
    bgColor: 'bg-neon-green/10',
  },
  {
    name: 'Industry Partners',
    role: 'Collaborators',
    description: 'Leading companies partnering with us to create impactful solutions together.',
    icon: Handshake,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
];

export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-card" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">The People Behind SACTIFI</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            A diverse ecosystem of students, alumni, and industry leaders driving innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="card-glow rounded-2xl p-6 bg-secondary/30 border border-border h-full text-center">
                <div className={`w-20 h-20 rounded-full ${member.bgColor} border border-current/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${member.color}`}>
                  <member.icon className={`w-10 h-10 ${member.color}`} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className={`text-sm font-medium ${member.color} mb-3`}>
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partnership CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="card-glow rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-primary/20 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
              Partner With Us
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              We actively seek collaboration with companies that align with our vision. Together, we can bring innovative product ideas to life through active partnership and support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Start Collaboration
              </a>
              <a href="#projects" className="inline-flex items-center justify-center px-8 py-3 border border-primary/50 text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors">
                View Our Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
