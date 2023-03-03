import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { toast } from "react-toastify"
import { auth } from "../firebase/config";

//Creamos el contexto
export const CartContext = createContext([])

//simplificamos la exportacion
export const useCartContext = () => useContext(CartContext)

//estados funciones globales
export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]) //productos carrito
    const [meGusta, setMeGusta] = useState([])
    const [contadorComprados, setContadorComprados] = useState(false)
    const [login, setLogin] = useState(false)
    const [panelRoot, setPanelRoot] = useState(false)

    // console.log("arriba ",cartList)
    const agregaAlCarrito = (newProducto) => {
        //includes me da error

        if (cartList.some(objeto => objeto.id === newProducto.id)) {
            // console.log("++ Entre a productos repetidos: ++ ");
            setCartList(
                cartList.map(producto => {
                    if (producto.id === newProducto.id) {
                        return {
                            ...producto,
                            id: newProducto.id,
                            comprado: producto.comprado += newProducto.comprado,
                            precioTotal: producto.comprado * producto.precio
                        }
                    } else {
                        return producto
                    }
                })
            )
        } else {
            setCartList([
                ...cartList,
                {
                    ...newProducto,
                    precioTotal: newProducto.precio * newProducto.comprado
                }
            ])
        }
        // console.log("Sin Duplas: ",cartList)
    }

    //funcion que vacia el carrito
    const vaciarCarrito = () => setCartList([]);

    const eliminarProducto = (identificador) => {
        const nuevoCart = cartList.filter((obj) => obj.id !== identificador)
        setCartList(nuevoCart)
    }

    //cuenta los elementos del cart y setea a elementos comprados
    const contador = (arrayCart) => {
        (arrayCart.length === 0) ? setContadorComprados(0)
            : setContadorComprados(
                arrayCart.reduce((sum, producto) => {
                    return sum + producto.comprado;
                }, 0)
            )
        // console.log(" + --- contador: ",contadorComprados)
    }

    //añade elementos a Elemento que me gustan
    const agregaAMeGusta = (newProducto) => {
        //includes me da error
        if (meGusta.some(objeto => objeto.id === newProducto.id)) {
            // const nuevoMeGusta = meGusta.filter((obj) => obj.id !== newProducto.id)
            setMeGusta(meGusta.filter((obj) => obj.id !== newProducto.id))

        } else {
            setMeGusta([
                ...meGusta,
                {
                    id: newProducto.id,
                    imagenA: newProducto.imagenA,
                    nombre: newProducto.nombre,
                    descripcion: newProducto.descripcion,
                    precio: newProducto.precio,
                    ...newProducto,
                }
            ])
        }
        // console.log("Sin Duplas: ",cartList)
    }

    const handlePanelRooot = (val) => {
        setPanelRoot(val)
    }
    const handleLoginarse = (val) => {
        setLogin(val)
    }

    //Manejo de usuarios
    //Seccion de prueba para autenticar usuario
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginForm = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }
    
    useEffect(()=>{

        console.log('auth provider loader')
        onAuthStateChanged(auth,currentUser => {
            console.log(currentUser)
        })

    },[])

    /* ++ Toastify ++  */
    const notify = (value) => toast.success(`🥰🥰 ${value} `, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const errToast = (value) => toast.error(`😡😡 ${value}`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
    })

    return (
        //proveedor
        <CartContext.Provider value={{
            meGusta,
            cartList,
            agregaAlCarrito,
            agregaAMeGusta,
            vaciarCarrito,
            contador,
            contadorComprados,
            eliminarProducto,
            panelRoot,
            handlePanelRooot,
            login,
            handleLoginarse,
            signUp,
            notify,
            errToast,
            loginForm,
        }}>
            {children}
        </CartContext.Provider>
    )
}