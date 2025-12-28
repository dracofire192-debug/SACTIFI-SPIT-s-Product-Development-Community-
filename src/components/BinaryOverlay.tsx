import { useEffect, useState } from 'react';

export const BinaryOverlay = () => {
  const [columns, setColumns] = useState<string[]>([]);

  useEffect(() => {
    const generateBinaryColumn = () => {
      const length = Math.floor(Math.random() * 20) + 10;
      return Array.from({ length }, () => Math.random() > 0.5 ? '1' : '0').join('');
    };

    const numColumns = Math.floor(window.innerWidth / 40);
    const newColumns = Array.from({ length: numColumns }, generateBinaryColumn);
    setColumns(newColumns);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
      <div className="flex justify-between h-full">
        {columns.map((binary, index) => (
          <div
            key={index}
            className="font-mono text-xs text-primary whitespace-nowrap"
            style={{
              animation: `binary-flow ${10 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {binary.split('').map((char, charIndex) => (
              <div key={charIndex} className="leading-relaxed">
                {char}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
