import { useState } from 'react'
import './App.scss'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/CartWidget/CartWidget '
import Toggle from './components/Toggle/Toggle'

function App() {

  const saludo = 'bienvenido user' 
  return (
    <div className="App">

      <header className="header">
        <NavBar>
          <Toggle/>
        </NavBar>
      </header>
      <main className="main">
        <ItemListContainer greeting={saludo}/>
      </main>
      <footer className="footer"></footer>
    </div>
  )
}

export default App
