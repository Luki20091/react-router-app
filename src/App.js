import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_KEY = '50647637-950dc4fd43247efaedb5068b0'; //it can be public, I don't use it for anything sensitive
const categories = ['nature', 'animals', 'technology'];

export default function App() {
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('nature');
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get(
          `https://pixabay.com/api/?key=${API_KEY}&q=${selectedCategory}&image_type=photo&per_page=9`
        );
        setImages(res.data.hits);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, [selectedCategory]);

  return (
    <div className="app-container">
      <h1>Galeria zdjęć</h1>

      <div className="buttons-container">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {images.map((image) => (
          <img
            key={image.id}
            src={image.previewURL}
            alt={image.tags}
            className="thumbnail"
            onClick={() => setModalImage(image.largeImageURL)}
          />
        ))}
      </div>

      {modalImage && (
        <div className="modal-overlay" onClick={() => setModalImage(null)}>
          <img src={modalImage} alt="Large view" className="modal-image" />
        </div>
      )}
    </div>
  );
}
