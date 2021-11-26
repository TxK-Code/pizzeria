import React from "react";
import "../../Sass/App.scss";

export default function PizzaMenu() {
  return (
    <>
      <div className="pizzaCard">
        <img
          src="https://images.unsplash.com/photo-1579751626657-72bc17010498?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1469&q=80"
          alt="Nos Pizzas"
          className="pizzaCard__img"
        />
        <h1 className="pizzaCard__title">Nos Pizzas</h1>
      </div>
    </>
  );
}
