import { useEffect } from 'react';

const CursorTrail = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes trailFade {
        0% {
          opacity: 1;
          transform: scale(1);
        }
        100% {
          opacity: 0;
          transform: scale(0.5);
        }
      }
    `;
    document.head.appendChild(style);

    const handleMouseMove = (e) => {
      const dot = document.createElement('div');
      dot.style.position = 'fixed';
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      dot.style.width = '8px';
      dot.style.height = '8px';
      dot.style.borderRadius = '50%';
      dot.style.background = '#a855f7';
      dot.style.pointerEvents = 'none';
      dot.style.zIndex = 9999;
      dot.style.boxShadow = '0 0 8px #a855f7';
      dot.style.animation = 'trailFade 0.8s ease-out forwards';

      document.body.appendChild(dot);

      setTimeout(() => {
        dot.remove();
      }, 800);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null;
};

export default CursorTrail;