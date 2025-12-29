import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SectorsSection } from '@/components/SectorsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { TechStackSection } from '@/components/TechStackSection';
import { TeamSection } from '@/components/TeamSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { GlowingCursor } from '@/components/GlowingCursor';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <GlowingCursor />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SectorsSection />
      <ProjectsSection />
      <TechStackSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
