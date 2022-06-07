import React, { createContext, useContext, useState } from "react";
import { v4 } from "uuid";
import { getColors } from "./Data";

const initialData = getColors();
const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [Colors, setColors] = useState(initialData);

  const addColor = (name, code) => {
    const newColor = { name, code, id: v4(), rating: 0 };
    const newColors = [...Colors, newColor];
    setColors(newColors);
  };

  const removeColor = (id) => {
    const newColors = Colors.filter((color) => color.id !== id);
    setColors(newColors);
  };

  const rateColor = (id) => {
    const newColors = Colors.map((color) => {
      if (color.id === id) return { ...color, rating: color.rating + 1 };
      else return color;
    });
    setColors(newColors);
  };

  return (
    <ColorContext.Provider value={{ Colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
}
