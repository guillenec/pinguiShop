import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { createUserWithEmailAndPassword } from "firebase/auth";

const FormLogin = () => {

  const {signUp} = useCartContext()

  const [user, setUser] = useState({
    email:'',
    password:''
  })

  const handlesubmit = (e) => {
    e.preventDefault()
    signUp(user.email, user.password)
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