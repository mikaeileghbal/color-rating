import React, { useEffect } from "react";
import { useColors } from "../data/ColorProvider";
import Color from "./Color";

export default function ColorList() {
  const { Colors, rateColor } = useColors();

  return (
    <div className="container">
      {Colors.map((color) => (
        <Color key={color.id} color={color} rateColor={rateColor} />
      ))}
    </div>
  );
}
