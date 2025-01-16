import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Banner.css';

function Banner() {
  const [randomVideo, setRandomVideo] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/videos')
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomVideo(data[randomIndex]);
      })
      .catch((error) => console.error('Error al cargar los videos:', error));
  }, []);

  if (!randomVideo) {
    return <p>Cargando video aleatorio...</p>;
  }

  const handleThumbnailClick = () => {
    navigate(`/video/${randomVideo.id}`);
  };

  return (
    <div className="banner">
      <div className="banner__content">
        <h1 className="banner__title">Relájate y desconecta con la mejor música Lofi</h1>
        <p className="banner__description">
          Música Lofi perfecta para estudiar, trabajar o relajarte. Crea tu ambiente ideal con suaves melodías.
        </p>

        <h1 className="banner__title2">{randomVideo.title}</h1>
        <p className="banner__description2">{randomVideo.description}</p>
      </div>
      <div className="banner__video-thumbnail" onClick={handleThumbnailClick}>
        <img src={randomVideo.image} alt={randomVideo.title} className="banner__video-img" />
      </div>
    </div>
  );
}

export default Banner;