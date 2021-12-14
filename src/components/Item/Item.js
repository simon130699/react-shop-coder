import React from 'react';
import {} from '../../../../../../Desktop/proyectoReactJS/react-shop-coder/src/styles/Item.css';
import {Link} from 'react-router-dom';

export const Item = ({ prod }) => {
  return (
    <div className="card">
      <div className="row">
        <div className="col mb-5">
          <div className="card h-100">
            <div
              className="badge bg-dark text-white position-absolute"
              style={{ top: "0.5rem", right: "0.5rem" }}
            >
              Sale
            </div>
            <img className="card-img-top" src={prod.foto} alt="..." />
            <div className="card-body p-4">
              <div className="text-center">
                <h5 className="fw-bolder">{prod.nombre}</h5>
                <span className="text-muted text-decoration-line-through"></span>
                {prod.price}
              </div>
            </div>
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
              <div className="text-center detail">
                <Link to={`/detalle/${prod.id}`}>
                  <button className="btn  mt-auto">
                    Detalle del producto
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};


