import React from 'react';
import './PlantCard.css';

const PlantCard = ({ name, benefits, image }) => {
  return (
    <div className="plant-card">
      <img src={`images/${image}`} alt={name} className="plant-image" />
      <h3>{name}</h3>
      <p>{benefits}</p>
    </div>
  );
};

export default PlantCard;
