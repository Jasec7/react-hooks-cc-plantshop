import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onClickSold, isSoldOut, onPriceUpdate, onDelete}) {
  return (
    <ul className="cards">{plants.map((plant) => (
    <PlantCard 
    key={plant.id} 
    id={plant.id} 
    name={plant.name} 
    image={plant.image} 
    price={plant.price}
    onClick={onClickSold}
    isOutOfStock={isSoldOut.includes(plant.id)}
    onPriceUpdate={onPriceUpdate}
    onDelete={onDelete}
  />
))}
</ul>
  );
}

export default PlantList;
