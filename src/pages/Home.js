import React, { useEffect, useState } from 'react';
import '../index.css';  
import loadingImage from '../images/paw-print-pattern-aqua-pet_53876-294932.avif';

const Home = () => {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImage(data.message);
      } catch (error) {
        console.error('Failed to fetch dog image:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div className="text-center">
      <h1 className="banner-text">Bienvenue sur le site Barkopedia!</h1>
      <div className="d-flex justify-content-center mt-3">
        <div className="banner">
          <div className="banner-content">
            <h1 className="display-4">Découvrez les plus belles races de chiens !</h1>
          </div>
          <img
            src={loading ? loadingImage : dogImage}
            alt={loading ? "Chargement..." : "Chien aléatoire"}
            className="banner-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
