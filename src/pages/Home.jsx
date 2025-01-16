import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../components/Banner/Banner';
import Category from '../components/Category/Category';
import Card from '../components/Card/Card';
import Modal from '../components/Modal/Modal';

function Home() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState({});
  const [videos, setVideos] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const location = useLocation();

  const fetchVideos = () => {
    fetch('https://my-json-server.typicode.com/EddieBott/aluraflix-api/videos')
      .then((response) => response.json())
      .then((data) => setVideos(data))
      .catch((error) => console.error('Error al cargar los videos:', error));
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    if (location.state?.successMessage) {
      setSuccessMessage(location.state.successMessage);
      fetchVideos();
      window.history.replaceState({}, document.title);
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  }, [location.state]);

  const handleEdit = (card) => {
    setCurrentCard(card);
    setModalOpen(true);
  };

  const handleSave = (updatedCard) => {
    fetch(`https://my-json-server.typicode.com/EddieBott/aluraflix-api/videos/${updatedCard.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCard),
    })
      .then((response) => response.json())
      .then((data) => {
        setVideos((prev) =>
          prev.map((video) => (video.id === data.id ? data : video))
        );
        setModalOpen(false);
      })
      .catch((error) => console.error('Error al actualizar el video:', error));
  };

  const handleDelete = (cardId) => {
    fetch(`https://my-json-server.typicode.com/EddieBott/aluraflix-api/videos/${cardId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('No se pudo eliminar el video.');
        }
        setVideos((prev) => prev.filter((video) => video.id !== cardId));
      })
      .catch((error) => console.error('Error al eliminar el video:', error));
  };

  const categories = ["Estudio", "Relajación", "Sueño"];

  return (
    <div className='home-page'>
      <Banner />
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
      {categories.map((category) => (
        <Category key={category} title={category}>
          {videos
            .filter((video) => video.category === category)
            .map((video) => (
              <Card
                key={video.id}
                id={video.id}
                title={video.title}
                image={video.image}
                description={video.description}
                onEdit={() => handleEdit(video)}
                onDelete={() => handleDelete(video.id)}
                onView={() => console.log()}
              />
            ))}
        </Category>
      ))}

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        defaultValues={currentCard}
      />
    </div>
  );
}

export default Home;