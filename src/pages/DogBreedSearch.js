import React, { useState, useEffect, useCallback } from 'react';
import CustomCard from '../components/CustomCard';
import FadeLoader from "react-spinners/FadeLoader";
import imog from "C:/Users/Younes/Desktop/test-technique/dog-ceo-website/src/images/no-pets-allowed2.png";

function DogBreedSearch() {
  const [breed, setBreed] = useState('');
  const [breedslist, setBreedslist] = useState([]);
  const [breedImages, setBreedImages] = useState([]);
  const [isIn, setIsIn] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Recherche des races à partir de l'API
  const fetchBreeds = useCallback(async () => {
    try {
      const response = await fetch(`https://dog.ceo/api/breeds/list/all`);
      const data = await response.json();
      const breedsArray = [];

      Object.keys(data.message).forEach((breed) => {
        breedsArray.push(breed);
        data.message[breed].forEach((subBreed) => {
          breedsArray.push(`${breed} ${subBreed}`);
        });
      });

      setBreedslist(breedsArray);
    } catch (error) {
      console.error("Erreur lors du chargement des races:", error);
    }
  }, []);

  useEffect(() => {
    fetchBreeds(); // Appel initial pour charger la liste des races
  }, [fetchBreeds]);

  useEffect(() => {
    setBreedImages([]); // Reinitialise les images quand la race change
  }, [breed]);

  // Gestion de la recherche
  const handleSearch = async () => {
    setIsSearching(true);
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed.trim().replace(/ /g, "/").toLowerCase()}/images`);
      const data = await response.json();

      if (data.status !== "error") {
        setBreedImages(data.message);
      } else {
        setBreedImages([]);
      }
    } catch (error) {
      console.error("Erreur lors de la recherche d'images:", error);
    } finally {
      setTimeout(() => {
        setIsSearching(false);
      }, 1000);
    }
  };

  // mise à jour de l'etat de la race et verification si elle est valide
  const handleBreedChange = (value) => {
    setIsIn(breedslist.some(bred => bred.toLowerCase() === value.trim().toLowerCase()));
    setBreed(value);
  };

  return (
    <div>
      <h2 className="mb-4">Rechercher une race de chien</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={breed}
          onChange={(e) => handleBreedChange(e.target.value)}
          placeholder="Entrez le nom de la race"
          style={{ color: "rgb(240, 240, 240)" }}
        />
      </div>
      <button
        className="btn btn-primary mb-4"
        disabled={!isIn}
        onClick={handleSearch}
        style={{ backgroundColor: "rgb(22, 22, 22)", border: "solid 0.5px rgb(220, 220, 220)", borderRadius: "4px" }}
      >
        <i className="fa fa-paw" aria-hidden="true"></i>  Rechercher
      </button>

      {isSearching ? (
        <div className="loader-container">
          <FadeLoader color="white" loading={isSearching} aria-label="Loading Spinner" data-testid="loader" />
        </div>
      ) : (
        <div className="row">
          {breedImages.length > 0 && breedImages.slice(0, 6).map((image, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <CustomCard image={image} />
            </div>
          ))}
        </div>
      )}

      {!isIn && (
        <div className="text-center">
          <img src={imog} className="centered-image" alt="No Dog Found" />
          <p className="text-center no-dog-text">Aucun chien trouvé</p>
        </div>
      )}

      {!breedImages.length && isIn && (
        <div className="text-center">
          <p className="decorated-text">Cliquez sur le bouton pour rechercher votre chien</p>
        </div>
      )}
    </div>
  );
}

export default DogBreedSearch;
