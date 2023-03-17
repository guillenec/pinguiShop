import React from 'react'
import { useCartContext } from '../../context/CartContext'

const CartButtons = ({seccion, buyButtonHandler}) => {
  const { vaciarCarrito } = useCartContext()

  return (
    <>
      <h1>Mi carrito</h1>
      <section className="botonraCompra">
        <button className='vaciar' onClick={vaciarCarrito}><ion-icon name="trash"></ion-icon> vaciar </button>
        <button className='vaciar' onClick={buyButtonHandler}><ion-icon name="card-outline"></ion-icon> confirmar compra </button>

        {(seccion == true) ? <h2 className='userNoLogin'>Debe loguiarse para poder comprar!!!</h2> : null}
      </section>
    </>
  )
}

export default CartButtons