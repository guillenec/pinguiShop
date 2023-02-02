import React, { useState } from 'react'

const ItemCount = ({objeto2}) => {

  const [cantidadProd, setCantidadProd] = useState({
    cantidad: 0
  });
  
  const { id: ident, nombre: nombre, descripcion: describe, stock: stock, precio: precio, descuento: descuento, genero: genero, tipo: tipo, imagenA: img1, imagenB: img2, imagenC: img3, imagenD: img4, clave1: cl1, clave2: cl2, clave3: cl3 } = objeto2;

  const handleChange = (e) => {
    // const num = e.target.name;
    // const value = e.target.value;
    const { name, value } = e.target;
    // console.log(num,value)

    setCantidadProd((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = (e) => { //
    e.preventDefault()
    console.log(cantidadProd.cantidad) //despues puedo remplazarlo
    return cantidadProd.cantidad
  }

  return (
    <>
      <form className="formCantidad" onSubmit={handleSubmit}>
        <label className="labelCantidad" htmlFor="cantidad">cantidad
          <input
            className="inputCantidad"
            id="cantidad"
            name="cantidad"
            type="number"
            min={1} max={stock}
            onChange={handleChange}
            value={cantidadProd.cantidad || 0}
          />
        </label>


        <button type="submit">comprar</button>
      </form>
    </>
  )
}
export default ItemCount