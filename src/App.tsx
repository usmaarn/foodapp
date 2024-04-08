import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import "./App.css";
import Navbar from "./components/Navbar";


function App() {

  const [foodData, setFoodData]:[[], Function] = useState([]);

  return (
    <div className="">
      <Navbar />
      <Search setFoodData={setFoodData} />
      <FoodList foodData={foodData} />
    </div>
  );
}

export default App
