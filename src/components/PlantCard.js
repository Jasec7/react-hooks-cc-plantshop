import React, {useState} from "react";

function PlantCard({id, name, image, price, onClick, isOutOfStock, onPriceUpdate, onDelete}) {
  const [newPrice, setNewPrice] = useState("")
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <input
       type="number"
       value={newPrice}
       onChange={(e) => setNewPrice(e.target.value)}
       placeholder="Enter new price"
      />
      <button onClick={() => {onPriceUpdate(id, newPrice); setNewPrice("")}}>Update Price</button>
      {!isOutOfStock ? (
        <button className="primary" onClick={() => onClick(id)}>In Stock</button>
      ) : (
        <button onClick={() => onClick(id)}>Out of Stock</button>
      )}
      <button onClick={() => onDelete(id)} className="delete-button">Delete</button>
    </li>
  );
}

export default PlantCard;
