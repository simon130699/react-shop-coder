import React from 'react';
import estilos from '../styles/NavBar.css';



const NavBar = () => {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light container">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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
  <div className="navbar navbar-light pt-0">
  <div className="container-fluid">
    <a className="navbar-brand" href="http://localhost:3000/">
      ReactShop!
    </a>
  </div>
</div>

</nav>

    )
}
export default NavBar;
