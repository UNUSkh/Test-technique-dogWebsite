import React from 'react';
import loadingImage from '../images/paw-print-pattern-aqua-pet_53876-294932.avif';

const CustomCard = ({ image = loadingImage }) => {
  const breedName = image.split('/')[4]?.replace("-", " ").toUpperCase() || "UNKNOWN";

  const cardStyles = {
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderRadius: "5px 5px 0px 0px"
  };

  const imgStyles = {
    borderRadius: "5px 5px 0px 0px"
  };

  const bodyStyles = {
    backgroundColor: "rgb(22, 22, 22)"
  };

  return (
    <div className="card custom-card" style={cardStyles}>
      <img
        src={image}
        className="card-img-top custom-img"
        alt={`${breedName} Dog`}
        style={imgStyles}
      />
      <div className="card-body text-center" style={bodyStyles}>
        <p className="card-text">{breedName} Dog</p>    
      </div>
    </div>
  );
};

export default CustomCard;
