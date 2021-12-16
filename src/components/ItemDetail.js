import { ItemCount } from "./ItemCount";
import {useState} from 'react'
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';


export const ItemDetail = ({
  id,
  nombre,
  foto,
  categorias,
  description,
  price,
  stock,
  sku,
}) => {

    const [cart, setCart] = useState(true);

    const onAdd = (cantidad) => {
      console.log(cantidad);
      setCart(false)
    }


  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img className="card-img-top mb-5 mb-md-0" src={foto} alt="..." />
            </div>
            <div className="col-md-6">
              <div className="small mb-1">{sku}</div>
              <h1 className="display-5 fw-bolder">{nombre}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">{price}</span>
                <span>{price}</span>
              </div>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium at dolorem quidem modi. Nam sequi consequatur
                obcaecati excepturi alias magni, accusamus eius blanditiis
                delectus ipsam minima ea iste laborum vero?
              </p>
              <div className="d-flex">
                <input
                  className="form-control text-center me-3"
                  id="inputQuantity"
                  type="num"
                  defaultValue={stock}
                  style={{ maxWidth: "3rem" }}
                />
                <button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1" />
                  Add to cart
                </button>
              </div>
            </div>
          </div>

          {cart
          ?
           <ItemCount 
          stock={stock} 
          onAdd={onAdd}  /> 
          : 
          <Link to={'/Carrito'}>

            <Button className="btn btn-secondary"> Compra finalizada ir al carrito </Button> 
          </Link> }
      
        </div>
      </section>
    </div>
  );
};
  
