import React, { useEffect, useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { async } from '@firebase/util';

const TiketCompra = () => {
  const { invoicePurchase } = useCartContext()
  const [compra, setCompra] = useState([]) //estado inicial array vacio

  const identificador = invoicePurchase.id;

  useEffect(() => {
    if(invoicePurchase.id !== undefined) {
      traer()
    }
  }, [])

  const traer = async () => {
    const db = getFirestore()
    const docRef = doc(db, "tiketsCompra", identificador)

    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      setCompra({ id: docSnap.id, ...docSnap.data() })
    } 
  }

  return (
    <>
    {
      invoicePurchase.id !== undefined ? (
      <div className='ContainerTiketPurchase'>
        <h2>Tiket de compra</h2>
        <section className='tiketPurchase'>
          <section className='cuadriculado'>
            <h3>{compra.id}</h3>
            <p><strong>Iva:</strong> ${compra.iva}</p>
            <p><strong>Sub total:</strong> ${compra.subTotal}</p>
            <p><strong>Precio Final:</strong> ${compra.precioFinal}</p>

          </section>
        </section>

      </div>
      )
      : <h2> no hay tiket</h2>
    }

    </>
  )
}

export default TiketCompra