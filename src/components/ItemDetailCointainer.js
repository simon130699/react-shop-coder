import React,{useState, useEffect} from 'react';
import {getOneProduct} from '../helpers/getOneProduct';
import { ItemDetail } from './ItemDetail';


export const ItemDetailCointainer = () => {

    const [item, setItem] = useState({});

    useEffect(() => {

        getOneProduct
          .then((resp) => setItem(resp))   
      }, []);

    return (
     <ItemDetail item={item} />
    )
}
