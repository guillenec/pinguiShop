import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'

/*
getProds()
                .then((response) => {
                    console.log(response)
                    setProdsCarrito(
                        prodsComprados.map(pComprado => {
                            const producto = response.find(p => p.id === pComprado.id);
                            return {
                                id: pComprado.id,
                                nombre: producto.nombre,
                                cantidad: pComprado.cantidad,
                                descripcion: producto.descripcion,
                                stock: producto.stock,
                                precio: producto.precio,
                                descuento: producto.descuento,
                                imagenA: producto.imagenA
                            }
                        })
                    )
                })
*/


const CartContain = () => {

    const { cartList, vaciarCarrito, operaSobreCart, eliminarProducto } = useCartContext()
    console.log(cartList);

    const comprar = () => {
        const userCompra = {nombre:'pepito gammer', telefono:'2944396888', email:'pepitogamer@gmail.com'}

        const cartReal = {
            buyer: { nombre:userCompra.nombre, telefono:userCompra.telefono, email:userCompra.email }, 
            items: cartList.map((elem => ({id:elem.id, titulo:elem.nombre, precio:elem.precioTotal }) )),
            total: cartList.reduce((acumulador, element) => acumulador + element.precioTotal, 0)
        }
        

        const db = getFirestore()
        const ordenColeccion = collection(db, 'ordenesDeCompra')

        addDoc(ordenColeccion, cartReal)
        .then(resp => console.log(resp))

        console.log("++ -- Carrito +Usuario: ",cartReal)
    }
    const sumRestaProducto = (objeto,operador) => {
        operaSobreCart(objeto, operador)
    }

    const dropProduct = (identificador) => {
        eliminarProducto(identificador)
    }
    // console.log(carrito)
    return (
        <>
            <section className='cartContainer'>
                <Link to='/' className='linkComprar'> <ion-icon name="arrow-back-outline"></ion-icon> seguir comprando</Link>
                <section className='containCarrito'>
                    <h1>Mi carrito</h1>
                    <button className='vaciar' onClick={vaciarCarrito}><ion-icon name="trash"></ion-icon> vaciar </button>
                    <button className='vaciar' onClick={comprar}><ion-icon name="card-outline"></ion-icon> comprar </button>

                    <section className='carrito'>
                        { 
                            cartList.map(elemento => {
                                return (<section key={elemento.id} className="cartProducto">
                                    <ItemCart element={elemento} operaSobreCart={sumRestaProducto} dropProduct={dropProduct}/>
                                </section>)
                            })
                        }
                    </section>
                </section>
            </section>

        </>
    )
}

export default CartContain