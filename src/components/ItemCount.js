import React,{useState} from 'react';
import {} from '../styles/ItemCount.css';


export const ItemCount = ({stock, onAdd}) => {
  const [count, setCount] = useState(0);
  

  const incrementCount = () => {
       setCount(count + 1);
      }
    const decrementCount = () => {
      setCount(count - 1);
      }
      
      
      // console.log(stock);
      return (
        
        <>
          <div className="text-center container">
            <div className="col-12 mb-2">
             
            </div>
            <div className="col-12 mb-3 count">
              <button className="btn-1" onClick={ incrementCount} disabled={count === parseInt(stock) ? true : false}>+</button>
              <button > {count}</button>
              <button className="btn-1" onClick={decrementCount} disabled={count === 0 ? true : false} >-</button>
            </div>    
                <button disabled={count === 0} onClick={()=> onAdd(count)} className="col-12 suma ">Agregar al Carrito</button>


          </div>
        </>
    )
}