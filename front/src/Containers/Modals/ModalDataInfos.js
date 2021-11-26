import React from "react";
import "../../Sass/App.scss";

import ImgClose from "../../Images/.svg/times-solid.svg";
import LogoHead from "../../Images/logo-monalisaHead.png";

export default function ModalDataInfos({ onCancel }) {
  return (
    <>
      <div className="modalIndexInfos">
        <div className="modalIndexInfos__div">
          <h1 className="modalIndexInfos__title">Cher Clients,</h1>
          <p className="modalIndexInfos__text">
            Afin de traiter votre demande, PIZZ'ART MONALISA devra effectuer un
            traitement des données personnelles vous concernant.
          </p>
          <p className="modalIndexInfos__text">
            Les données sont conservées pendant{" "}
            <span className="modalIndexInfos__span">
              2 ans à compter de notre dernier contact
            </span>
            et sont destinées exclusivement à PIZZ'ART MONALISA,{" "}
            <span className="modalIndexInfos__span">
              elles ne seront pas transmises à des tiers
            </span>
            .
          </p>

          <p className="modalIndexInfos__text">
            Conformément à la loi Informatique et Libertés du 6 janvier 1978
            modifiée,{" "}
            <span className="modalIndexInfos__span">
              vous bénéficiez d’un droit d’accès et de rectification des données
              vous concernant
            </span>
            , d’un droit d’opposition pour motifs légitimes, d’un droit à
            l’effacement des données.
          </p>
          <p className="modalIndexInfos__text">
            Vous disposez également d’un droit à la récupération et à la
            portabilité des données dans certains cas spécifiquement prévus par
            la loi.
          </p>
          <p className="modalIndexInfos__text">
            <span className="modalIndexInfos__span">
              Pour l’exercice de vos droits veuillez contacter :
            </span>
          </p>
          <p className="modalIndexInfos__textend">
            <em>
              PIZZ'ART MONALISA, 161 AVENUE DE LA GARE, 74890 BONS-EN-CHABLAIS
            </em>
          </p>
          <p className="modalIndexInfos__textend">
            <em>contact@pizzeria-pizzart-monalisa.fr</em>
          </p>
          <img
            src={LogoHead}
            alt="Logo Pizzeria"
            className="modalIndexInfos__img"
          />
          <div className="modalIndexInfos__divBtn">
            <button className="modalIndexInfos__btn" onClick={onCancel}>
              <img
                src={ImgClose}
                alt="Boutton fermer"
                className="modalIndexInfos__btnImg"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
