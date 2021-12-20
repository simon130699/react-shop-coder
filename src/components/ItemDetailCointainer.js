import React,{useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import {getFetch} from '../helpers/getFetch';




export const ItemDetailCointainer = () => {
  const [producto, setProducto] = useState(0);
  const {id} = useParams();

  useEffect(() => {
      getFetch
      .then(resp => setProducto(resp.find(prod => prod.id === parseInt(id))))
      .catch(err => console.log(err))   
}, [id]) 


    return (
      <> 
    
          <ItemDetail  {...producto}/>

      </>
    )
}
