import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getProds } from '../../gFetch'
import Item from '../Item/Item'
import ItemCart from '../ItemCart/ItemCart'
import ItemCount from '../ItemCount/ItemCount'
import Loading from '../Loading/Loading'



const CartContain = () => {
    let [loading, setLoading] = useState(true) //"" "" true

    const [carrito, setProdsCarrito] = useState()

    const prodsComprados = [
        { "id": 2, "cantidad": 3 },
        { "id": 6, "cantidad": 2 },
        { "id": 8, "cantidad": 5 },
        { "id": 24, "cantidad": 3 },
        { "id": 26, "cantidad": 2 }
    ]
    console.log(carrito)

    useEffect(() => {
        if (carrito === undefined) {
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
                .catch((err) => {
                    console.log(err.message)
                })
                .finally(() => setLoading(false))
        }

    }, [])

    console.log(carrito)
    return (
        <>
            {
                loading ? <Loading /> :
                    (
                        <section className='cartContainer'>
                            <Link to='/' className='linkComprar'> <ion-icon name="arrow-back-outline"></ion-icon> seguir comprando</Link>
                            <section className='containCarrito'>
                                <h1>Mi carrito</h1>
                                <section className='carrito'>
                                    {
                                        carrito.map(elemento => {
                                            return (<section key={elemento.id} className="cartProducto">
                                                <ItemCart element={elemento} />
                                            </section>)
                                        })
                                    }
                                </section>
                            </section>
                        </section>
                    )
            }
        </>
    )
}

export default CartContain