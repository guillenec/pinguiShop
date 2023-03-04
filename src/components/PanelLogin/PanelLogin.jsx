import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import FormLogin from '../FormLogin/FormLogin';
import FormRegister from '../FormRegister/FormRegister';

const PanelLogin = () => {
  const {user} = useCartContext()
  const [valor, setValor] = useState(false)
  const [textForm, setTextForm] = useState('register')
  const [clase, setClase] = useState('')

  setTimeout(() => {
    setClase('visible')
  }, 100);

  const handleActive = (e) => {
    e.preventDefault()
    setValor(!valor)
  }

  useEffect(() => {
    setTextForm(valor ? 'ir a login' : 'ir a register')

  }, [valor])

  return (
    <> 
    { user == null 
      ? (
        <section className={`login ${clase}`}>
        {
          valor == false ? <FormLogin /> : <FormRegister />
        }
        <Link to={''} onClick={handleActive}>{textForm}</Link>
      </section>
      ) 
    : null  }
      
    </>
  )
}

export default PanelLogin