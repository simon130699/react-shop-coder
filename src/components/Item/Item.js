import React from 'react';
import {} from '../../../../../../Desktop/proyectoReactJS/react-shop-coder/src/styles/Item.css';

export const Item = ({prod}) => {
    return (
      


<div className="card container" style={{width: '18rem'}}>
  <img src={prod.foto} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{prod.nombre}</h5>
    <p className="card-text">{prod.price}</p>
    <a href="http://localhost:3000/react-shop-coder" className="btn btn-primary">Sumar al carrito</a>
  </div>
</div>


    )
}

