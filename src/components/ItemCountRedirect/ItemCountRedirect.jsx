import React from 'react'
import { Link } from 'react-router-dom'

const ItemCountRedirect = () => {
  return (
    <>
      <div className='botonRedireccion'>
        <Link to='/'> seguir comprando </Link>
        <Link to='/cart' >carrito</Link>
      </div>
    </>
  )
}

export default ItemCountRedirect