import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TwitchEmbed from '../components/TwitchEmbed';
import CurrentlyWorkingOn from '../components/CurrentlyWorkingOn';
import PageWrapper from '../components/PageWrapper';

const sectionStyle = {
  margin: '2rem 0',
  padding: '2rem',
  borderRadius: '12px',
  backgroundColor: '#1b1b1b',
  boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)',
  animation: 'pulseGlow 3s ease-in-out infinite',
};

const Home = () => {
  return (
    <PageWrapper>
      <div style={{ maxWidth: '1500px', margin: '0 auto', padding: '2rem' }}>
        <Header />
        <section style={sectionStyle}><TwitchEmbed /></section>
        <section style={sectionStyle}><CurrentlyWorkingOn /></section>
        <Footer />
      </div>
    </PageWrapper>
  );
};

export default Home;