//Componente donde esta toda la logica funcional

import React, { useState, useEffect } from "react";
// import { useParams} from 'react-router-dom';
import { getFetch } from "../helpers/getFetch";
import { ItemList } from "./ItemList/ItemList";
import  Spinner  from "../helpers/Spinner";
import { useParams } from "react-router-dom";




export const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const {idCategorias} = useParams();


  useEffect(() => {
    if (idCategorias) {
      
      getFetch
        .then((resp) => setProductos(resp.filter(prod => prod.categorias === idCategorias)))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
   
    }else {
      getFetch
      .then((resp) => setProductos(resp))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
    }

    }, [idCategorias]);
    // console.log(idCategorias)
  return (
    <>
      <h1>{greeting}</h1>

      {loading ? <Spinner/> : <ItemList productos={productos}/> }
    </>
  );
};
