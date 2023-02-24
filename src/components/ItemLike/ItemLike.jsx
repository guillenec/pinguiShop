import React, { useEffect } from 'react'
import { useCartContext } from '../../context/CartContext'

const ItemLike = ({ objeto }) => {

    const { agregaAMeGusta, agregaAlCarrito, cartList } = useCartContext()

    const handleLike = () => {
        agregaAMeGusta(objeto)
    }

    // console.log("mE gusta ::: ",meGusta)
    const onAdd = () => {
        if (cartList.some(elem => (elem.id === objeto.id && elem.nombre === objeto.nombre))) {
            //traemos el objeto que ya exisste en el cart y coincide
            const objeto2 = cartList.find(elem => elem.id === objeto.id)
            console.log(objeto2);
            console.log(objeto2.stock, objeto2.comprado)
            if (objeto2.stock >= objeto2.comprado) {
                agregaAlCarrito(
                    {
                        ...objeto,
                        comprado: 1,
                        precioTotal: objeto.precio * 1
                    })
            }
        }else{
                agregaAlCarrito(
                    {
                        ...objeto,
                        comprado: 1,
                        precioTotal: objeto.precio * 1
                    })           
        }

    }

    // console.log(objeto)

    return (
        <>
            <section className='elementLikeContain'>
                <div className='contImagen'>
                    <img src={objeto.imagenA} alt={objeto.id} />
                </div>

                <section className='descripcion'>
                    <h2>🥰 {objeto.nombre}</h2>
                    <p># {objeto.id}</p>
                </section>
                <section className='precio'>
                    <p>${objeto.precio}</p>
                    <button onClick={onAdd} className='comprar'>comprar</button>
                </section>
                <button className='noHeart' onClick={handleLike} ><ion-icon name="heart-dislike-outline"></ion-icon></button>
            </section>
        </>
    )
}

export default ItemLike