import React from "react";

export default function Color({ color }) {
  return (
    <div>
      <div>{color.code}</div>
      <h3>{color.name}</h3>
    </div>
  );
}
