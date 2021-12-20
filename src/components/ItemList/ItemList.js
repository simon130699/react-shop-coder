import React,{useContext} from "react";
import { CartContext } from "../../context/CartContext";

import { Item } from "../Item/Item";



export const ItemList = () => {

  const {prod} = useContext(CartContext);

  return (
      <>

      {prod.map((prod) => <Item prod={prod} /> ) }
      </>
        
  );
};
