import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { getProds } from '../../gFetch'
import ItemCount from '../ItemCount/ItemCount'


const CartContain = () => {
    const [carrito, setProdsCarrito] = useState()
    //#region Array Productos Comprados
    //el sig array de objetos solo lo usare de pruieba ya que me pedian hacer una seccion cart
    const prodsComprados = [
        { "id": 2, "cantidad": 3 },
        { "id": 6, "cantidad": 2 },
        { "id": 8, "cantidad": 5 },
        { "id": 24, "cantidad": 3 },
        { "id": 26, "cantidad": 2 }
    ]
    //#endregion
    
    useEffect(() => {
        getProds()
            .then((response) => {
                // console.log(response)
                const arregloX = []
                for (const prod of prodsComprados) {
                    arregloX.push(response.find(funko=> funko.id === prod.id)) //guardamos el estado 
                }
                setProdsCarrito(arregloX)
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => "hola")
    }, [])

    console.log(carrito)
    
    return (
        <section>
            <a> <ion-icon name="arrow-back-outline"></ion-icon> seguir comprando</a>

            <section>
                <h2>Mi carrito</h2>
                <section className='carrito'>
                    {/* <article>
                        <img src="" alt="" />
                        <h2>nombre</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto eos commodi unde, inventore architecto quos vel.</p>
                        <ItemCount objeto2={objetoState} />
                    </article> */}
                </section>
            </section>
        </section>
    )
}

export default CartContain