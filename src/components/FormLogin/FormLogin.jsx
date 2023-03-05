import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const FormLogin = () => {
  const { loginForm, loginGoogle, login, handleLoginarse, recoverPassword, notify, errToast } = useCartContext()

  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  // const navigate = useNavigate()

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await loginForm(user.email, user.password)
      navigate('/')
    }
    catch (error) {
      const errorCode = error.code;
      console.log(errorCode)


      // console.log(errorCode)
      // console.log(errorMessage)
    }
  }

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user, [name]: value
    })
  }
  const handleGoogleLog = async () => {
    await loginGoogle()
    navigate('/')
  }

  const handleRestartPass = (e) => {
    e.preventDefault()
    if (!user.email) {
      errToast("ingresa tu email") 
    } else {
      recoverPassword(user.email)
    }
  }

  return (
    <>
      <form className='formLogin' action="" onSubmit={handlesubmit}>
        <h2>😎 login</h2>
        <input type="email" name="email" id="email" placeholder='@email' onChange={handleChange} required />
        <input type="password" name="password" id="password" placeholder='password' onChange={handleChange} required />
        <div>
          <button className='entrar' type='submit'>login</button>
          <a className='recuperar' onClick={handleRestartPass}>recover password</a>
        </div>

      </form>
      <button className='loginGooogle' onClick={handleGoogleLog}>login google</button>
    </>
  )
}

export default FormLogin