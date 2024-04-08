/** @format */

import FoodItem from "./FoodItem";
import styles from "./foodlist.module.css";

interface FoodListProps {
  foodData: [];
  setFoodId: Function;
}

interface FoodProps {
  id?: number;
  title?: string;
  image?: string;
}

export default function FoodList({ foodData, setFoodId }: FoodListProps) {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>Foods</h3>
      <ul className={styles.foodlist}>
        {foodData.map((food: FoodProps) => (
          <FoodItem key={food.id} food={food} setFoodId={setFoodId} />
        ))}
      </ul>
    </div>
  );
}
