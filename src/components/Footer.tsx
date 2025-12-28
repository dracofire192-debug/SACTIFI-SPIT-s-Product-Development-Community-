import { motion } from 'framer-motion';

const footerLinks = {
  company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ],
  sectors: [
    { label: 'Agriculture', href: '#sectors' },
    { label: 'Technology', href: '#sectors' },
    { label: 'Healthcare', href: '#sectors' },
    { label: 'Environment', href: '#sectors' },
  ],
  resources: [
    { label: 'Tech Stack', href: '#tech' },
    { label: 'Partner With Us', href: '#contact' },
    { label: 'Collaborate', href: '#contact' },
    { label: 'SPIT', href: 'https://www.spit.ac.in' },
  ],
};

export const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                <span className="font-display font-bold text-primary text-lg">S</span>
              </div>
              <span className="font-display font-bold text-xl text-foreground">SACTIFI</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Startup and Collaboration for Technological and Innovative Future of India. 
              Transforming ideas into impactful products.
            </p>
            <p className="text-muted-foreground text-sm">
              Built with ❤️ by <span className="text-primary font-medium">Chinmay Tawade</span>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Sectors</h4>
            <ul className="space-y-3">
              {footerLinks.sectors.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} SACTIFI. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Part of <a href="https://www.spit.ac.in" className="text-primary hover:underline">SPIT</a> Innovation Ecosystem
          </p>
        </div>
      </div>
    </footer>
  );
};
