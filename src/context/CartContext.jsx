import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";

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
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [invoicePurchase, setInvoicePurchase] = useState([])

    const agregaAlCarrito = (newProducto) => {
        //includes me da error

        if (cartList.some(objeto => objeto.id === newProducto.id)) {
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
    }

    useEffect(() => {
        localStorage.setItem('carritoStorage', JSON.stringify(cartList))
        const carritoStorage = JSON.parse(localStorage.getItem('carritoStorage'));

        if (carritoStorage.length > 0  && cartList.length == 0) {
            setCartList(carritoStorage)
        } 
    }, [cartList])
    //funcion que vacia el carrito

    const vaciarCarrito = () => {
        localStorage.setItem('carritoStorage', JSON.stringify([]))
        setCartList([]) 
    };

    const eliminarProducto = (identificador) => {
        const nuevoCart = cartList.filter((obj) => obj.id !== identificador)
        localStorage.setItem('carritoStorage', JSON.stringify(nuevoCart))
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
    }

    const handlePanelRooot = (val) => {
        setPanelRoot(val)
    }
    const handleLoginarse = (val) => {
        setLogin(val)
    }

    //#region - Manejo de usuarios:
    // https://firebase.google.com/docs/auth/web/password-auth?hl=es-419
    //permite autenticar usuario
    const signUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //permite ingresar, logiar un user
    const loginForm = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                notify(`Gracias por loguiarte :${user.email}`)
            })
            .catch((error) => {
                error.code === 'auth/wrong-password' && errToast("❌ contraseña incorrecta") || error.code === 'auth/user-not-found' && errToast('❌ el usuario no existe o no esta registrado') || errToast(error.message)
            })

    }
    //permite desloguiarme 
    const logOut = () => {
        signOut(auth).then(() => {
            notify("🙋 cerrando sesion!!!")
        }).catch((error) => {
            errToast(`❌ ${error.code}`)
        }).finally(() => {
            notify("🖐 bye!!!")
        })
    }

    useEffect(() => {
        //control delusuario activo
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
    }, [])

    //Login con google
    const loginGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                notify(`Gracias por loguiarte :${user.displayName}`)

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                // console.log(error)
                errToast(`❌ ${error.code}`)
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                errorCode === "auth/popup-closed-by-user" ? errToast("cerro la ventana de login") : errToast(errorCode)
            });
    }

    const recoverPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                notify("redireccion, actualiza password")
                // Password reset email sent!
                // ..
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    //#endregion

    const setPurchaseOrderContext = (orden) => {
        setInvoicePurchase(orden)
    }

    //#region - Toastify 
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
    //#endregion

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
            user,
            logOut,
            loading,
            loginGoogle,
            recoverPassword,
            setPurchaseOrderContext,
            invoicePurchase,
        }}>
            {children}
        </CartContext.Provider>
    )
}
