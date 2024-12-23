// src/components/Carousel.jsx
import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const images = [
    '/images/photo1.jpg', // Remplace par tes liens d'images
    '/images/photo2.jpg',
    '/images/photo3.jpg',
    '/images/photo4.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Défiler toutes les 3 secondes

    return () => clearInterval(intervalId); // Nettoyer l'intervalle au démontage du composant
  }, []);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carrousel ${index}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>

      {/* Navigation (optionnel) */}
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#8249;
      </button>
      <button
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;

