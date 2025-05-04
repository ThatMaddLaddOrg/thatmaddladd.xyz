import React, { useEffect, useState } from 'react';
import AboutModal from './AboutModal';

const NUM_SPARKLES = 12;

const Header = () => {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes glowText {
        0%, 100% { text-shadow: 0 0 10px #a855f7, 0 0 20px #a855f7; }
        50% { text-shadow: 0 0 20px #9333ea, 0 0 40px #9333ea; }
      }

      @keyframes pulseCTA {
        0%, 100% { transform: scale(1); box-shadow: 0 0 10px #a855f7; }
        50% { transform: scale(1.05); box-shadow: 0 0 20px #a855f7; }
      }

      @keyframes shimmerBackground {
        0% { background-position: 0% 50%; }
        100% { background-position: 100% 50%; }
      }

      @keyframes sparkleFloat {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        50% { opacity: 0.6; }
        100% { transform: translateY(-100px) scale(1.2); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const generateSparkles = () => {
    return Array.from({ length: NUM_SPARKLES }).map((_, i) => {
      const size = Math.random() * 4 + 2;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 5 + Math.random() * 5;

      return (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: '100%',
            left: `${left}%`,
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: '1rem 1rem 0 0',
            backgroundColor: '#a855f7',
            opacity: 0,
            animation: `sparkleFloat ${duration}s ease-in-out ${delay}s infinite`,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />
      );
    });
  };

  return (
    <header
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '2rem 1.5rem',
        textAlign: 'center',
        background: 'linear-gradient(270deg, #1b1b1b, #2b1b2f, #1b1b1b)',
        backgroundSize: '600% 600%',
        animation: 'shimmerBackground 15s ease infinite',
        borderBottom: '2px solid #a855f7',
        borderRadius: '1rem 1rem 0 0',
      }}
    >
      {generateSparkles()}

      <h1
        onClick={() => setShowAbout(true)}
        style={{
          fontSize: '2.5rem',
          marginBottom: '0.5rem',
          color: '#fff',
          animation: 'glowText 2.5s infinite ease-in-out',
          zIndex: 1,
          position: 'relative',
          cursor: 'pointer',
        }}
        title="Click to learn more about me!"
      >
        <i className="fas fa-user" style={{ marginRight: '0.5rem', color: '#a855f7' }}></i>
        ThatMaddLadd
      </h1>

      <p style={{ fontSize: '1.1rem', color: '#ccc', position: 'relative', zIndex: 1 }}>
        Welcome to my world of streaming, tweeting, and coding.
      </p>

      <a
        href="https://twitch.tv/thatmaddladd"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-block',
          background: '#a855f7',
          color: '#fff',
          padding: '0.75rem 1.25rem',
          borderRadius: '8px',
          marginTop: '1rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          animation: 'pulseCTA 2.2s infinite',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <i className="fab fa-twitch" style={{ marginRight: '0.5rem' }}></i>
        Watch Live on Twitch
      </a>

      <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />
    </header>
  );
};

export default Header;
