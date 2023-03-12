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

    const [erorBlur, setErrorBlur] = useState({})
    const [errorFormEnvio, setErrorFormEnvio] = useState(false)


    useEffect(() => {
        user == null || user == undefined ? setBolano(false) : setBolano(true)

    }, [user])

    const navigate = useNavigate()

    //escucha el blur para la comprovacion del error
    useEffect(() => {

        (!Object.values(erorBlur).some(val => val !== '')) ? setErrorFormEnvio(false) : setErrorFormEnvio(true)
    
    },[erorBlur])

    const handleComprar = (e) => {
        e.preventDefault()

        if (!errorFormEnvio) {
            const ordenCmpra = {
                buyer: tiket,
                items: cartList.map((elem => ({ id: elem.id, titulo: elem.nombre, precio: elem.precioTotal }))),
                ...precioTotalCart
            }

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
                    // console.log("FINALY...")
                    setTimeout(() => {
                        handleButtonComprar()
                        vaciarCarrito()
                        navigate('/tiket')
                    }, 5000);

                })
        } else {
            console.log("errores tipeo")
        }
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


    const handleChange = (e) => {
        const { name, value } = e.target
        setTiket({
            ...tiket, [name]: value
        })
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
        const regexEmail = /^(\w+[./-]?)*\w+@[a-z]+[/.]\w{2,}$/i
        const regexTelephone = /^\d{4}-\d{6}$/
        const regexCard = /^\d{4}([- ])?\d{4}\1\d{4}\1\d{4}$/
        const regexMoth = /^\d{2}$/;
        const regexYear = /^\d{2}$/;
        const regexCvv = /^\d{3}$/;


        if (!campoForm.name.trim()) {
            errors.name = "❌ El campo Name es requerido";
        } else if (!regexName.test(tiket.name.trim())) {
            errors.name = "❌ ⌨ Solo letras y espacios";
        }

        else if (!campoForm.email.trim()) {
            errors.email = "❌ El campo Email es requerido";
        } else if (!regexEmail.test(tiket.email.trim())) {
            errors.email = "❌ ⌨ email incorrecto";
        }

        else if (!campoForm.telephone.trim()) {
            errors.telephone = "❌ El campo Telephone es requerido";
        } else if (!regexTelephone.test(tiket.telephone.trim())) {
            errors.telephone = "❌ ⌨ max 6 numeros \"-\" obligatorio:  XXXX-XXXXXX";
        }

        else if (!campoForm.card.trim()) {
            errors.card = "❌ El campo Card es requerido";
        } else if (!regexCard.test(tiket.card.trim())) {
            errors.card = "❌ ⌨ 💳 Formato de tarjeta invalida";
        }

        else if (!campoForm.month.trim()) {
            errors.month = "❌ 💳 requiere";
        } else if (!regexMoth.test(tiket.month.trim())) {
            errors.month = "❌ 💳 min 2 numero";
        }

        else if (!campoForm.year.trim()) {
            errors.year = "❌ 💳 requiere";
        } else if (!regexYear.test(tiket.year.trim())) {
            errors.year = "❌ 💳 min 2 number";
        }

        else if (!campoForm.cvv.trim()) {
            errors.cvv = "❌ 💳 requiere";
        } else if (!regexCvv.test(tiket.cvv.trim())) {
            errors.cvv = "❌ 💳 3 valores XXX";
        }

        return errors
    }

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

                            <CartFormCompra handleComprar={handleComprar} handleChange={handleChange} handleBlur={handleBlur} error={erorBlur} errorFormEnvio={errorFormEnvio} />
                        </section>
                        <button className='closeModal' onClick={handleButtonComprar}><ion-icon name="close-outline"></ion-icon></button>
                    </div>
                </section>
        }</>
    )
}

export default CartContain