import React, { useState } from 'react'
import ItemCountRedirect from '../ItemCountRedirect/ItemCountRedirect';


const ItemCount = ({ producto, inicial, stock, onAdd }) => {

  const [cantidadProd, setCantidadProd] = useState(inicial);

  const [inputType, setInputType] = useState('')

  const handleInter = () => {
    setInputType('botonRedirige');
    setCantidadProd(0);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setCantidadProd(value)
  }

  const handleOnaAdd = (e) => { //
    e.preventDefault();
    e.stopPropagation();
    onAdd(producto, cantidadProd, producto.precio)

    setTimeout(() => {
      handleInter();
    }, 2000);
    // return cantidadProd.cantidad
  }

  const sumarProd = (e) => {
    (stock <= cantidadProd) ? e.preventDefault() : setCantidadProd(cantidadProd + 1);
  }

  const restProd = (e) => {
    (cantidadProd <= 0) ? e.preventDefault() : setCantidadProd(cantidadProd - 1)
  }

  return (
    <>
      <form className="formCantidad" onSubmit={handleOnaAdd}>
        <label className="labelCantidad" htmlFor="cantidad">
          <p>cantidad</p>
          <div className="botonesCantidad">
            <a className='restProd' onClick={restProd}><ion-icon name="remove"></ion-icon></a>
            <p>{cantidadProd}</p>
            <a className='sumProd' onClick={sumarProd}><ion-icon name="add"></ion-icon></a>
          </div>
        </label>
        <button type="submit" >agregar</button>
      </form>
      {
        inputType === 'botonRedirige' && <ItemCountRedirect/>
      }

    </>
  )
}

export default ItemCount