import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getBoisson } from "../redux/actions/post.action";
import { getDessert } from "../redux/actions/post.action";

import "../Sass/App.scss";

export default function Boisson() {
  const { boissons } = useSelector((state) => ({
    ...state.boissonReducer,
  }));
  const { desserts } = useSelector((state) => ({
    ...state.dessertReducer,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (boissons.length === 0) {
      dispatch(getBoisson());
    }
    if (desserts.length === 0) {
      dispatch(getDessert());
    }
  }, []);

  return (
    <>
      <div className="dessertDrink">
        <h1 className="dessertDrink__title">
          Carte de nos desserts et de nos boissons :
        </h1>
      </div>
      <div className="boissons">
        <h1 className="boissons__bigTitle">Boissons :</h1>
        {boissons.map((boissons) => {
          return (
            <>
              <div className="boissons__div">
                <h2 className="boissons__title">{boissons.name}</h2>
                <p className="boissons__prix">{boissons.prix} €</p>
              </div>
            </>
          );
        })}
      </div>
      <div className="desserts">
        <h1 className="desserts__bigTitle">Desserts :</h1>
        {desserts.map((desserts) => {
          return (
            <>
              <div className="desserts__div">
                <h2 className="desserts__title">{desserts.name}</h2>
                <p className="desserts__prix">{desserts.prix} €</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
