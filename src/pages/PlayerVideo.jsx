import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Agregar useNavigate
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';

function PlayerVideo() {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook para navegar entre rutas
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/EddieBott/aluraflix-api/videos/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo cargar el video.');
        }
        return response.json();
      })
      .then((data) => {
        setVideoData(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        navigate('/404'); // Redirigir a la página 404 si ocurre un error
      });
  }, [id, navigate]);

  if (loading) {
    return <p className="loading">Cargando video...</p>;
  }

  return (
    <div className='player-video-page'>
      {videoData && <VideoPlayer {...videoData} />}
    </div>
  );
}

export default PlayerVideo;