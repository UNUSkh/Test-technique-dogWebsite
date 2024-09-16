import React, { useEffect, useState } from 'react';
import '../index.css';  // Import your custom styles

function Home() {
  const [dogImage, setDogImage] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random') // Fetch a random dog image
      .then(response => response.json())
      .then(data => setDogImage(data.message));
  }, []);

  return (<div className="text-center">
    <h1 className="banner-text">Welcome to the Dog CEO Website!</h1>
    <div className="d-flex justify-content-center mt-3">
    <div className="banner">
      <div className="banner-content">
        <h1 className="display-4">Découvrez les plus belles races de chiens !</h1>
        {/* <p className="banner-subtext">Découvrez les plus belles races de chiens !</p> */}
      </div>
      {/* Image aléatoire affichée en bannière */}
      {dogImage && (
        <img src={dogImage} alt="Random Dog" className="banner-image" />
      )}
    </div>
    </div></div>
  );
}

export default Home;
