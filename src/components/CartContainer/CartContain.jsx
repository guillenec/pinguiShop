import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart'

const CartContain = () => {

    const { cartList, vaciarCarrito, eliminarProducto, user } = useCartContext()
    const [seccion, setSeccion] = useState(false)
    const [boleano, setBolano] = useState(false)
    const [activaModal, setActivaModal] = useState(false)

    const [precioTotalCart, setPrecioTotalCart] = useState({
        subTotal: '',
        iva: '',
        precioFinal: ''
    })
    // console.log(cartList);
    // console.log(user)

    useEffect(() => {
        user == null || user == undefined ? setBolano(false) : setBolano(true)

    }, [user])

    const comprar = () => {
        if (!boleano) {
            setSeccion(true) //si seccion turue, la muestra, es el error
        } else {
            setSeccion(false) //seccion false, no la muestra xq hay un login
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

    const handleButtonComprar = () => {

        if (!boleano) {
            setSeccion(true) //si seccion turue, la muestra, es el error
            setActivaModal(false)

        } else {
            setSeccion(false) //seccion false, no la muestra xq hay un login
            setActivaModal(!activaModal)
        }
    }


    useEffect(() => {
        const total = cartList.reduce((acumulador, element) => acumulador + element.precioTotal, 0)
        const iva = 0.14
        setPrecioTotalCart({
            subTotal: `${total}`,
            iva: `${total * iva}`,
            precioFinal: `${total * iva + total}`
        })
    }, [cartList])

    const dropProduct = (identificador) => {
        eliminarProducto(identificador)
    }


    // console.log(carrito)
    return (
        <>
            {
                !activaModal ? <section className='cartContainer'>
                    <Link to='/' className='linkComprar'> <ion-icon name="arrow-back-outline"></ion-icon> seguir comprando</Link>
                    {
                        cartList.length == 0 ? <section className='cartVacio'><h2>cart vacio</h2></section>
                            :
                            <section className='containCarrito'>
                                <h1>Mi carrito</h1>
                                <section className="botonraCompra">
                                    <button className='vaciar' onClick={vaciarCarrito}><ion-icon name="trash"></ion-icon> vaciar </button>
                                    <button className='vaciar' onClick={handleButtonComprar}><ion-icon name="card-outline"></ion-icon> confirmar compra </button>

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

                    : <section className={`modal`}>
                        <div className='container'>
                            <section className='summaryPurchase'>
                                <section className='containSummaryPurchase'>
                                    <h2>resumen de cuenta</h2>
                                    <p><strong>subtotal:</strong> ${Math.round(precioTotalCart.subTotal)}</p>
                                    <p><strong>iva:</strong> ${Math.round(precioTotalCart.iva)}</p>
                                    <p className='total'><strong>total</strong> ${Math.round(precioTotalCart.precioFinal)}</p>
                                </section>

                            </section>
                            <section className='paymentMethod'>
                                <section className='containPaymentMethod'>
                                    <h2>Metodo de pago</h2>
                                    <label htmlFor="name">
                                        name
                                        <input type="text" name='name' placeholder='name' required />
                                    </label>
                                    <label htmlFor="email">
                                        email
                                        <input type="email" name="email" id="email" placeholder='email@gmail.com' required />
                                    </label>
                                    <label htmlFor="tel">
                                        telefono
                                        <input type="tel" name="telephone" pattern="\([0-9]{4}\) [0-9]{4}[ -][0-9]{4}[ -][0-9]{4}" placeholder='2944-123-123' required />
                                    </label>
                                    <label htmlFor="card">
                                        numero de tarjetas
                                        <input type='number' name="card" id="card" placeholder='XXXX XXXX XXXX 1234' pattern="\([0-9]{4}\) [0-9]{4}[ -][0-9]{4}" required />
                                    </label>
                                    <div className='expired'>
                                        <label className='labelExpired'>
                                            Vencimiento
                                            <div>
                                                <input type="number" name="month" id="month" min={0} max={12} placeholder="MM" required />
                                                <input type="number" name="year" id="year" min={22} max={30} placeholder="YY" required />
                                            </div>
                                        </label>
                                        <label htmlFor="">
                                            CVV
                                            <input type="number" name='cvv' placeholder={123} required />
                                        </label>
                                    </div>
                                </section>

                            </section>
                            <button className='closeModal' onClick={handleButtonComprar}><ion-icon name="close-outline"></ion-icon></button>
                        </div>
                    </section>
            }


        </>
    )
}

export default CartContain