import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const FormLogin = () => {
  const {loginForm, loginGoogle, login, handleLoginarse ,notify, errToast} = useCartContext()

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
      console.log(error)
        const errorCode = error.code;
        const errorMessage = error.message;
        error.code === 'auth/wrong-password' &&  errToast("❌ contraseña incorrecta")  || error.code === 'auth/user-not-found' && errToast('❌ el usuario no existe o no esta registrado')
        || errToast(error.message)
      }
  }

  const handleChange = ({target:{name,value}}) => {
    setUser({
      ...user, [name]:value
    })
  }
  const handleGoogleLog = async () => {
    await loginGoogle()
    navigate('/')
  }

  return (
    <>
      <form className='formLogin' action="" onSubmit={handlesubmit}>
        <h2>😎 login</h2>
        <input type="email" name="email" id="email" placeholder='@email' onChange={handleChange} required/>
        <input type="password" name="password" id="password" placeholder='password' onChange={handleChange} required />
        <button className='entrar' type='submit'>login</button>
      </form>
      <button className='loginGooogle' onClick={handleGoogleLog}>login google</button>
    </>
  )
}

export default FormLogin