import React, {useState} from "react";

function NewPlantForm({onAddPlant}) {
  const[plantData, setPlantData] = useState({
    name:"",
    image:"",
    price:0
  });

  function handleSubmit(e){
    e.preventDefault();

    fetch("http://localhost:6001/plants", {
      method:"POST",
      headers:{
        "Content-Type":"Application/JSON"
      },
      body:JSON.stringify(plantData)
    })
    .then((r) => r.json())
    .then((newPlant) => {onAddPlant(newPlant);
      setPlantData({name:"", image:"", price:0})
    });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" 
        value={plantData.name}
        onChange={(e) => setPlantData({...plantData, name: e.target.value})} />
        <input type="text" name="image" placeholder="Image URL"
        value={plantData.image}
        onChange={(e) => setPlantData({...plantData, image: e.target.value})} />
        <input type="number" name="price" step="0.01" placeholder="Price" 
        value={plantData.price}
        onChange={(e) => setPlantData({...plantData, price:e.target.value})}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
