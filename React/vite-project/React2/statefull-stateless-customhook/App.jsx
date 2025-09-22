import React, { useState } from "react";
import { Child } from "./Child";
import { useFood } from "./hooks/useFood";

export default function App() {
  const { food, changeFood } = useFood();

  return <Child food={food} onChange={changeFood} />;
}
