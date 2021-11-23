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
      <img src="https://export-download.canva.com/Q1wiM/DAEwkcQ1wiM/32/0/0001-12953789289.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20211122%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20211122T234710Z&X-Amz-Expires=72849&X-Amz-Signature=3ae717c0b93dc0f46c22ac690e932aef18feee0140ecf9530248bcc100b354af&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27sp.png&response-expires=Tue%2C%2023%20Nov%202021%2020%3A01%3A19%20GMT" alt="logo" />
    </a>
  </div>
</div>

</nav>

    )
}
export default NavBar;
