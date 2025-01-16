import React from 'react';
import { useNavigate } from 'react-router-dom';
import NuevoVideoForm from '../components/ModalNuevoVideo/NuevoVideoForm';

function NuevoVideo() {
  const navigate = useNavigate();

  const handleSave = (nuevoVideo) => {
    fetch('https://my-json-server.typicode.com/EddieBott/aluraflix-api/videos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...nuevoVideo,
        id: Date.now().toString(),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al agregar el video');
        }
        return response.json();
      })
      .then(() => {
        navigate('/', { state: { successMessage: '¡Video agregado con éxito!' } });
      })
      .catch((error) => console.error('Error al agregar el video:', error));
  };

  return (
    <div className="nuevo-video-page">
      <NuevoVideoForm onSave={handleSave} />
    </div>
  );
}

export default NuevoVideo;