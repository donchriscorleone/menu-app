import React from "react";

const Food = ({ food }) => {
  return (
    <article className="menu-item">
      <img src={food.image} alt={food.name} className="photo" />
      <div className="item-info">
        <header>
          <h4>{food.name}</h4>
          <h4 className="price">{food.price}</h4>
        </header>
        <p className="item-text">{food.description}</p>
      </div>
    </article>
  );
};

export default Food;
