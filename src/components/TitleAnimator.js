import { useEffect } from 'react';

const TitleAnimator = () => {
  useEffect(() => {
    const titles = [
      'ThatMaddLadd 💜',
      'Streaming Live 🎮',
      'Building Stuff 🔧',
      'Tweeting Chaos 🐦',
      'Roleplaying 🌐',
    ];
    let index = 0;
    const interval = setInterval(() => {
      document.title = titles[index];
      index = (index + 1) % titles.length;
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return null;
};

export default TitleAnimator;