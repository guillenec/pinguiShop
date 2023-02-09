import { createContext, useState, useContext} from "react";

//Creamos el contexto
export const CartContext = createContext([])

//simplificamos la exportacion
export const useCartContext = () => useContext(CartContext)

//estados funciones globales
export const CartContextProvider = ({children}) => {
    const [ cartList, setCartList ] = useState([]); //productos carrito

    const agregaAlCarrito = (newProducto) => {
        setCartList( [
            ...cartList,
            newProducto
        ] );
    }

    return(
        //proveedor
        <CartContext.Provider value={{
            cartList,
            agregaAlCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}