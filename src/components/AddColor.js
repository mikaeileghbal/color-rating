import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useColors } from "../data/ColorProvider";
import LinkButton from "./LinkButton";

export default function AddColor() {
  const [fields, setFields] = useState({ name: "white", color: "#FFFFFF" });
  const { addColor } = useColors();
  const navigate = useNavigate();

  const onInputChange = (e) => {
    const newFields = Object.assign({}, fields);
    newFields[e.target.name] = e.target.value;
    setFields(newFields);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    addColor(fields.name, fields.color);
    navigate("/");
  };

  return (
    <main>
      <h2>Add New Color</h2>
      <LinkButton to="/" type="back" />
      <form onSubmit={onFormSubmit}>
        <p>
          <label>name</label>
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={onInputChange}
          />
        </p>
        <p>
          <label>color</label>
          <input
            type="color"
            name="color"
            value={fields.color}
            onChange={onInputChange}
          />
        </p>
        <p>
          <button type="submit">add color</button>
        </p>
      </form>
    </main>
  );
}
