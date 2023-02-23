import React from 'react'

const ItemLike = (objeto) => {
    console.log(" element ::: ",objeto)

    return (
        <>
            <section className='conteinProd'>
                <div className='contImagen'>
                    <img src={objeto.imgagenA} alt={objeto.descripcion} />
                </div>

                <section className='descripcion'>
                    <h2>🥰 {objeto.nombre}</h2>
                    <p>{objeto.descripcion}</p>
                </section>
                <section className='precio'><p>${objeto.precio}</p></section>
            </section>
        </>
    )
}

export default ItemLike