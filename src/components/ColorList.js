import React from "react";
import { useColors } from "../data/ColorProvider";
import Color from "./Color";

export default function ColorList() {
  const { Colors } = useColors();

  const newColors = Colors.sort(
    (color1, color2) => Number(color2.rating) - Number(color1.rating)
  );

  return (
    <div className="container">
      {newColors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </div>
  );
}
