import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, MapPin, Mail, Phone, Linkedin, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { InteractiveCard } from './InteractiveCard';
import { MagneticButton } from './MagneticButton';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-background bg-grid" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div ref={ref} className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Have an idea? Want to partner with us? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <InteractiveCard className="h-full">
              <div className="card-glow rounded-2xl p-8 bg-card border border-border h-full">
                <h3 className="font-display text-xl font-semibold mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <motion.div whileFocus={{ scale: 1.02 }}>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">Name</label>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-secondary/50 border-border focus:border-primary transition-all duration-300 focus:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                        required
                      />
                    </motion.div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-secondary/50 border-border focus:border-primary transition-all duration-300 focus:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Subject</label>
                    <Input
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-secondary/50 border-border focus:border-primary transition-all duration-300 focus:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground mb-2 block">Message</label>
                    <Textarea
                      placeholder="Tell us about your idea or inquiry..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-secondary/50 border-border focus:border-primary min-h-[150px] transition-all duration-300 focus:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
                      required
                    />
                  </div>
                  <MagneticButton className="w-full">
                    <Button 
                      type="submit" 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          Send Message <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </MagneticButton>
                </form>
              </div>
            </InteractiveCard>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <InteractiveCard>
              <div className="card-glow rounded-2xl p-8 bg-card border border-border">
                <h3 className="font-display text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, title: 'Location', content: ['Sardar Patel Institute of Technology', 'Andheri West, Mumbai 400058'] },
                    { icon: Mail, title: 'Email', content: ['contact@sactifi.in'] },
                    { icon: Phone, title: 'Phone', content: ['+91 (XXX) XXX-XXXX'] },
                  ].map((item, index) => (
                    <motion.div 
                      key={item.title}
                      className="flex items-start gap-4 group cursor-default"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div 
                        className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0"
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="w-5 h-5 text-primary" />
                      </motion.div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                        {item.content.map((line, i) => (
                          <p key={i} className="text-muted-foreground text-sm">{line}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </InteractiveCard>

            {/* Social Links */}
            <InteractiveCard>
              <div className="card-glow rounded-2xl p-8 bg-card border border-border">
                <h3 className="font-display text-xl font-semibold mb-6">Connect With Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => (
                    <MagneticButton key={social.label}>
                      <motion.a 
                        href={social.href} 
                        className="w-12 h-12 rounded-xl bg-secondary/50 border border-border flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                      </motion.a>
                    </MagneticButton>
                  ))}
                </div>
              </div>
            </InteractiveCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
