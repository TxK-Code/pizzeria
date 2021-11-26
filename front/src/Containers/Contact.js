import React from "react";
import "../Sass/App.scss";
import theMap from "../Images/maps.png";

import MailForm from "./Form/FormMail";

export default function Contact() {
  const GoogleMap = () => {
    window.open(
      "https://www.google.fr/maps/place/PIZZ'ART+MONA+LISA+-+Pizzeria+%C3%A0+Bons+en+Chablais/@46.2698933,6.3641409,17.5z/data=!4m12!1m6!3m5!1s0x478c6b5b7483a89f:0x51874be3f83641b8!2sPIZZ'ART+MONA+LISA+-+Pizzeria+%C3%A0+Bons+en+Chablais!8m2!3d46.2697544!4d6.3647838!3m4!1s0x478c6b5b7483a89f:0x51874be3f83641b8!8m2!3d46.2697544!4d6.3647838",
      "blank"
    );
  };

  return (
    <>
      <div className="contactBanner">
        <div className="contactBanner__div">
          <h1 className="contactBanner__title">
            Besoin d'en savoir plus sur la pizzeria Pizz'Art Mona Lisa à
            Bons-en-Chablais ?
          </h1>
          <p className="contactBanner__subtitle">
            Vous trouverez ici un formulaire pour nous écrire et un moyens de
            nous trouver !
          </p>
        </div>
      </div>
      <MailForm />
      <div className="contactMap">
        <img src={theMap} className="contactMap__img" onClick={GoogleMap} />
      </div>

    </>
  );
}
