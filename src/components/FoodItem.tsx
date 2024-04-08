/** @format */

import styles from './fooditem.module.css';

interface FoodProps {
  food: {
    id?: number;
    title?: string;
    image?: string;
  };
}

export default function FoodItem({ food }: FoodProps) {
    
  return (
    <li className={styles.item}>
      <img className={styles.image} src={food.image} alt={food.title} />
      <div className={styles.content}>
        <p className={styles.itemName}>{food.title}</p>
        <button className={styles.btn}>View Recipe</button>
      </div>
    </li>
  );
}
