import { useState, useRef, useEffect } from 'react';
import { FaUpload } from 'react-icons/fa';
import Controls from '../molecules/Controls';
import canciones from '../../data/data'; 
import './Music.css';

function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusicaIndex, setCurrentMusicaIndex] = useState(0);
  const [customSongs, setCustomSongs] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentMusicaIndex, isPlaying, customSongs]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('ended', handleNext);
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', handleNext);
      }
    };
  }, [audioRef.current]);

  const handlePlay = () => {
    setIsPlaying(true);
    audioRef.current.play();
  };

  const handlePause = () => {
    setIsPlaying(false);
    audioRef.current.pause();
  };

  const handleNext = () => {
    setCurrentMusicaIndex((prevIndex) => (prevIndex + 1) % getSongs().length);
  };

  const handlePrevious = () => {
    setCurrentMusicaIndex((prevIndex) => 
      prevIndex === 0 ? getSongs().length - 1 : prevIndex - 1
    );
  };

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const newSongs = Array.from(files).map((file) => ({
      title: file.name,
      src: URL.createObjectURL(file),
      cover: './images/default.jpg', 
    }));
    setCustomSongs([...customSongs, ...newSongs]);
    setIsMenuOpen(false);
  };

  const getSongs = () => {
    return [...canciones, ...customSongs];
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id='music-player'>
      <div id='album-cover'>
        <img src={getSongs()[currentMusicaIndex].cover || './images/default.jpg'} alt={getSongs()[currentMusicaIndex].title} />
      </div>
      <div id='track-info'>
        <h3>{getSongs()[currentMusicaIndex].title}</h3>
      </div>
      <audio ref={audioRef} src={getSongs()[currentMusicaIndex].src} controls />
      <Controls 
        isPlaying={isPlaying}
        onPlay={handlePlay}
        onPause={handlePause}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
      <div id="menu-container">
        <button id="menu-button" onClick={toggleMenu}>
          <FaUpload /> {/* Icono de carga */}
        </button>
        {isMenuOpen && (
          <div id="menu">
            <label htmlFor="file-upload">Cargar música</label>
            <input type="file" id="file-upload" accept="audio/*" multiple onChange={handleFileUpload} style={{ display: 'none' }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Music;
