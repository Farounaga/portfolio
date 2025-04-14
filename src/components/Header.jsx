// src/Header.jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Header = () => {
  const containerRef = useRef(null);
  const symbols = ['0', '1'];
  const gridSize = { cols: 100, rows: 2 };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create grid
    container.style.setProperty('--cols', gridSize.cols);
    for (let i = 0; i < gridSize.cols * gridSize.rows; i++) {
      const div = document.createElement('div');
      div.className = 'symbol';
      div.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      container.appendChild(div);
    }

    // Animate symbols
    const animate = () => {
      container.querySelectorAll('.symbol').forEach((el) => {
        if (Math.random() > 0.8) {
          gsap.to(el, {
            opacity: Math.random(),
            color: `hsl(${Math.random() * 60 + 160}, 100%, 70%)`,
            duration: 1,
            onComplete: () => {
              el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            },
          });
        }
      });
    };

    const interval = setInterval(animate, 1000);

    return () => {
      clearInterval(interval);
      gsap.killTweensOf(container);
    };
  }, []);

  return (
    <>
      <style>
        {`
          body {
            margin: 0;
            background: #000;
          }
          .grid {
            display: grid;
            grid-template-columns: repeat(var(--cols), 12px);
            grid-auto-rows: 16px;
            height: 100vh;
            background: #000;
            overflow: hidden;
          }
          .symbol {
            color: #0f0;
            font-family: 'Courier New', monospace;
            font-size: 10px;
            text-shadow: 0 0 5px #0f0;
          }
        `}
      </style>
      <div ref={containerRef} className="grid" />
    </>
  );
};

export default Header;