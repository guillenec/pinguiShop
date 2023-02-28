import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const UserWidget = () => {
  const [valor, setValor] = useState(false)
  const [claseAct, setClaseAct] = useState('')

  const handleActive = () => {
    setValor(!valor)
    setClaseAct(valor ? '' : 'active')
    // ${(valor) ? 'active' : '' }
  }
  
  useEffect(()=>{
    console.log(valor)
  },[valor])

  return (
    <>
      <section className='userLogin'>
        <Link to='/' className={`userCountLog ${claseAct}`} onClick={handleActive}>
          {
            (claseAct == "active") ? <img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1667461454/icons/pinguino10_w1tbcm.gif" alt="giff chrmander dibujo" />
            : <ion-icon name="person-sharp"></ion-icon> 
          }       
        </Link>
      </section>
    </>
  )
}

export default UserWidget