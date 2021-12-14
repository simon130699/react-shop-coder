import React from "react";
import {} from "../styles/NavBar.css";
import { CartWidget } from "./CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Navbar sticky-top bg-light row pt-2">
      <div className="navbar navbar-expand-lg navbar-light  col-6 ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/"
                  className="nav-link active  mx-2"
                  aria-current="page"
                >
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Descuentos"
                  className="nav-link active  mx-2"
                  aria-current="page"
                >
                  Descuentos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Sucursales"
                  className="nav-link active  mx-2"
                  aria-current="page"
                >
                  Sucursales
                </Link>
              </li>
              
              <li className="nav-item dropdown">
                <Link to="categorias"
                  className="nav-link dropdown-toggle  mx-2"
                  
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link to="categorias/celulares"
                      className="dropdown-item"
                      
                    >
                      Celulares
                    </Link>
                  </li>
                  <li>
                    <Link to="categorias/heladeras"
                      className="dropdown-item"
                      
                    >
                      Heladeras
                    </Link>
                  </li>
                  <li>
                    <Link to="categorias/televisores"
                      className="dropdown-item"
                      
                    >
                      Televisores
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar navbar-light pt-2 col-4   ">
        <Link to='/'>
        <button className="navbar-brand mx-auto">ReactShopSp</button>
        </Link>
      </div>

      <div className=" col-2   ">
            <NavLink to="carrito">
        <i className="pb-3 mx-auto">
              <CartWidget />
        </i>
            </NavLink>
      </div>
    </div>
  );
};
export default NavBar;
