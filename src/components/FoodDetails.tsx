/** @format */

import { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";

interface Props {
  foodId: number | null;
}

export default function FoodDetails({ foodId }: Props) {
  
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "566b164fc2554a15b9ff68c7f3247095";

  const [foodDetails, setFoodDetails] = useState({});

  useEffect(() => {
    async function fetchFood(){
        const response = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await response.json()
        console.log(data);
    }
  })

  return (
    <div className={styles.details}>
      <h3>Food Details</h3>
      <p>{foodId} </p>
    </div>
  );
}
