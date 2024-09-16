import React, { useEffect, useState } from 'react';
import CustomCard from '../components/CustomCard';

function DogGallery() {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/6') // Fetch 6 random dog images
      .then(response => response.json())
      .then(data => setDogImages(data.message));
  }, []);

  return (
    <div className="container ">
      <h2 className="gallery-title text-center">Dog Gallery</h2>
      <div className="row">
        {dogImages.map((image, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5 " key={index}>
             <CustomCard image={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogGallery;
