/** @format */

import FoodItem from "./FoodItem";
import styles from './foodlist.module.css';


interface FoodListProps {
  foodData: [];
}

interface FoodProps {
  id?: number;
  title?: string;
  image?: string;
}

export default function FoodList({ foodData }: FoodListProps) {
  return (
    <ul className={styles.foodlist}>
      {foodData.map((food: FoodProps) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </ul>
  );
}
