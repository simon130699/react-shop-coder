import React,{useState} from 'react';
import {} from '../styles/ItemCount.css';


export const ItemCount = ({ stock, initial }) => {

    const [count, setCount] = useState(initial);


    const incrementCount = () => {
       setCount( count + 1 );
    }
    const decrementCount = () => {
        setCount( count - 1 );
    }


    return (

        <>
          <div className="text-center container">
            <div className="col-12 mb-2">
                Carritox
            </div>
            <div className="col-12 mb-3 count">
              <button className="btn-1" onClick={() => incrementCount()} disabled={count === stock ? true : false}>+</button>
              <button > {count}</button>
              <button className="btn-1" onClick={() => decrementCount()} disabled={count === initial ? true : false} >-</button>
            </div>    
                <button className="col-12 suma">Agregar al Carrito</button>


          </div>
        </>
    )
}