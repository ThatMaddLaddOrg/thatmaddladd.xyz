import React from 'react';

const TwitchEmbed = () => {
  return (
    <>
      <h2>Twitch Stream</h2>
      <iframe
        src="https://player.twitch.tv/?channel=thatmaddladd&parent=thatmaddladd.xyz"
        height="480"
        width="100%"
        allowFullScreen
        title="Twitch Stream"
      ></iframe>
    </>
  );
};

export default TwitchEmbed;
