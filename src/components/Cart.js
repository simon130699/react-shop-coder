import {useContext} from 'react'
import { CartContext } from '../context/CartContext'

const Cart = () => {
    const {cartList, removeCart} = useContext(CartContext)
    console.log(cartList);
    return (
        <>
           {cartList.map(prod=> <h2>{prod.nombre} {prod.cantidad}</h2>)}
           <button onClick={removeCart}>Vaciar Carrito</button> 
        </>
    )
}

export default Cart
