import React, { useEffect, useState } from 'react'
import { collection, doc, setDoc } from "firebase/firestore";
import { getProds } from '../../gFetch';

const FormPushProduct = () => {
    const productosRef = db.collection('productos');

    const [productos, setProductos] = useState([]) //estado inicial array vacio


    useEffect(() => { //hook

        getProds()
            .then((response) => {
                setProductos(response)  //actualiza el estado de los productos
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => setLoading(false)) //se ejecuta siempre al final, actualiza el state de loading

    }, [])

    // await productosRef.doc().set({
    //     nombre: objeto.nombre, descripcion: objeto.descripcion, stock: objeto.stock, precio: objeto.precio, descuento: objeto.precio, genero: objeto.genero, tipo: objeto.tipo, imagenA: objeto.imagenA, imagenB: objeto.imagenB, imagenC: objeto.imagenC, imagenD: objeto.imagenD, clave1: objeto.clave1, clave2: objeto.clave2, clave3: objeto.clave3
    // })


    return (
        <div className='containFormPush'>
            <h1>subir Producto</h1>

            <form action="">
                <label className='titulo' htmlFor="nombre"><p>Nombre</p>
                    <input type="text" name='nombre' id='nombre' placeholder='nombre' />
                </label>
                <label className='textarea' htmlFor="descripcion"><p>descripcion</p>
                    <textarea name="descripcion" id="descripcion" placeholder='descripcion'></textarea>
                </label>
                <label className='tipoNumber' htmlFor="stock"><p>stock</p>
                    <input type="number" name='stock' id='stock' placeholder='stock' min={0} />
                </label>
                <label className='tipoNumber' htmlFor="precio"><p>precio</p>
                    <input type="number" name='precio' id='precio' placeholder='precio' min={0} />
                </label>
                <label className='tipoNumber' htmlFor="descuento"><p>descuento</p>
                    <input type="number" name='descuento' id='descuento' placeholder='descuento' min={0} />
                </label>
                <label className='inputClave' htmlFor="genero"><p>genero</p>
                    <input type="text" name='genero' id='genero' placeholder='genero' />
                </label>
                <label className='inputClave' htmlFor="tipo"><p>tipo</p>
                    <input type="text" name='tipo' id='tipo' placeholder='tipo' />
                </label>
                <label className='imagenInput' htmlFor="imagenA"><p>imagenA</p>
                    <input type="text" name='imagenA' id='imagenA' placeholder='imagenA' />
                </label>
                <label className='imagenInput' htmlFor="imagenB"><p>imagenB</p>
                    <input type="text" name='imagenB' id='' placeholder='imagenB' />
                </label>
                <label className='imagenInput' htmlFor="imagenC"><p>imagenC</p>
                    <input type="text" name='imagenC' id='imagenC' placeholder='imagenC' />
                </label>
                <label className='imagenInput' htmlFor="imagenD"><p>imagenD</p>
                    <input type="text" name='imagenD' id='imagenD' placeholder='imagenD' />
                </label>
                <label className='inputClave' htmlFor="clave1"><p>clave1</p>
                    <input type="text" name='clave1' id='clave1' placeholder='clave1' />
                </label>
                <label className='inputClave' htmlFor="clave2"><p>clave2</p>
                    <input type="text" name='clave2' id='clave2' placeholder='clave2' />
                </label>
                <label className='inputClave' htmlFor="clave3"><p>clave3</p>
                    <input type="text" name='clave3' id='clave3' placeholder='clave3' />
                </label>
                <button className='subirProducto'>subir</button>
            </form>
        </div>
    )
}
/*
nombre, descripcion, stock, precio, descuento, genero, tipo, imagenA, imagenB, imagenC, imagenD, clave1, clave2, clave3
*/

export default FormPushProduct