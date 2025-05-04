import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '1.5rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>ThatMaddLadd</h1>
      <p style={{ fontSize: '1.1rem', color: '#aaa' }}>
        Welcome to my world of streaming, tweeting, and coding.
      </p>
      <a href="https://twitch.tv/thatmaddladd" target="_blank" rel="noreferrer" className="cta-button">
        🔴 Watch Live on Twitch
      </a>
    </header>
  );
};

export default Header;