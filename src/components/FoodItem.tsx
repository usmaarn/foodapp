/** @format */

interface FoodProps {
  food: {
    id?: number;
    title?: string;
    image?: string;
  };
}

export default function FoodItem({ food }: FoodProps) {
    
  return <li>
    <img src={food.image} alt={food.title} />
    <h3>{food.title}</h3>
    <button>View Recipe</button>
  </li>;
}
