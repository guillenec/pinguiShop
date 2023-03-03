import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const FormRegister = () => {
  const {signUp, login, handleLoginarse,notify, errToast } = useCartContext()

  const [user, setUser] = useState({
    email: '',
    password: '',
    phone:'',
    name:''
  })

  const navigate = useNavigate()

  const handlesubmit = (e) => {
    e.preventDefault(); 
    signUp(user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email)

        handleLoginarse(false)
        console.log("valor de login ",login)
        
        notify(`se registro con exito: ${user.email}`)
        setTimeout(() => {
          navigate('/') //permite al ejecutarse bien la promesa diurigirnos hacia la raiz
        }, 1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        error.code === 'auth/email-already-in-use' && errToast("❌ el correo ya fue registrado") || error.code === 'auth/weak-password' &&  errToast("❌ como minimo ursar 6 caracteres para el password") 
        || errToast(error.message)

        console.log(errorCode)
        console.log(errorMessage)
      })
      .finally(()=>{
        setTimeout(() => {
          notify("✔ fin")
        }, 2000);
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
        <input type="tel" name="phone" id="phone" placeholder='phone'/>
        <input type="text" name="name" id="name" placeholder='name'/>
        <button className='entrar' type='submit'>register</button>
      </form>
    </>
  )
}

export default FormRegister


//admin - user: root@gmail.com pass:sudo-suroot