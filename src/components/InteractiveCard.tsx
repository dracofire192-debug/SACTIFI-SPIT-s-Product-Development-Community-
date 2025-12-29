import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ReactNode, MouseEvent, useState } from 'react';

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
}

export const InteractiveCard = ({ children, className = '' }: InteractiveCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
    setMousePos({ x: (mouseX / width) * 100, y: (mouseY / height) * 100 });
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Metallic VIBGYOR border container */}
      <div className="relative rounded-2xl p-[1px] overflow-hidden">
        {/* Animated VIBGYOR conic gradient border that rotates continuously on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `conic-gradient(from var(--gradient-angle, 0deg), 
              #ff0000 0deg, 
              #ff4500 25deg,
              #ff8c00 50deg,
              #ffd700 75deg,
              #ffff00 90deg,
              #9acd32 115deg,
              #00ff00 140deg,
              #00ced1 165deg,
              #1e90ff 190deg,
              #4169e1 215deg,
              #8a2be2 240deg,
              #9400d3 265deg,
              #ff1493 290deg,
              #ff69b4 315deg,
              #ff0000 360deg
            )`,
            opacity: isHovered ? 1 : 0,
          }}
          animate={{
            '--gradient-angle': isHovered ? ['0deg', '360deg'] : '0deg',
          } as any}
          transition={{
            '--gradient-angle': {
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            },
          } as any}
        />

      {/* Cursor-focused highlight - activates and intensifies the color at mouse position */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: isHovered 
              ? `radial-gradient(200px circle at ${mousePos.x}% ${mousePos.y}%, 
                  rgba(255, 255, 255, 0.95) 0%,
                  rgba(255, 255, 255, 0.5) 30%,
                  transparent 60%
                )`
              : 'transparent',
            mixBlendMode: 'overlay',
          }}
        />
        
        {/* Static subtle rainbow gradient visible when not hovered */}
        <div 
          className="absolute inset-0 rounded-2xl transition-opacity duration-500"
          style={{
            background: `conic-gradient(from 45deg at 50% 50%, 
              rgba(139, 92, 246, 0.3) 0deg,
              rgba(236, 72, 153, 0.2) 60deg,
              rgba(34, 211, 238, 0.3) 120deg,
              rgba(74, 222, 128, 0.2) 180deg,
              rgba(250, 204, 21, 0.3) 240deg,
              rgba(251, 146, 60, 0.2) 300deg,
              rgba(139, 92, 246, 0.3) 360deg
            )`,
            opacity: isHovered ? 0 : 0.5,
          }}
        />

        {/* Inner card background to create border effect */}
        <div className="relative rounded-2xl bg-card overflow-hidden">
          {children}
          
          {/* Corner accent glows - purple */}
          <motion.div
            className="pointer-events-none absolute -top-20 -left-20 w-40 h-40 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
            }}
            animate={{
              opacity: isHovered ? [0.5, 0.8, 0.5] : 0.2,
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          {/* Corner accent glows - cyan */}
          <motion.div
            className="pointer-events-none absolute -bottom-20 -right-20 w-40 h-40 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(34, 211, 238, 0.4) 0%, transparent 70%)',
            }}
            animate={{
              opacity: isHovered ? [0.5, 0.8, 0.5] : 0.2,
              scale: isHovered ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />

          {/* Corner accent glows - green */}
          <motion.div
            className="pointer-events-none absolute -top-20 -right-20 w-40 h-40 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(74, 222, 128, 0.3) 0%, transparent 70%)',
            }}
            animate={{
              opacity: isHovered ? [0.3, 0.6, 0.3] : 0.1,
              scale: isHovered ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.25,
            }}
          />

          {/* Corner accent glows - orange */}
          <motion.div
            className="pointer-events-none absolute -bottom-20 -left-20 w-40 h-40 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(251, 146, 60, 0.3) 0%, transparent 70%)',
            }}
            animate={{
              opacity: isHovered ? [0.3, 0.6, 0.3] : 0.1,
              scale: isHovered ? [1, 1.1, 1] : 1,
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.75,
            }}
          />

          {/* Metallic glare effect that tracks cursor for a polished look */}
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl transition-opacity duration-300"
            style={{
              background: `radial-gradient(200px circle at ${mousePos.x}% ${mousePos.y}%, 
                rgba(255, 255, 255, 0.1) 0%,
                rgba(255, 255, 255, 0.03) 30%,
                transparent 50%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};
