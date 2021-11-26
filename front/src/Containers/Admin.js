import React from "react";

import PizzaDuMois from "../Images/bgs/tomatoSquare.jpg";
import Message from "../Images/bgs/mailSquare.jpg";
import Infos from "../Images/bgs/welcomeSquare.jpg";

import "../Sass/App.scss";

export default function Admin() {
  return (
    <>
      <h1 className="adminPageTitle">Tableau de bord :</h1>
      <div className="adminPage">
        <div className="adminPage__box">
          <div className="adminPage__card">
            <h2 className="adminPage__cardTitle">Pizza du mois</h2>
            <img src={PizzaDuMois} alt="" className="adminPage__cardImg" />
          </div>

          <div className="adminPage__card">
            <h2 className="adminPage__cardTitle">Messagerie</h2>
            <img src={Message} alt="" className="adminPage__cardImg" />
          </div>

          <div className="adminPage__card">
            <h2 className="adminPage__cardTitle">Message acceuil</h2>
            <img src={Infos} alt="" className="adminPage__cardImg" />
          </div>
        </div>
      </div>
    </>
  );
}
