import React from 'react';

const Header = () => {
  return (
    <header style={{ padding: '1.5rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>
        <i className="fas fa-user" style={{ marginRight: '0.5rem', color: '#a855f7' }}></i>
        ThatMaddLadd
      </h1>
      <p style={{ fontSize: '1.1rem', color: '#aaa' }}>
        Welcome to my world of streaming, tweeting, and coding.
      </p>
      <a href="https://twitch.tv/thatmaddladd" target="_blank" rel="noreferrer" style={{
        display: 'inline-block',
        background: '#a855f7',
        color: '#fff',
        padding: '0.75rem 1.25rem',
        borderRadius: '8px',
        marginTop: '1rem',
        fontWeight: 'bold',
        textDecoration: 'none'
      }}>
        <i className="fab fa-twitch" style={{ marginRight: '0.5rem' }}></i>
        Watch Live on Twitch
      </a>
    </header>
  );
};

export default Header;
