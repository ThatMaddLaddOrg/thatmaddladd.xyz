import React, { useEffect } from 'react';

const ParallaxBackground = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes floatOrb {
        0% { transform: translateY(0px) translateX(0px); }
        50% { transform: translateY(-20px) translateX(10px); }
        100% { transform: translateY(0px) translateX(0px); }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const orbStyle = (top, left, size, color, delay) => ({
    position: 'fixed',
    top: `${top}%`,
    left: `${left}%`,
    width: size,
    height: size,
    borderRadius: '50%',
    background: color,
    filter: 'blur(60px)',
    opacity: 0.1,
    pointerEvents: 'none',
    animation: `floatOrb 12s ease-in-out ${delay}s infinite`,
    zIndex: 0,
  });

  return (
    <>
      <div style={orbStyle(20, 10, '300px', '#a855f7', 0)} />
      <div style={orbStyle(50, 70, '250px', '#9333ea', 4)} />
      <div style={orbStyle(80, 30, '200px', '#7e22ce', 2)} />
    </>
  );
};

export default ParallaxBackground;
