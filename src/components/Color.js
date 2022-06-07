import React from "react";
import "../App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useColors } from "../data/ColorProvider";

export default function Color({ color }) {
  const { rateColor, removeColor } = useColors();

  return (
    <div className="card">
      <button onClick={() => removeColor(color.id)}>
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
      <div
        className="card_header"
        style={{ backgroundColor: color.code }}
      ></div>
      <div className="card_body">
        <h3>{color.name}</h3>
        <p>
          Rating:
          <button onClick={() => rateColor(color.id)}>
            <i className="fa fa-caret-up"></i>
          </button>
          <span>{Number(color.rating)}</span>
        </p>
      </div>
    </div>
  );
}
