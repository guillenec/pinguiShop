import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({ objeto2 }) => {

  const { id: ident, nombre: nombre, descripcion: describe, stock: stock, precio: precio, descuento: descuento, genero: genero, tipo: tipo, imagenA: img1, imagenB: img2, imagenC: img3, imagenD: img4, clave1: cl1, clave2: cl2, clave3: cl3 } = objeto2;


  const [cantidadProd, setCantidadProd] = useState(0);
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

  const onaAdd = (e) => { //
    e.preventDefault();
    e.stopPropagation();
    // console.log(cantidadProd) //despues puedo remplazarlo
    notify(cantidadProd, nombre);

    setTimeout(() => {
      handleInter();
    }, 5000);
    // return cantidadProd.cantidad
  }

  const notify = (numer, name) => toast.success(`🥰🥰 compraste ${numer} ${name}`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const sumarProd = (e) => {
    // console.log(e)
    console.log(stock, cantidadProd);
    (stock <= cantidadProd) ? e.preventDefault() : setCantidadProd(cantidadProd + 1);
  }

  const restProd = (e) => {
    (cantidadProd <= 0) ? e.preventDefault() : setCantidadProd(cantidadProd - 1)

  }

  return (
    <>
      <form className="formCantidad" onSubmit={onaAdd}>
        <label className="labelCantidad" htmlFor="cantidad">
          <p>cantidad</p>
          <div className="botonesCantidad">
            <a className='restProd' onClick={restProd}><ion-icon name="remove"></ion-icon></a>
            <input
              className="inputCantidad"
              id="cantidad"
              name="cantidad"
              type="number"
              min={1} max={stock}
              onChange={handleChange}
              value={cantidadProd}
            />
            <a className='sumProd' onClick={sumarProd}><ion-icon name="add"></ion-icon></a>
          </div>
        </label>
        <button type="submit" >agregar</button>
      </form>
      {
        inputType === 'botonRedirige' && <Redirige/>
      }

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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