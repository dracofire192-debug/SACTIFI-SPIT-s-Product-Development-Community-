import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const GlowingCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-[60] w-[400px] h-[400px] rounded-full opacity-30"
      style={{
        background: 'radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)',
        left: mousePosition.x - 200,
        top: mousePosition.y - 200,
      }}
      animate={{
        opacity: isVisible ? 0.3 : 0,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{ duration: 0.2 }}
    />
  );
};
