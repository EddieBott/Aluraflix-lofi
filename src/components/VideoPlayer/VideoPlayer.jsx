import React from 'react';
import './VideoPlayer.css';

function VideoPlayer({ title, description, url }) {
  const videoId = url && url.includes('v=') ? url.split('v=')[1]?.split('&')[0] : null;

  if (!videoId) {
    return (
      <div className="video-player">
        <h1>{title}</h1>
        <p>El video no es válido o no se ha podido cargar.</p>
      </div>
    );
  }

  return (
    <div className="video-player">
      <h1>{title}</h1>
      <div className="video-container">
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <p>{description}</p>
    </div>
  );
}

export default VideoPlayer;