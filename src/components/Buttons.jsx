import React from "react";

const Buttons = (props) => {
  return (
    <div className="btn-container">
      <button
        type="button"
        className="filter-btn"
        onClick={() => props.filter("")}
      >
        all
      </button>
      <button
        type="button"
        className="filter-btn"
        onClick={() => props.filter("breakfast")}
      >
        breakfast
      </button>
      <button
        type="button"
        className="filter-btn"
        onClick={() => props.filter("lunch")}
      >
        lunch
      </button>
      <button
        type="button"
        className="filter-btn"
        onClick={() => props.filter("shakes")}
      >
        shakes
      </button>
    </div>
  );
};

export default Buttons;
