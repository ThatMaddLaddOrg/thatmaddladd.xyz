import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TwitchEmbed from '../components/TwitchEmbed';
import TwitterFeed from '../components/TwitterFeed';
import GitHubProjects from '../components/GitHubProjects';
import CurrentlyWorkingOn from '../components/CurrentlyWorkingOn';

const Home = () => {
  const sectionStyle = {
    margin: '2rem 0',
    padding: '2rem',
    borderRadius: '12px',
    backgroundColor: '#1b1b1b',
    boxShadow: '0 0 15px rgba(168, 85, 247, 0.2)'
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <Header />
      <section style={sectionStyle}>
        <TwitchEmbed />
      </section>
      <section style={sectionStyle}>
        <CurrentlyWorkingOn />
      </section>
      <section style={sectionStyle}>
        <TwitterFeed />
      </section>
      <section style={sectionStyle}>
        <GitHubProjects />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
