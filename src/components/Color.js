import React from "react";
import "../App.css";

export default function Color({ color, rateColor }) {
  return (
    <div className="card">
      <div
        className="card_header"
        style={{ backgroundColor: color.code }}
      ></div>
      <div className="card_body">
        <h3>{color.name}</h3>
        <p>
          Rating: <span>{color.rating}</span>
          <button onClick={() => rateColor(color.id)}>^</button>
        </p>
      </div>
    </div>
  );
}
