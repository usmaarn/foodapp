/** @format */

import { FC, useEffect, useState } from "react";
import styles from './search.module.css';


const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "566b164fc2554a15b9ff68c7f3247095";

interface Props{
  setFoodData: Function;
}

export default function Search({setFoodData}:Props) {
  const [query, setQuery] = useState<string>("pizza");

  useEffect(() => {
    async function fetchFood(){
        try{
          const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
          const data = await response.json();
          setFoodData(data.results ?? [])
        }
        catch(e){
          console.log(e);
        }

    }

    fetchFood()
  }, [query])

  return (
    <form className={styles.searchContainer}>
      <input className={styles.input}
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
