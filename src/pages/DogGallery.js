import React, { useEffect, useState } from 'react';
import CustomCard from '../components/CustomCard';
import FadeLoader from 'react-spinners/FadeLoader';

function DogGallery() {
  const [dogImages, setDogImages] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const fetchDogImages = async () => {
      try {
        setIsSearching(true);

        const response = await fetch('https://dog.ceo/api/breeds/image/random/6');
        const data = await response.json();
        setDogImages(data.message);
      } catch (error) {
        console.error('Failed to fetch dog images', error);
      } finally {
        setTimeout(() => setIsSearching(false), 1000);
      }
    };

    fetchDogImages();

    return () => {
      setIsSearching(false);
    };
  }, []);

  return (
    <div className="container">
      <h2 className="gallery-title text-center">Dog Gallery</h2>
      {isSearching ? (
        <div className="loader-container">
          <FadeLoader color="white" loading={isSearching} aria-label="Loading Spinner" />
        </div>
      ) : (
        <div className="row">
          {dogImages.map((image, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-5" key={index}>
              <CustomCard image={image} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DogGallery;
