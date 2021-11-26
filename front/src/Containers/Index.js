import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../Sass/App.scss";
import LogoPizza from "../Images/logo-Pizza.png";
import LogoHead from "../Images/logo-monalisaHead.png";
import LogoFoot from "../Images/logo-monalisaFoot.png";

import PizzaMenu from "../Containers/Cards/PizzaMenu";
import DrinksMenu from "../Containers/Cards/DrinksMenu";

import Modal from "../Containers/Modals/ModalIndex";

export default function Index() {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  const history = useHistory();

  const goPizzaPage = () => {
    history.push("/pizzas");
  };
  const goDessertPage = () => {
    history.push("/desserts-et-boissons");
  };

  return (
    <>
      <div className="headerIndex">
        <div className="headerIndex__opacity">
          <img
            src={LogoHead}
            alt="Logo Mona Lisa"
            className="headerIndex__logoMonaHead"
          />
          <h2 className="headerIndex__title">
            Des pizzas à manger sur place ou à emporter !
          </h2>
          <img
            src={LogoPizza}
            alt="Part de pizza"
            className="headerIndex__logoPizza"
          />
          <p className="headerIndex__text">
            Spécialiste des pizzas à Bons-en-Chablais, l’équipe de Pizz’Art Mona
            Lisa utilise des produits frais et de saison.{" "}
          </p>
          <p className="headerIndex__text">
            Nous vous invitons à déguster un large choix de pizzas artisanales,
            mais également de délicieux desserts.
          </p>
          <p className="headerIndex__text headerIndex__textBottom">
            Soucieuse de votre satisfaction, l’équipe de votre pizzeria accorde
            une grande importance à la propreté, à la qualité des services et au
            choix des ingrédients. Partagez un moment convivial autour de nos
            spécialités.
          </p>
          <img
            src={LogoFoot}
            alt="Logo Mona Lisa"
            className="headerIndex__logoMona"
          />
          <p className="headerIndex__subtitle">
            Du Jeudi au Dimanche de 18H à 21H30
          </p>
        </div>
      </div>

      <div className="indexMenu">
        <div className="indexMenu__Pizza" onClick={goPizzaPage}>
          <PizzaMenu />
        </div>
        <div className="indexMenu__Drinks" onClick={goDessertPage}>
          <DrinksMenu />
        </div>
      </div>
      {modal && <Modal onCancel={() => toggleModal()} />}
      <div id="map"></div>
    </>
  );
}
