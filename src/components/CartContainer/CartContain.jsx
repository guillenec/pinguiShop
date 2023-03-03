import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'

const CartContain = () => {

    const { cartList, vaciarCarrito, eliminarProducto, user } = useCartContext()
    const [seccion, setSeccion] = useState(false)
    // console.log(cartList);
    console.log(user)

    useEffect(() => {
        user == null || user == undefined ? console.log("no hay user loguiado") : console.log("Usuario loguiado: " + user.email)

    }, [user])

    const comprar = () => {
        if (user == null || user == undefined) {
            setSeccion(true)
        } else {
            setSeccion(false)
            const ordenCmpra = {
                buyer: { email: user.email, uid: user.uid },
                items: cartList.map((elem => ({ id: elem.id, titulo: elem.nombre, precio: elem.precioTotal }))),
                total: cartList.reduce((acumulador, element) => acumulador + element.precioTotal, 0)
            }


            const db = getFirestore()
            const ordenColeccion = collection(db, 'ordenesDeCompra')

            addDoc(ordenColeccion, ordenCmpra)
                .then(resp => console.log(resp))
        }
        // console.log("++ -- Carrito +Usuario: ", cartReal)
    }

    const dropProduct = (identificador) => {
        eliminarProducto(identificador)
    }
    // console.log(carrito)
    return (
        <>
            <section className='cartContainer'>
                <Link to='/' className='linkComprar'> <ion-icon name="arrow-back-outline"></ion-icon> seguir comprando</Link>
                {
                    cartList.length == 0 ? <section className='cartVacio'><h2>cart vacio</h2></section>
                        :
                        <section className='containCarrito'>
                            <h1>Mi carrito</h1>
                            <section className="botonraCompra">
                                <button className='vaciar' onClick={vaciarCarrito}><ion-icon name="trash"></ion-icon> vaciar </button>
                                <button className='vaciar' onClick={comprar}><ion-icon name="card-outline"></ion-icon> comprar </button>

                                {(seccion == true) ? <h2 className='userNoLogin'>Debe loguiarse para poder comprar!!!</h2> : null}
                            </section>
                            <section className='carrito'>
                                {
                                    cartList.map(elemento => {
                                        return (<section key={elemento.id} className="cartProducto">
                                            <ItemCart element={elemento} dropProduct={dropProduct} />
                                        </section>)
                                    })
                                }
                            </section>
                        </section>
                }

            </section>

        </>
    )
}

export default CartContain