import { useState } from "react";

export function useFood(initialFood = "Steak") {
  const [food, setFood] = useState(initialFood);

  const changeFood = (newFood) => {
    setFood(newFood);
  };

  return { food, changeFood };
}
