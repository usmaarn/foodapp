/** @format */

import FoodItem from "./FoodItem";

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
    <ul>
      {foodData.map((food: FoodProps) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </ul>
  );
}
