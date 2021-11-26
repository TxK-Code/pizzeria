import React from "react";
import "../../Sass/App.scss";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="navBar">
        <nav className="navBar__nav">
          <ul className="navBar__ul">
            <Link
              to="/"
              className="navBar__li"
              style={{ textDecoration: "none" }}
            >
              <li>Accueil</li>
            </Link>
            <Link
              to="/pizzas"
              className="navBar__li"
              style={{ textDecoration: "none" }}
            >
              <li>Pizzas</li>
            </Link>
            <Link
              to="/desserts-et-boissons"
              className="navBar__li"
              style={{ textDecoration: "none" }}
            >
              <li>Desserts et Boissons</li>
            </Link>
            <Link
              to="/contact"
              className="navBar__li"
              style={{ textDecoration: "none" }}
            >
              <li>Contact / Nous Situer</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
