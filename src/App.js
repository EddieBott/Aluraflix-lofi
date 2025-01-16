import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import NuevoVideo from './pages/NuevoVideo';
import PlayerVideo from './pages/PlayerVideo';
import NotFound from "./pages/NotFound";

function App() {
  const [videos, setVideos] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/EddieBott/aluraflix-api/videos');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleAddVideo = (nuevoVideo) => {
    setVideos((prevVideos) => [...prevVideos, nuevoVideo]);
  };

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home videos={videos} />} />
          <Route path="/NuevoVideo" element={<NuevoVideo onAddVideo={handleAddVideo} />} />
          <Route path="/video/:id" element={<PlayerVideo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;