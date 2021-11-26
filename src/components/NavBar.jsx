import React from "react";
import {} from "../styles/NavBar.css";
import { CartWidget } from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar-expand-lg container pt-3">
      <div className="row ">
        <div className="container-fluid col-8 pt-3">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item px-3">
                <h5>Inicio</h5>
              </li>
              <li className="nav-item px-3">
                <h5>Ofertas Semanales</h5>
              </li>
              <li className="nav-item px-3 ">
                <h5>Productos</h5>
              </li>
              <li className="nav-item px-3 ">
                <h5>Contacto</h5>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar navbar-light pt-2 col-4">
          <h3 className="navbar-brand">ReactShopSp</h3>
          <i className="pb-3">
            <CartWidget />
          </i>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
