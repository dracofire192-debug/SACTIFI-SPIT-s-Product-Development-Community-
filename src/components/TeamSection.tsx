import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Linkedin, Github, Mail, Users, GraduationCap, Building2, Handshake, Plus, ChevronRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Core team categories
const teamCategories = [
  {
    id: 'leadership',
    name: 'Leadership',
    icon: Users,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/30',
  },
  {
    id: 'core',
    name: 'Core Team',
    icon: GraduationCap,
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    borderColor: 'border-accent/30',
  },
  {
    id: 'mentors',
    name: 'Mentors',
    icon: Building2,
    color: 'text-neon-green',
    bgColor: 'bg-neon-green/10',
    borderColor: 'border-neon-green/30',
  },
  {
    id: 'partners',
    name: 'Partners',
    icon: Handshake,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    borderColor: 'border-primary/30',
  },
];

// Team members data
const teamMembers = [
  {
    id: 1,
    name: 'Chinmay Tawade',
    role: 'Founder & Lead',
    category: 'leadership',
    description: 'Visionary leader driving SACTIFI\'s mission to transform India\'s technological landscape.',
    image: null,
    socials: {
      linkedin: '#',
      github: '#',
      email: 'mailto:chinmay@sactifi.in',
    },
  },
  // Placeholder for growing team
  {
    id: 2,
    name: 'Join Our Team',
    role: 'We\'re Growing!',
    category: 'core',
    description: 'Passionate about innovation? Join us in building the future of technology.',
    image: null,
    isPlaceholder: true,
  },
];

const stats = [
  { value: '50+', label: 'Team Members', icon: Users },
  { value: '10+', label: 'Mentors', icon: Building2 },
  { value: '5+', label: 'Industry Partners', icon: Handshake },
];

export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('leadership');

  const filteredMembers = teamMembers.filter(
    member => member.category === activeCategory || activeCategory === 'all'
  );

  return (
    <section id="team" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div ref={ref} className="relative z-10 container mx-auto px-4">
        {/* Header */}
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

        {/* Team Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center p-4 rounded-xl bg-secondary/30 border border-border">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-display text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {teamCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === category.id
                  ? `${category.bgColor} ${category.borderColor} ${category.color}`
                  : 'border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          ))}
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group"
            >
              {member.isPlaceholder ? (
                <div className="card-glow rounded-2xl p-8 bg-secondary/20 border border-dashed border-primary/30 h-full flex flex-col items-center justify-center text-center hover:border-primary/60 transition-all cursor-pointer min-h-[280px]">
                  <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Plus className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.description}
                  </p>
                  <a href="#contact" className="mt-4 text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    Get in Touch <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                <div className="card-glow rounded-2xl p-8 bg-secondary/30 border border-border h-full text-center group-hover:border-primary/50 transition-all min-h-[280px]">
                  {/* Avatar */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/30 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden">
                      {member.image ? (
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-3xl font-display font-bold text-primary">
                          {member.name.charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-neon-green border-2 border-background flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-background" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  {member.socials && (
                    <div className="flex justify-center gap-3">
                      {member.socials.linkedin && (
                        <a href={member.socials.linkedin} className="w-9 h-9 rounded-full bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.github && (
                        <a href={member.socials.github} className="w-9 h-9 rounded-full bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {member.socials.email && (
                        <a href={member.socials.email} className="w-9 h-9 rounded-full bg-secondary/50 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                          <Mail className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Join CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-glow rounded-3xl p-8 md:p-12 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent border border-primary/20 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-[60px]" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                We're Hiring & Partnering
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                Be Part of the Innovation
              </h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Whether you're a student looking to gain experience, a mentor wanting to give back, or a company seeking collaboration — there's a place for you at SACTIFI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-display text-sm tracking-wide px-8">
                  Join the Team
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 font-display text-sm tracking-wide px-8">
                  Partner With Us
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
