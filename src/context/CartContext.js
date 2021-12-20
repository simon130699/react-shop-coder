import{createContext, useState} from 'react';
import { products } from '../helpers/getFetch';

export const CartContext = createContext([]);


const CartContextProvider = ({children}) => {
    //todas las funciones globales


    const [prod, setProd] = useState(products);
    const [cartList, setCartList] = useState([]);

    const AddToCart = (item) => {
        
        const index = cartList.findIndex(i => i.id === item.id)
  
        if (index > -1) {
          const cantidadAnterior = cartList[index].cantidad

          cartList.splice(index, 1)

          setCartList([...cartList, { ...item, cantidad: item.cantidad + cantidadAnterior}])

        } else {
          setCartList([...cartList, item])
        }
           
    }
    const removeCart = () =>{
        setCartList([])
    }
    return (
        <CartContext.Provider 
        value= {{prod,
            setProd,
            cartList,
            AddToCart,
            removeCart
             }}>

            {children}
        </CartContext.Provider>
    )
} 
export {CartContextProvider}