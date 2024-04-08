/** @format */

import styles from './fooditem.module.css';

interface FoodProps {
  setFoodId: Function,
  food: {
    id?: number;
    title?: string;
    image?: string;
  };
}

export default function FoodItem({ food, setFoodId }: FoodProps) {
  
  function handleClick(){
    setFoodId(food.id)
  }

  return (
    <li className={styles.item}>
      <img className={styles.image} src={food.image} alt={food.title} />
      <div className={styles.content}>
        <p className={styles.itemName}>{food.title}</p>
        <button onClick={handleClick} className={styles.btn}>View Recipe</button>
      </div>
    </li>
  );
}
