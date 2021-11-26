import React from "react";
import "../../Sass/App.scss";

export default function DrinksMenu() {
  return (
    <>
      <div className="drinksCard">
        <img
          src="https://images.unsplash.com/photo-1594492634282-12a04144fbfa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1467&q=80"
          alt="Nos Boissons"
          className="drinksCard__img"
        />
        <h1 className="drinksCard__title">Nos Boissons et Desserts</h1>
      </div>
    </>
  );
}
