//Componente donde esta toda la logica funcional

import React, { useState, useEffect } from "react";
// import { useParams} from 'react-router-dom';
import { getFetch } from "../helpers/getFetch";
import { ItemList } from "./ItemList/ItemList";
import { ItemCount } from "./ItemCount";
import  Spinner  from "../helpers/Spinner";

export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  // const { idCate } = useParams();


  useEffect(() => {

      getFetch
        .then((resp) => setProductos(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
   
    }, []);
  return (
    <>
      <h1>{greeting}</h1>

      {loading ? <Spinner/> : <ItemList productos={productos}/> }
      <ItemCount stock={5} initial={1}  />
    </>
  );
};
