import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from './ItemDetail';
import {getFetch} from '../helpers/getFetch';
import { ItemCount } from './ItemCount';


export const ItemDetailCointainer = () => {
  const [producto, setProducto] = useState(null);
  const {id} = useParams();


  useEffect(() => {
      getFetch
      .then(resp => setProducto(resp.find(prod => prod.id === parseInt(id))))
      .catch(err => console.log(err))   
}, [id]) 


    return (
      <> 
      
      <ItemDetail  {...producto}/>
      <ItemCount stock={5} initial={1} />
      </>
    )
}
