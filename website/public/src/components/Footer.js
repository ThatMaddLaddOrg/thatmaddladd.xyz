import React, { useEffect } from 'react';

const Footer = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes footerGlow {
        0%, 100% { text-shadow: 0 0 6px #a855f7; }
        50% { text-shadow: 0 0 12px #a855f7, 0 0 20px #7e22ce; }
      }

      @keyframes sparkleFooter {
        0% { transform: scale(1); opacity: 1; }
        50% { opacity: 0.5; transform: scale(1.2); }
        100% { transform: scale(1); opacity: 1; }
      }

      @keyframes sparkleLink {
        0%, 100% { transform: scale(1); box-shadow: 0 0 6px #a855f7; }
        50% { transform: scale(1.1); box-shadow: 0 0 12px #9333ea; }
      }
    `;
    document.head.appendChild(style);
  }, []);

  const sparkleStyle = {
    position: 'absolute',
    width: '8px',
    height: '8px',
    backgroundColor: '#a855f7',
    borderRadius: '50%',
    opacity: 0.8,
    animation: 'sparkleFooter 3s ease-in-out infinite',
    pointerEvents: 'none',
  };

  const sparkles = Array.from({ length: 10 }).map((_, i) => {
    const left = Math.random() * 100;
    const top = Math.random() * 100;
    const delay = Math.random() * 3;

    return (
      <div
        key={i}
        style={{
          ...sparkleStyle,
          left: `${left}%`,
          top: `${top}%`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  return (
    <footer
      style={{
        position: 'relative',
        textAlign: 'center',
        padding: '2rem 1rem',
        color: '#999',
        fontSize: '0.9rem',
        animation: 'footerGlow 4s ease-in-out infinite',
        borderTop: '2px solid #a855f7',
        backgroundColor: '#1a1a1a',
        borderRadius: '0 0 1rem 1rem',
        overflow: 'hidden',
      }}
    >
      {sparkles}
      <p style={{ marginBottom: '0.5rem' }}>
        &copy; {new Date().getFullYear()} ThatMaddLadd. All rights reserved.
      </p>
      <a
        href="https://ko-fi.com/tg_richy"
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#a855f7',
          fontWeight: 'bold',
          textDecoration: 'none',
          animation: 'sparkleLink 2.4s infinite ease-in-out',
          padding: '0.5rem 1rem',
          borderRadius: '6px',
          border: '1px solid #a855f7',
          backgroundColor: '#141414',
          zIndex: 1,
          position: 'relative',
        }}
      >
        <i className="fas fa-coffee"></i> Support Me on Ko-fi
      </a>
    </footer>
  );
};

export default Footer;
