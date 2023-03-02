import React, { useState } from 'react'
import { useCartContext } from '../../context/CartContext'

const FormRegister = () => {

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
    <form className='formRegister' action="" onSubmit={handlesubmit}>
      <h2>😎 register</h2>
      <input type="text" name='nombre' id='nombre' placeholder='nombre' onChange={handleChange} required />
      <input type="password" name="pasword" id="pasword" placeholder='password' onChange={handleChange} required />
      <input type="email" name="email" id="email" placeholder='email' onChange={handleChange} required />
      <input type="number" name="edad" id="edad" onChange={handleChange} placeholder='edad' min={18} max={100} />

      <button className='entrar' type='submit'>register</button>
    </form>
    </>
  )
}

export default FormRegister
