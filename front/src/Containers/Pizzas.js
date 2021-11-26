import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HashLink as Link } from "react-router-hash-link";

import { getPizzas } from "../redux/actions/post.action";

import "../Sass/App.scss";

export default function Pizzas() {
  const { pizzas } = useSelector((state) => ({
    ...state.pizzaReducer,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (pizzas.length === 0) {
      dispatch(getPizzas());
    }
  }, []);

  const [displayTomato, setDisplayTomato] = useState(false);
  const [displayCream, setDisplayCream] = useState(false);
  const [displaySpecial, setDisplaySpecial] = useState(false);

  const toggleTomato = () => {
    if (displayCream === true || displaySpecial === true) {
      setDisplayCream(false);
      setDisplaySpecial(false);
    }
    console.log("toggleTomato !");
    setDisplayTomato(!displayTomato);
  };
  const toggleCream = () => {
    if (displayTomato === true || displaySpecial === true) {
      setDisplayTomato(false);
      setDisplaySpecial(false);
    }
    setDisplayCream(!displayCream);
  };
  const toggleSpecial = () => {
    if (displayTomato === true || displayCream === true) {
      setDisplayCream(false);
      setDisplayTomato(false);
    }
    setDisplaySpecial(!displaySpecial);
  };

  return (
    <>
      <div className="pizzasHeader">
        <div className="pizzasHeader__box">
          <h1 className="pizzasHeader__title">
            Des pizzas à manger sur place ou à emporter !
          </h1>
          <h2 className="pizzasHeader__subtitle">
            Pizz'Art Mona Lisa, pizzeria à Bons-en-Chablais
          </h2>
          <p className="pizzasHeader__text">
            Pour les gourmands, Pizz'Art Mona à Bons en Chablais vous invite à
            déguster nos pizzas italiennes, régionales et spéciales.
          </p>
          <p className="pizzasHeader__subtitle">
            Nous vous invitions à accompagner votre pizza d’une boisson
            rafraîchissante ou d’un dessert gourmand au choix.
          </p>
        </div>
      </div>

      <div className="baseBox">
        <div className="baseBox__master01">
          <div className="baseBox__shadow">
            <div className="baseBox__div">
              <Link to="#tomate" style={{ textDecoration: "none" }}>
                <h1
                  className="baseBox__title"
                  id="tomate"
                  onClick={toggleTomato}
                >
                  Tomate
                </h1>
              </Link>
            </div>
          </div>
        </div>
        {displayTomato === true ? (
          <div className="listedPizza">
            <div className="listedPizza__div">
              {pizzas.map((item) => {
                if (item.base === 2) {
                  return (
                    <div className="listedPizza__divInside">
                      <p className="listedPizza__name">{item.name}</p>
                      <p className="listedPizza__price">{item.prix} €</p>
                      <p className="listedPizza__ingredients">
                        ({item.ingredients})
                      </p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ) : (
          <span></span>
        )}

        <div className="baseBox__master02">
          <div className="baseBox__shadow">
            <div className="baseBox__div">
              <Link to="#creme" style={{ textDecoration: "none" }}>
                <h1 className="baseBox__title" id="creme" onClick={toggleCream}>
                  Crème
                </h1>
              </Link>
            </div>
          </div>
        </div>
        {displayCream === true ? (
          <div className="listedPizza">
            <div className="listedPizza__div">
              {pizzas.map((item) => {
                if (item.base === 1) {
                  return (
                    <div className="listedPizza__divInside">
                      <p className="listedPizza__name">{item.name}</p>
                      <p className="listedPizza__price">{item.prix} €</p>
                      <p className="listedPizza__ingredients">
                        {item.ingredients}
                      </p>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        ) : (
          <span></span>
        )}

        <div className="baseBox__master03">
          <div className="baseBox__shadow">
            <div className="baseBox__div">
              <Link to="#special" style={{ textDecoration: "none" }}>
                <h1
                  className="baseBox__title"
                  id="special"
                  onClick={toggleSpecial}
                >
                  Spécialitées
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {displaySpecial === true ? (
        <div className="listedPizzaEnd">
          <div className="listedPizza__div">
            {pizzas.map((item) => {
              if (item.base === 0) {
                return (
                  <div className="listedPizza__divInside">
                    <p className="listedPizza__name">{item.name}</p>
                    <p className="listedPizza__price">{item.prix} €</p>
                    <p className="listedPizza__ingredients">
                      {item.ingredients}
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      ) : (
        <span></span>
      )}
    </>
  );
}
