/** @format */

import { FC, useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "566b164fc2554a15b9ff68c7f3247095";

export default function Search({setFoodData}) {
  const [query, setQuery] = useState<string>("pizza");

  useEffect(() => {
    async function fetchFood(){
        const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await response.json();
        setFoodData(data.results)
    }

    fetchFood()
  }, [query])

  return (
    <form className="">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
