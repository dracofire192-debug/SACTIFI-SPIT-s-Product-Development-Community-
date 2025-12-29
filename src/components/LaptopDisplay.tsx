import { Suspense, lazy, useState } from 'react';
import { motion } from 'framer-motion';

const Spline = lazy(() => import('@splinetool/react-spline'));

const robotMessages = [
  { main: "Innovate boldly.", sub: "Collaborate widely.", sub2: "Ship relentlessly." },
  { main: "Build the future.", sub: "Transform ideas.", sub2: "Create impact." },
  { main: "Dream big.", sub: "Start small.", sub2: "Scale fast." },
];

export const LaptopDisplay = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const cycleMessage = () => {
    setMessageIndex((prev) => (prev + 1) % robotMessages.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="max-w-5xl -mt-12 mx-auto w-full"
    >
      <div 
        className="relative border-4 border-border p-2 md:p-6 bg-card rounded-[30px] transition-all duration-500"
        style={{
          boxShadow: isHovered 
            ? 'rgba(0, 255, 255, 0.2) 0px 0px 60px, rgba(0, 0, 0, 0.3) 0px 9px 20px, rgba(0, 0, 0, 0.26) 0px 37px 37px'
            : 'rgba(0, 0, 0, 0.3) 0px 0px, rgba(0, 0, 0, 0.29) 0px 9px 20px, rgba(0, 0, 0, 0.26) 0px 37px 37px, rgba(0, 0, 0, 0.15) 0px 84px 50px, rgba(0, 0, 0, 0.04) 0px 149px 60px, rgba(0, 0, 0, 0.01) 0px 233px 65px',
          transform: 'perspective(1500px) rotateX(5deg)',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-[30rem] md:h-[40rem] w-full overflow-hidden rounded-2xl bg-secondary md:rounded-2xl md:p-4">
          <div className="relative w-full h-full rounded-2xl overflow-hidden bg-background flex flex-col md:flex-row">
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-6 bg-background/80 backdrop-blur-sm">
              <motion.div 
                className="max-w-lg"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <p className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed text-center md:text-left text-foreground/90">
                  SACTIFI is an innovation-driven organization that builds next-generation, 
                  production-ready solutions in AI & ML, Generative AI, Web Development, and 
                  Cybersecurity. We are a 'company-first' organization focused on professional 
                  excellence. Our teams transform complex business requirements into high-quality, 
                  reliable, and custom software that turns ideas into impact. We specialize in 
                  delivering commercially viable projects built for industry clients.
                </p>
              </motion.div>
            </div>

            {/* Right 3D Content */}
            <div className="w-full md:w-1/2 relative h-64 md:h-auto">
              <div className="relative w-full h-full overflow-hidden">
                <Suspense fallback={
                  <div className="w-full h-full flex items-center justify-center bg-secondary/50">
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  </div>
                }>
                  <Spline
                    scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
                    className="w-full h-full"
                  />
                </Suspense>
              </div>

              {/* Robot Speech Bubble */}
              <motion.div 
                className="pointer-events-auto absolute top-4 right-2 md:top-8 md:right-4 lg:top-12 lg:right-6 max-w-xs md:max-w-sm z-10 scale-75 md:scale-100 cursor-pointer"
                onClick={cycleMessage}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative bg-foreground/10 border border-foreground/15 backdrop-blur-xl rounded-2xl px-3 py-2 md:px-4 md:py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:bg-foreground/15 transition-colors">
                  <div className="absolute -bottom-2 md:-bottom-3 right-6 md:right-8 w-3 h-3 md:w-4 md:h-4 bg-foreground/10 border-b border-r border-foreground/15 rotate-45" />
                  <div className="text-[10px] md:text-xs uppercase tracking-wider text-foreground/70 mb-1">Robot says</div>
                  <motion.div 
                    key={messageIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-foreground text-xs md:text-sm leading-relaxed min-h-[20px] md:min-h-[24px]"
                  >
                    <span className="block">{robotMessages[messageIndex].main}</span>
                    <span className="block opacity-80">{robotMessages[messageIndex].sub}</span>
                    <span className="block opacity-60">{robotMessages[messageIndex].sub2}</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
