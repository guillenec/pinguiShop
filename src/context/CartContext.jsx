import { useState } from "react";
import { Children, createContext } from "react";


export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {
    const [ cartList, setCartList ] = useState([])

    const agregaCarrito = (newProducto) => {
        setCartList({
            ...cartList,
            newProducto
        })
    }

    return(
        <CartContext.Provider value={{
            cartList,
            agregaCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}