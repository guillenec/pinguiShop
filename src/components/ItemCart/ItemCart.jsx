import React from 'react'
import { useState } from 'react';

const ItemCart = ({ element , operaSobreCart }) => {
    const {id:id, nombre:nombre, precio:precio, comprado:comprado, stock:stock, descripcion:describe, imagenA:img1, precioTotal:precioTotal} = element;

    const nuevoElement = {'id':id, 'precio':precio, 'comprado':1}
    console.log("NUEVO PROD: ",nuevoElement)
    console.log("ELEMENT PARAM: ",element)


    const sumaProd = (e) => {
        // console.log(e)
        // console.log(stock, cantidadProd);
        (stock <= element.comprado) ? e.preventDefault() : operaSobreCart(nuevoElement, "suma");
    }
    
    const restaProd = (e) => {
        (element.comprado <= 0) ? e.preventDefault() : operaSobreCart(nuevoElement, "resta")
    }

    return (
        <>  <section className='conteinProd'>
            <div className='contImagen'>
            <img src={img1} alt={describe} />
            </div>
            
            <section className='descripcion'>
                <h2>🥰 {nombre}</h2>
                <p>{describe}</p>
                <button className='remove'>remove</button>
            </section>
            <section className='formProds'>
                <div className='sumaResta'>  
                    <button className='restaProd' onClick={restaProd} ><ion-icon name="remove-sharp"></ion-icon></button>
                    <p>{element.comprado}</p>
                    <button className='sumaProd' onClick={sumaProd} ><ion-icon name="add-sharp"></ion-icon></button>
                </div>
            </section>
            <section className='precio'><p>${precioTotal}</p></section>
            </section>
        </>
    )
}

export default ItemCart

//rafce

