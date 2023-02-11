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

    const { cartList, vaciarCarrito } = useCartContext()
    console.log(cartList);
    // console.log(carrito)
    return (
        <>
            <section className='cartContainer'>
                <Link to='/' className='linkComprar'> <ion-icon name="arrow-back-outline"></ion-icon> seguir comprando</Link>
                <section className='containCarrito'>
                    <h1>Mi carrito</h1>
                    <button className='vaciar' onClick={vaciarCarrito}><ion-icon name="trash"></ion-icon> vaciar </button>
                    <section className='carrito'>
                        { 
                            cartList.map(elemento => {
                                return (<section key={elemento.id} className="cartProducto">
                                    <ItemCart element={elemento} />
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