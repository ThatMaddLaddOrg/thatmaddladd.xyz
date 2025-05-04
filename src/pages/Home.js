import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TwitchEmbed from '../components/TwitchEmbed';
import TwitterFeed from '../components/TwitterFeed';
import GitHubProjects from '../components/GitHubProjects';

const Home = () => {
  return (
    <div className="container">
      <Header />
      <section className="showcase twitch">
        <TwitchEmbed />
      </section>
      <section className="showcase twitter">
        <TwitterFeed />
      </section>
      <section className="showcase github">
        <GitHubProjects />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
