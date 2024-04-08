import { useEffect, useState } from "react";
import Search from "./components/Search";
import "./App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import FoodList from "./components/FoodList";
import FoodDetails from "./components/FoodDetails";

interface FoodListItem{
  id: number;
  image: string;
  name: string;
}


function App() {

  const [foodData, setFoodData]:[[FoodListItem?], Function] = useState([]);
  const [foodId, setFoodId]: [number|null, Function] = useState(null);

  useEffect(() => {
    let firstFoodId:number|null = foodData[0]?.id ?? null;
    setFoodId(firstFoodId)
  }, [foodData])

  return (
    <div className="">
      <Navbar />
      <Search setFoodData={setFoodData} />
      <Container>
        <FoodList foodData={foodData} setFoodId={setFoodId} />
        <FoodDetails foodId={foodId} />
      </Container>
    </div>
  );
}

export default App
