import React from 'react'
import { useCartContext } from '../../context/CartContext'

const TiketCompra = () => {
  const {facturaCompra} = useCartContext()
  console.log("--++FACTURACION: ",facturaCompra)
  return (
    <div>
      <h2>TiketCompra</h2>
      <p>{facturaCompra.id}</p>

    </div>
  )
}

export default TiketCompra