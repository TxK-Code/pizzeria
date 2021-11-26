import React from "react";
import "../../Sass/App.scss";

import ImgClose from "../../Images/.svg/times-solid.svg";
import LogoHead from "../../Images/logo-monalisaHead.png";

export default function Modal({ onCancel }) {
  return (
    <>
      <div className="modalIndex">
        <div className="modalIndex__div">
          <h1 className="modalIndex__title">Cher Clients,</h1>
          <p className="modalIndex__text">
            Nous serons en vacances à partir du samedi 11 jusqu'au mercredi 29
            septembre inclus,
            <br /> reprise le jeudi 30 septembre.
          </p>
          <p className="modalIndex__text">À bientôt !</p>
          <img src={LogoHead} alt="Logo Pizzeria" className="modalIndex__img" />
          <div className="modalIndex__divBtn">
            <button className="modalIndex__btn" onClick={onCancel}>
              <img
                src={ImgClose}
                alt="Boutton fermer"
                className="modalIndex__btnImg"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
