import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';

const Logout = () => {
  const { user, login } = useCartContext();
  const [valor, setValor] = useState(false)

  const handleActive = (e) => {
    e.preventDefault()
    setValor(!valor)
  }

  useEffect(() => {


  }, [valor, login])

  return (
    <>
      <section className='logout'>
        <Link to={''} onClick={handleActive}><ion-icon name="exit"></ion-icon></Link>
      </section>
    </>
  )
}

export default Logout