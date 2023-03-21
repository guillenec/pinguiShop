import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'

const FormRegister = () => {
  const { signUp, login, handleLoginarse, notify, errToast } = useCartContext()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const [erorBlur, setErrorBlur] = useState({})
  const [errorFormEnvio, setErrorFormEnvio] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {

    (!Object.values(erorBlur).some(val => val !== '')) ? setErrorFormEnvio(false) : setErrorFormEnvio(true)

  }, [erorBlur])

  const purchaseHandler = (e) => {
    e.preventDefault()

    if (!errorFormEnvio) {
      handlesubmit()

    } else {
      console.log("errores tipeo")
    }
  }

  const handlesubmit = (e) => {
    // e.preventDefault()

    signUp(user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user.email)

        handleLoginarse(false)
        console.log("valor de login ", login)

        notify(`se registro con exito: ${user.email}`)
        setTimeout(() => {
          navigate('/') //permite al ejecutarse bien la promesa diurigirnos hacia la raiz
        }, 1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        error.code === 'auth/email-already-in-use' && errToast("❌ el correo ya fue registrado") || error.code === 'auth/weak-password' && errToast("❌ minimo 6 caracteres para el password")
          || errToast(error.message)

        console.log(errorCode)
        console.log(errorMessage)
      })
      .finally(() => {
        setTimeout(() => {
          notify("✔ fin")
        }, 2000);
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user, [name]: value
    })
  }

  const handleBlur = (e) => {
    handleChange(e)
    setErrorBlur(validateForm(user))
  }

  const validateForm = (campoForm) => {
    const errors = {
      email: '',
      password: '',
    }

    const regexEmail = /^(\w+[./-]?)*\w+@[a-z]+[/.]\w{2,}$/i
    const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/

    if (!campoForm.email.trim()) {
      errors.email = "❌ El campo Email es requerido";
    } else if (!regexEmail.test(user.email.trim())) {
      errors.email = "❌ ⌨ email incorrecto";
    }

    else if (!campoForm.password.trim()) {
      errors.password = "❌ El campo password es requerido";
    } else if (!regexPassword.test(user.password.trim())) {
      errors.password = "❌ ⌨ Debe tener 8 - 16 caracteres, 1 digito, 1 minuscula, 1 mayuscula";
    }
    return errors
  }

  return (
    <>
      <form className='formRegister' action="" onSubmit={purchaseHandler}>
        <h2>😎 register</h2>
        <label htmlFor="email">
        📫 Email
          <input type="email" name="email" id="email" placeholder='email' onChange={handleChange} onBlur={handleBlur} required />
          {erorBlur.email && <p className='errorForm'>{erorBlur.email}</p>}
        </label>
        <label htmlFor="password">
        🔑 Password
          <input type="password" name="password" id="password" placeholder='password' onChange={handleChange} onBlur={handleBlur} required />
          {erorBlur.password && <p className='errorForm'>{erorBlur.password}</p>}
        </label>
        <button className='entrar' type='submit'>register</button>

        {errorFormEnvio ? <p className='error'>❌❌❌ ahún quedan errores</p> : <p className='verificado'>✔✔✔ Datos Validos</p>}
      </form>
    </>
  )
}

export default FormRegister


//admin - user: root@gmail.com pass:sudo-suroot