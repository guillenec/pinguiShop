import React from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemCart = ({ element }) => {
    const {id:id, nombre:nombre, precio:precio, descripcion:desc, imagenA:img1} = element;

    return (
        <div key={id} className="containContent">
            <img src={img1} alt={desc} />
            <section className='descripcion'>
                <h2>{nombre}</h2>
                <p>{desc}</p>
                <button className='remove'>remove</button>
            </section>
            <section>
                <ItemCount objeto2={element}/>
            </section>
        </div>
    )
}

export default ItemCart

//rafce