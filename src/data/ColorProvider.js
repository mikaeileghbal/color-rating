import React, { createContext, useContext, useState } from "react";
import { getColors } from "./Data";

const initialData = getColors();
const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

export default function ColorProvider({ children }) {
  const [Colors, setColors] = useState(initialData);

  const addColor = (color) => {};

  const removeColor = (id) => {};

  const rateColor = (color, rating) => {};

  return (
    <ColorContext.Provider value={{ Colors, addColor, removeColor, rateColor }}>
      {children}
    </ColorContext.Provider>
  );
}
