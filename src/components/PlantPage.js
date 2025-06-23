import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [isSoldOut, setIsSoldOut] = useState([]);
  const [searchPlant, setSearchPlant] = useState("")

  function handleSold(id) {
    setIsSoldOut((prev) =>
    prev.includes(id)
      ? prev.filter((plantId) => plantId !== id) 
      : [...prev, id] 
  );
};
function handleSearch(e){
  setSearchPlant(e.target.value)
};

const filterPlants = plants.filter((plant) => {
  return plant.name.toLowerCase().includes(searchPlant.toLowerCase())
})

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((r) => r.json())
    .then((plants) => setPlants(plants))
  },[]);

  function handleAddPlant(newPlant){
    setPlants([...plants, newPlant])
  };

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={handleSearch}/>
      <PlantList plants={filterPlants} onClickSold={handleSold} isSoldOut={isSoldOut}/>
    </main>
  );
}

export default PlantPage;
