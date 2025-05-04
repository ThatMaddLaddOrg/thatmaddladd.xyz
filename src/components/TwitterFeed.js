import React, { useEffect, useRef } from 'react';

const TwitterFeed = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Clean existing widgets if present
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
      <h2>Latest from X (Twitter)</h2>
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