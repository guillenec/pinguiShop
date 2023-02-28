import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'



const PanelRoot = () => {

  const [valor, setValor] = useState(false)
  const [claseAct, setClaseAct] = useState('')

  const handleActive = () => {
    setValor(!valor)
    setClaseAct(valor ? '' : 'active')
    // ${(valor) ? 'active' : '' }
  }

  useEffect(() => {
    console.log(valor)
  }, [valor])

  return (
    <>
      <section className='panelRoot'>
        <Link to={'/'} className={`panelConfig ${claseAct}`} onClick={handleActive}>
          <ion-icon name="construct-sharp"></ion-icon>
        </Link>
      </section>
    </>
  )
}

export default PanelRoot