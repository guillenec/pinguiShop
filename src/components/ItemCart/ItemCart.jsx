import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemCart = ({ element }) => {
    const {id:id, nombre:nombre, precio:precio, descripcion:desc, imagenA:img1} = element;

    return (
        <>
            <img src={img1} alt={desc} />
            <section className='descripcion'>
                <h2>{nombre}</h2>
                <p>{desc}</p>
                <button className='remove'>remove</button>
            </section>
            <section className='formProds'>
                <ItemCount objeto2={element}/>
            </section>
            <section className='precio'><p>${precio}</p></section>
        </>
    )
}

export default ItemCart

//rafce