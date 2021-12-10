import React from "react";
import {} from "../styles/NavBar.css";
import { CartWidget } from "./CartWidget";
// import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="Navbar row pt-2">
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
                <a
                  className="nav-link active  mx-2"
                  aria-current="page"
                  href="http://localhost:3000/react-shop-coder#"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link  mx-2"
                  href="http://localhost:3000/react-shop-coder#"
                >
                  Ofertas semanales
                </a>
              </li>
              <li className="nav-item ">
                <a
                  className="nav-link  mx-2"
                  href="http://localhost:3000/react-shop-coder#"
                >
                  Contacto
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle  mx-2"
                  href="http://localhost:3000/react-shop-coder#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/react-shop-coder#"
                    >
                      producto 1
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/react-shop-coder#"
                    >
                      producto 2
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/react-shop-coder#"
                    >
                      producto 3
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar navbar-light pt-2 col-4   ">
        <h3 className="navbar-brand mx-auto">ReactShopSp</h3>
      </div>

      <div className=" col-2   ">
        <i className="pb-3 mx-auto">
            
              <CartWidget />
            
          
        </i>
      </div>
    </div>
  );
};
export default NavBar;
