import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext';

const UserWidget = () => {
  const { user, login, handleLoginarse } = useCartContext();
  const [valor, setValor] = useState(false)
  const [claseAct, setClaseAct] = useState('')

  const handleActive = (e) => {
    e.preventDefault()
    setValor(!valor)
  }

  useEffect(() => {
    setClaseAct(valor ? 'active' : '')

    !valor ? handleLoginarse(false) : handleLoginarse(true)

  }, [valor, login])

  return (
    <>
      <section className='userLogin'>
        <Link to='/' className={`userCountLog ${claseAct}`} onClick={handleActive}>
          {
            (user) ? <img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1667461454/icons/pinguino10_w1tbcm.gif" alt="giff chrmander dibujo" />
            : <ion-icon name="person"></ion-icon>
          }
        </Link>
      </section>
    </>
  )
}

export default UserWidget