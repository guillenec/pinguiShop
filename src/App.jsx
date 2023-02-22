import { useState } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import './App.scss'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Toggle from './components/Toggle/Toggle'

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContain from './components/CartContainer/CartContain';
import { createContext } from 'react';
import { CartContextProvider } from './context/CartContext';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormPushProduct from './components/FormPushProduct/FormPushProduct';

// creando constante
//

function App() {
  const saludo = 'productos'

  return (

    <BrowserRouter>
      <CartContextProvider>
        <div className="App">

          <header className="header">
            <NavBar>
              <Toggle />
            </NavBar>
          </header>

          <main className="main">
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={saludo} />} />
              <Route path='/categoria/:idCategoria' element={<ItemListContainer greeting={saludo} />} />

              <Route path='/detalle/:idProducto' element={<ItemDetailContainer />} />
              
              <Route path='/like'  />
              <Route path='/cart' element={<CartContain />} />

              <Route path='/formProduct' element={<FormPushProduct />} />

              <Route path='*' element={<Navigate to='/'></Navigate>} />
              
            </Routes>

          </main>
          <footer className="footer"></footer>
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light" />
      </CartContextProvider>
    </BrowserRouter>

  )
}

export default App

//min 1:20