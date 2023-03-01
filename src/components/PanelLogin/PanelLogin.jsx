import React, { useState } from 'react'

const PanelLogin = () => {
  const [clase, setClase] = useState('')
  setTimeout(() => {
    setClase('visible')
  }, 100);
  
  return (
    <>
      <section className={`login ${clase}`}>
        <form action="">
          <h1>😎 login</h1>
        </form>
      </section>
    </>
  )
}

export default PanelLogin