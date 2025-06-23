import React from "react";

function PlantCard({id, name, image, price, onClick, isOutOfStock}) {
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {!isOutOfStock ? (
        <button className="primary" onClick={() => onClick(id)}>In Stock</button>
      ) : (
        <button onClick={() => onClick(id)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
