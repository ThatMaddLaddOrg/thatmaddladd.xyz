import React from 'react';

const TwitchEmbed = () => {
  return (
    <>
      <h2><i className="fab fa-twitch" style={{ marginRight: '0.5rem', color: '#9146ff' }}></i>Twitch Stream</h2>
      <iframe
        src="https://player.twitch.tv/?channel=thatmaddladd&parent=thatmaddladd.xyz"
        height="480"
        width="100%"
        allowFullScreen
        title="Twitch Stream"
        style={{ border: 'none', borderRadius: '12px' }}
      ></iframe>
    </>
  );
};

export default TwitchEmbed;
