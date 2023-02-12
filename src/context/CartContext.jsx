import { createContext, useState, useContext } from "react";

//Creamos el contexto
export const CartContext = createContext([])

//simplificamos la exportacion
export const useCartContext = () => useContext(CartContext)

//estados funciones globales
export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]); //productos carrito
    const [contadorComprados, setContadorComprados] = useState();

    console.log("arriba ",cartList)
    const agregaAlCarrito = (newProducto) => {
        //includes me da error

        if(cartList.some(objeto => objeto.id === newProducto.id)){
            // console.log("++ Entre a productos repetidos: ++ ");
            setCartList(
                cartList.map(producto => {
                    if (producto.id === newProducto.id) {
                        return {
                            ...producto,
                            id: newProducto.id,
                            stock: producto.stock - producto.comprado - newProducto.comprado,
                            precio: producto.precio + newProducto.precio,
                            comprado: producto.comprado + newProducto.comprado
                        }
                    } else {
                        return producto
                    }
                })
            )
        } else{
            setCartList([
                ...cartList,
                newProducto
            ])
        }

        // console.log("Sin Duplas: ",cartList)

    }

    const vaciarCarrito = () => setCartList([]);

    const contador = (arrayCart) => {
        (arrayCart.length === 0) ? setContadorComprados(0)
        : setContadorComprados(
            arrayCart.reduce((sum, producto)=> {
                return sum + producto.comprado;
            }, 0)
        )
        // console.log(" + --- contador: ",contadorComprados)
    }

    return (
        //proveedor
        <CartContext.Provider value={{
            cartList,
            agregaAlCarrito,
            vaciarCarrito,
            contador,
            contadorComprados
        }}>
            {children}
        </CartContext.Provider>
    )
}