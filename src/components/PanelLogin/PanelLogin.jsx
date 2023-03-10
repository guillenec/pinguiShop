import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import FormLogin from '../FormLogin/FormLogin';
import FormRegister from '../FormRegister/FormRegister';

const PanelLogin = () => {
  const {user} = useCartContext()
  const [valor, setValor] = useState(false)
  const [textForm, setTextForm] = useState('register')
  const [clase, setClase] = useState('')

  const [activaLog, setActivaLog] = useState(false)

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

  const refElementLog = useRef()

  useEffect(() => {
    //evento click al documento
    document.addEventListener("click", handleClick)

    //eliminamos el evento del documento cuando el componente se desmonta
    return () => { 
      document.removeEventListener("click", handleClick)
    }

  }, [])

  const handleClick = (e) => {
    if (refElementLog.current.contains(e.target)){
      console.log(true)
      return
    }
    //desactiva el componente si se cliqueo fuera
    setActivaLog(false)
    console.log(activaLog);
  }

  return (
    <> 
    { user == null 
      ? (
        <section ref={refElementLog} className={`login ${clase}`}>
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