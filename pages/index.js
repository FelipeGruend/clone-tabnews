import React from 'react';

function HomePage() {
  return (
    <div className="home-container">
      <h1>Te amo, Babe ❤️!</h1>
      <p>Aperta o play ⬇️</p>
      <div>
      <iframe
        src="https://open.spotify.com/embed/track/1uhFZesEqwkIfhlyY9PFRP?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        autoplay="1"></iframe>
      </div>
    </div>
  );
}

export default HomePage;
