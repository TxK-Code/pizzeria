import React, { useState } from "react";
import infoLogo from "../../Images/.svg/info-circle-solid.svg";
import ModalDataInfos from "../Modals/ModalDataInfos";

export default function FormMail() {
  const [modalDataInfos, setModalDataInfos] = useState(false);

  const toggleModalDataInfos = (e) => {
    e.preventDefault();
    setModalDataInfos(!modalDataInfos);
  };

  return (
    <>
      <div className="formContact">
        <form className="formContact__form">
          <h1 className="formContact__helloTitle">Contactez Nous :</h1>
          <p className="formContact__helloSubtitle">
            N’hésitez pas à nous adresser vos demandes à travers notre
            formulaire de contact, nous y répondrons dans les plus brefs délais.
          </p>
          <label htmlFor="nom" className="formContact__label"></label>
          <p className="formContact__title">Indiquez nous votre Nom :</p>
          <input
            type="text"
            id="nom"
            placeholder="Victor"
            className="formContact__input"
          />

          <label htmlFor="email" className="formContact__label"></label>
          <p className="formContact__title">
            Une adresse mail où vous joindre :
          </p>
          <input
            type="text"
            id="email"
            placeholder="victor@mail.com"
            className="formContact__input"
          />

          <label htmlFor="phone" className="formContact__label"></label>
          <p className="formContact__title">Votre numéro de téléphone :</p>
          <input
            type="text"
            id="phone"
            placeholder="0612345678"
            className="formContact__input"
          />

          <label htmlFor="message" className="formContact__label"></label>
          <p className="formContact__title">Et votre message :</p>
          <textarea
            id="message"
            placeholder="Bonjour, j'aurais une demande..."
            className="formContact__textarea"
          />
          <button className="formContact__sendButton">Envoyer</button>
          <div className="formContact__divInfo">
            <button className="formContact__divInfo__btn">
              <img
                src={infoLogo}
                alt="Information sur la gestion des données"
                className="formContact__divInfo__img"
                onClick={toggleModalDataInfos}
              />
            </button>
          </div>
        </form>
      </div>
      {modalDataInfos && (
        <ModalDataInfos onCancel={(e) => toggleModalDataInfos(e)} />
      )}
    </>
  );
}
