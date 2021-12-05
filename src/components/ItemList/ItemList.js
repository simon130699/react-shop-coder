import React from "react";
import { Item } from "../Item/Item";

export const ItemList = ({productos}) => {
  return (
      <>

      {productos.map((prod) => <Item prod={prod} /> ) }
      </>
        
  );
};