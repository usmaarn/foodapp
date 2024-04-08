import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import "./App.css";


function App() {

  const [foodData, setFoodData]:[[], Function] = useState([]);

  return (
    <div className="">
      <Search setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App
