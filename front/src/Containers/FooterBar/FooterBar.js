import React from "react";
import "../../Sass/App.scss";

import FacebookLogo from "../../Images/.svg/facebook-brands.svg";
import MailLogo from "../../Images/.svg/envelope-solid.svg";
import PhoneLogo from "../../Images/.svg/phone-solid.svg";

export default function FooterBar() {
  return (
    <>
      <div className="footerIndex">
        <nav className="footerIndex__nav">
          <ul className="footerIndex__ul">
            <li className="footerIndex__li">
              <img
                src={FacebookLogo}
                alt="Logo Facebook"
                className="footerIndex__liLogo"
              />
              <h1 className="footerIndex__liText">Suivez-nous !</h1>
            </li>
            <li className="footerIndex__li">
              <img
                src={MailLogo}
                alt="Logo Facebook"
                className="footerIndex__liLogo"
              />
              <h1 className="footerIndex__liText">Contactez-nous.</h1>
            </li>
            <li className="footerIndex__li">
              <img
                src={PhoneLogo}
                alt="Logo Facebook"
                className="footerIndex__liLogo"
              />
              <h1 className="footerIndex__liText">04.50.39.24.63</h1>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
