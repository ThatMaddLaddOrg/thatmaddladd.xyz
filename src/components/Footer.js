import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem 1rem',
      color: '#999',
      fontSize: '0.9rem'
    }}>
      <p>&copy; {new Date().getFullYear()} ThatMaddLadd. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
