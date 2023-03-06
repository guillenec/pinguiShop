import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const ItemCount = ({ producto, inicial, stock, onAdd }) => {

  const [cantidadProd, setCantidadProd] = useState(inicial);

  const [inputType, setInputType] = useState('')

  const handleInter = () => {
    setInputType('botonRedirige');
    setCantidadProd(0);
  }

  const handleChange = (e) => {
    // const num = e.target.name;
    // const value = e.target.value;
    // console.log(e)
    const { value } = e.target;
    // const { name, value } = e.target;
    // console.log(num,value)
    console.log(value)
    setCantidadProd(value)

    // setCantidadProd((prev) => {
    //   return { ...prev, [name]: value }
    // })
  }

  const handleOnaAdd = (e) => { //
    e.preventDefault();
    e.stopPropagation();
    onAdd(producto, cantidadProd, producto.precio)

    // // console.log(cantidadProd) //despues puedo remplazarlo
    // notify(cantidadProd, nombre);

    setTimeout(() => {
      handleInter();
    }, 2000);
    // return cantidadProd.cantidad
  }

  const sumarProd = (e) => {
    // console.log(e)
    // console.log(stock, cantidadProd);
    (stock <= cantidadProd) ? e.preventDefault() : setCantidadProd(cantidadProd + 1);
  }

  const restProd = (e) => {
    (cantidadProd <= 0) ? e.preventDefault() : setCantidadProd(cantidadProd - 1)
  }

  console.log("Render : ItemCount")

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
        inputType === 'botonRedirige' && <Redirige />
      }

    </>
  )
}

const Redirige = () => {
  return (
    <div className='botonRedireccion'>
      <Link to='/'> seguir comprando </Link>
      <Link to='/cart' >carrito</Link>
    </div>
  )
}

export default ItemCount