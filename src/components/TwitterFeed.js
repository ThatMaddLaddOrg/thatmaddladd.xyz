import React, { useEffect, useRef } from 'react';

const TwitterFeed = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load(containerRef.current);
    } else {
      const script = document.createElement('script');
      script.src = 'https://platform.twitter.com/widgets.js';
      script.async = true;
      script.onload = () => {
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load(containerRef.current);
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div>
      <h2><i className="fab fa-x-twitter" style={{ marginRight: '0.5rem', color: '#1da1f2' }}></i>Latest from X (Twitter)</h2>
      <div ref={containerRef}>
        <a
          className="twitter-timeline"
          data-theme="dark"
          data-height="600"
          href="https://twitter.com/thatmaddladd"
        >
          Tweets by @thatmaddladd
        </a>
      </div>
    </div>
  );
};

export default TwitterFeed;
