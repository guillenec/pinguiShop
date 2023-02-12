import React from 'react'

const ItemCart = ({ element }) => {
    const {id:id, nombre:nombre, precio:precio, comprado:comprado, stock:stock, descripcion:describe, imagenA:img1} = element;

    return (
        <>
            <img src={img1} alt={describe} />
            <section className='descripcion'>
                <h2>#{id} {nombre}</h2>
                <p>{describe}</p>
                <button className='remove'>remove</button>
            </section>
            <section className='formProds'>
            
            </section>
            <section className='precio'><p>${precio}</p></section>

        </>
    )
}

export default ItemCart

//rafce

