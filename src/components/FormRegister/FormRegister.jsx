import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useCartContext } from '../../context/CartContext'
import ToastifyAlert from '../ToastifyAlert/ToastifyAlert'

const FormRegister = () => {

  const { signUp } = useCartContext()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })

  const handlesubmit = (e) => {
    e.preventDefault(); 
    signUp(user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })
  }

  const handleChange = ({ target: { name, value } }) => {
    setUser({
      ...user, [name]: value
    })
  }

  return (
    <>
      <form className='formRegister' action="" onSubmit={handlesubmit}>
        <h2>😎 register</h2>
        <input type="email" name="email" id="email" placeholder='email' onChange={handleChange} required />
        <input type="password" name="password" id="password" placeholder='password' onChange={handleChange} required />
        <button className='entrar' type='submit'>register</button>
      </form>
    </>
  )
}

export default FormRegister


//admin - user: root@gmail.com pass:sudo-suroot