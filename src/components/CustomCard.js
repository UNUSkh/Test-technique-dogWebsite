// CustomCard.js
import React from 'react';

const CustomCard = ({ image }) => {
  const parts = image.split('/');
  return (
    <div className="card custom-card" style={{ backgroundColor: "rgba(255, 255, 255, 0)", borderRadius: "5px 5px 0px 0px" }}>
      <img
        src={image}
        className="card-img-top custom-img"
        alt="Breed" style={{borderRadius: "5px 5px 0px 0px" }}
      />
      <div className="card-body text-center" style={{ backgroundColor: "rgb(22, 22, 22)" }}>
            {<p className="card-text">{parts[4].replace("-", " ").toUpperCase()} Dog</p> }    
        
      </div>
    </div>
  );
};

export default CustomCard;
