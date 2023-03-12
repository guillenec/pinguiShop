import React from 'react'

const CartFormCompra = ({ handleComprar, handleChange, handleBlur, error }) => {
  return (
    <>
      <form className='containPaymentMethod' onSubmit={handleComprar}>
        <h2>Metodo de pago</h2>
        <label htmlFor="name">
          name
          <input type="text" name='name' placeholder='name' onChange={handleChange} onBlur={handleBlur} required />
          {error.name && <p className='errorForm'>{error.name}</p>}
        </label>
        <label htmlFor="email">
          email
          <input type="email" name="email" id="email" placeholder='email@gmail.com' onChange={handleChange} onBlur={handleBlur} required />
          {error.email && <p className='errorForm'>{error.email}</p>}
        </label>
        <label htmlFor="tel">
          telefono
          <input type="tel" name="telephone" pattern="\ [0-9]{4}[ -][0-9]{6}}" placeholder='2944-123123' onChange={handleChange} onBlur={handleBlur} required />
          {error.telephone && <p className='errorForm'>{error.telephone}</p>}
        </label>
        <label htmlFor="card">
          numero de tarjetas
          <input type='number' name="card" id="card" placeholder='XXXX XXXX XXXX 1234' pattern="\([0-9]{4}\) [0-9]{4}[ -][0-9]{4}" onChange={handleChange} onBlur={handleBlur} required />
          {error.card && <p className='errorForm'>{error.card}</p>}
        </label>
        <div className='expired'>
          <label className='labelExpired'>
            Vencimiento
            <div className='datosCardC'>
              <div className='monthExpiration'>
                <input type="number" name="month" id="month" min={0} max={12} placeholder="MM" onChange={handleChange} onBlur={handleBlur} required />
                {error.month && <p className='errorForm'>{error.month}</p>}
              </div>
              <div className='yearExpiration'>
                <input type="number" name="year" id="year" min={22} max={30} placeholder="YY" onChange={handleChange} onBlur={handleBlur} required />
                {error.year && <p className='errorForm'>{error.year}</p>}
              </div>
            </div>
          </label>
          <label htmlFor="">
            CVV
            <input type="number" name='cvv' placeholder={123} onChange={handleChange} onBlur={handleBlur} required />
            {error.cvv && <p className='errorForm'>{error.cvv}</p>}
          </label>
        </div>
        <button className='entrar' type='submit'>finalizar compra</button>

      </form>

    </>
  )
}

export default CartFormCompra