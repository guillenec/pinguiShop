import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
import CartButtons from '../CartButtons/CartButtons'
import CartFormCompra from '../CartFormCompra/CartFormCompra'
import ItemCartList from '../ItemCartList/ItemCartList'

const CartContain = () => {

    const { cartList, vaciarCarrito, eliminarProducto, user, notify, errToast, setOrdenDeCompraContext } = useCartContext()
    const [seccion, setSeccion] = useState(false)
    const [boleano, setBolano] = useState(false)
    const [activaModal, setActivaModal] = useState(false)

    const [precioTotalCart, setPrecioTotalCart] = useState({
        subTotal: '',
        iva: '',
        precioFinal: ''
    })

    const [tiket, setTiket] = useState({
        name: '',
        email: '',
        telephone: '',
        card: '',
        month: '',
        year: '',
        cvv: '',
    })
    // console.log(cartList);
    // console.log(user)

    useEffect(() => {
        user == null || user == undefined ? setBolano(false) : setBolano(true)

    }, [user])

    const navigate = useNavigate()

    const handleComprar = (e) => {
        e.preventDefault()

        const ordenCmpra = {
            buyer: tiket,
            items: cartList.map((elem => ({ id: elem.id, titulo: elem.nombre, precio: elem.precioTotal }))),
            ...precioTotalCart
        }

        // console.log("+++ ordenCompra: ", ordenCmpra)

        const db = getFirestore()
        const ordenColeccion = collection(db, 'ordenesDeCompra')

        addDoc(ordenColeccion, ordenCmpra)
            .then(resp => {
                notify(`se cargo la orden: ${resp.id}`)
                setOrdenDeCompraContext(resp)
            })
            .catch((error) => {
                errToast(error)
            })
            .finally(() => {
                console.log("FINALY...")
                setTimeout(() => {
                    handleButtonComprar()
                    vaciarCarrito()
                    navigate('/tiket')
                }, 5000);

            })

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
            subTotal: `${Math.round(total)}`,
            iva: `${Math.round(total * iva)}`,
            precioFinal: `${Math.round(total * iva + total)}`
        })
    }, [cartList])

    const [erorBlur, setErrorBlur] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setTiket({
            ...tiket, [name]: value
        })
        // console.log(tiket)
    }

    //vamos a manejar los errores en el blur junto con el html
    const handleBlur = (e) => {
        handleChange(e)
        setErrorBlur(validateForm(tiket))
    }

    const validateForm = (campoForm) => {
        const errors = {
            name: '',
            email: '',
            telephone: '',
            card: '',
            month: '',
            year: '',
            cvv: '',
        }
        const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
        const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/
        const regexCard = /^.{8}$/
        const regexMoth = /^.{2}$/
        const regexYear = /^.{2}$/
        const regexCvv = /^.{3}$/


        if (!campoForm.name.trim()) {
            console.log("error Campo", campoForm);
            errors.name = "❌ El campo Name es requerido";
        }
        if (!campoForm.email.trim()) {
            console.log("error Campo", campoForm);
            errors.email = "❌ El campo Email es requerido";
        }
        if (!campoForm.telephone.trim()) {
            console.log("error Campo", campoForm);
            errors.telephone = "❌ El campo Telephone es requerido";
        }
        if (!campoForm.card.trim()) {
            console.log("error Campo", campoForm);
            errors.card = "❌ El campo Card es requerido";
        }
        if (!campoForm.month.trim()) {
            console.log("error Campo", campoForm);
            errors.month = "❌ 📅";
        }
        if (!campoForm.year.trim()) {
            console.log("error Campo", campoForm);
            errors.year = "❌ 🧨";
        }
        if (!campoForm.cvv.trim()) {
            console.log("error Campo", campoForm);
            errors.cvv = "❌ 💳";
        }


        return errors
    }

    console.log("blur name ", erorBlur.name == undefined ? "esta vacio" : erorBlur)
    // console.log(carrito)
    return (
        <>{
            !activaModal
                ? <section className='cartContainer'>
                    <Link to='/' className='linkComprar'> <ion-icon name="arrow-back-outline"></ion-icon> seguir comprando</Link>
                    {
                        cartList.length == 0
                            ? <section className='cartVacio'>
                                <h2>cart vacio</h2>
                            </section>
                            : <section className='containCarrito'>
                                <CartButtons seccion={seccion} handleButtonComprar={handleButtonComprar} />
                                <ItemCartList />
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

                            <CartFormCompra handleComprar={handleComprar} handleChange={handleChange} handleBlur={handleBlur} error={erorBlur} />
                        </section>
                        <button className='closeModal' onClick={handleButtonComprar}><ion-icon name="close-outline"></ion-icon></button>
                    </div>
                </section>
        }</>
    )
}

export default CartContain