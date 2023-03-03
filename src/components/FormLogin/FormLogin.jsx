import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from "react-toastify"
import { useCartContext } from '../../context/CartContext'

const FormLogin = () => {
  const {loginForm, login, handleLoginarse ,notify, errToast} = useCartContext()

  const [user, setUser] = useState({
    email:'',
    password:''
  })

  const navigate = useNavigate()

  // const navigate = useNavigate()

  const handlesubmit = async (e) => {
    e.preventDefault(); 
    try {
      await loginForm(user.email, user.password)
      navigate('/') 
    }
    catch(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        error.code === 'auth/email-already-in-use' && errToast("❌ el correo ya fue registrado") || error.code === 'auth/weak-password' &&  errToast("❌ como minimo ursar 6 caracteres para el password") 
        || errToast(error.message)

        console.log(errorCode)
        console.log(errorMessage)
      }
  }

  const handleChange = ({target:{name,value}}) => {
    setUser({
      ...user, [name]:value
    })
  }

  return (
    <>
      <form className='formLogin' action="" onSubmit={handlesubmit}>
        <h2>😎 login</h2>
        <input type="email" name="email" id="email" placeholder='@email' onChange={handleChange} required/>
        <input type="password" name="password" id="password" placeholder='password' onChange={handleChange} required />
        <button className='entrar' type='submit'>login</button>
      </form>
    </>
  )
}

export default FormLogin