import React from "react";
import { Link } from "react-router-dom";

export default function LinkButton({ to, type }) {
  const getButtonClass = (type) => {
    let classname = "fa";
    if (type === "add") {
      return classname + " fa-plus";
    } else if (type === "back") {
      return classname + " fa-arrow-left";
    }
  };
  return (
    <Link to={to}>
      <button className="btn_add">
        <i className={getButtonClass(type)} aria-hidden="true"></i>
      </button>
    </Link>
  );
}
