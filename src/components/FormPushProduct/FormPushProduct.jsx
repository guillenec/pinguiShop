import React, { useEffect, useState } from 'react'
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";
import { getProds } from '../../gFetch';

//formulario que permite pusear todos los elementos a firebase
const FormPushProduct = () => {
    const [productos, setProductos] = useState([]) //estado inicial array vacio

    const elementsBanner = [
        { "nombre": "the mandalorian","imgDescribe":"the mandalorian logo", "descripcion": "Figuras de la coleccion de Star Wars The Black Series, Toy Figura de la serie The Mandalorian de 6 pulgadas.", "palabraClave": "the mandalorian", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364416/imgs/slider/mandalorian3_deualz.jpg", "color": "#000000", "gradiente": "" },

        { "nombre": "pokemon","imgDescribe":"pockemon logo background", "descripcion": "Funkos de la coleccion pokemon, pokemon inicial. serie rojo y otras, marca pop, de 3.75 pulgadas aproximadamente.", "palabraClave": "pokemonl", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677365775/imgs/slider/pokemonLogo1_ioxzjh.jpg", "color": "#0B48A5", "gradiente": "" },

        { "nombre": "one punch man","imgDescribe":"one punch man logo background", "descripcion": "FunKo POP! de la coleccion One Punch Man- Figura de vinilo de 3.75 pulgadas de serie especial marca pop.", "palabraClave": "one punch man", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364420/imgs/slider/one_punch_man2_qvxqfk.jpg", "color": "#000000", "gradiente": "" },

        { "nombre": "dragon ball","imgDescribe":"dragon Ball logo background", "descripcion": "Funko pop de la coleccion Dragon ball y Dragon Ball Z, Figuras coleccionables marca pop, de 3.75 pulgadas aproximadamente.", "palabraClave": "dragon ball", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364406/imgs/slider/dragon_ball2_uwr8x6.jpg", "color": "#EA6E14", "gradiente": "linear-gradient(0deg, rgba(235,68,15,1) 0%, rgba(233,154,27,1) 100%)" },

        { "nombre": "one piece", "imgDescribe":"one piece logo background", "descripcion": "Figuras de la coleccion Bandai Spirits Ichibansho Ichiban - One Piece - figuras (película roja).", "palabraClave": "one piece", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677366289/imgs/slider/onePieceLogo1_cspj2h.jpg", "color": "#1C1924", "gradiente": "" },

        { "nombre": "bad batch", "imgDescribe":"bad batch logo background", "descripcion": "Figuras Star Wars The Black Series Toy - Figura de acción coleccionable de 6 pulgadas a escala de The Bad Batch y accesorio, juguetes", "palabraClave": "bad batch", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364428/imgs/slider/bad_bach_guzdot.jpg", "color": "#cc5454", "gradiente": "linear-gradient(to right, #471E0C 0%, 49.070098996162415%, #D18261 100%)" },
    ]

    useEffect(() => { //hook

        getProds()
            .then((response) => {
                const respuestaSinId = response.map(({id,...element}) => {
                    const nuevoElemento = {claves:[element.clave1, element.clave2, element.clave3,element.nombre,element.tipo, element.genero],fechaSubida:Date(),...element }
                    return nuevoElemento
                })
                console.log(respuestaSinId)
                setProductos(respuestaSinId)  //actualiza el estado de los productos
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => console.log(false)) //se ejecuta siempre al final, actualiza el state de loading
    }, [])

    const cargaDeDatos = () => {
        const db = getFirestore()
        const coleccion = collection(db, 'productos')

        productos.forEach(element => {
            addDoc(coleccion, element)
                .then(response => console.log(`prod Subido numero ${element.id}`, response))
                .catch((err) => {
                    console.log(err.message)
                })
                .finally(() => console.log(`Fin subida prod: #${element.id} ${element.nombre}`))
        });

    }
    
    const handleSlider = () => {
        const db = getFirestore()
        const coleccion = collection(db, 'ProductosSlider')
        elementsBanner.forEach(element => {
            addDoc(coleccion, element)
            .then(response => console.log(`se subio: ${response}`))
            .catch((error) => {
                console.log(error)
            })
            .finally(() => console.log("fin"))
        });
    }

    async function handleCargaCities() {
        const db = getFirestore()
        const citiesRef = collection(db, "ciudades");

        await setDoc(doc(citiesRef, "SF"), {
            name: "San Francisco", state: "CA", country: "USA",
            capital: false, population: 860000,
            regions: ["west_coast", "norcal"]
        });
        await setDoc(doc(citiesRef, "LA"), {
            name: "Los Angeles", state: "CA", country: "USA",
            capital: false, population: 3900000,
            regions: ["west_coast", "socal"]
        });
        await setDoc(doc(citiesRef, "DC"), {
            name: "Washington, D.C.", state: null, country: "USA",
            capital: true, population: 680000,
            regions: ["east_coast"]
        });
        await setDoc(doc(citiesRef, "TOK"), {
            name: "Tokyo", state: null, country: "Japan",
            capital: true, population: 9000000,
            regions: ["kanto", "honshu"]
        });
        await setDoc(doc(citiesRef, "BJ"), {
            name: "Beijing", state: null, country: "China",
            capital: true, population: 21500000,
            regions: ["jingjinji", "hebei"]
        });
    }

    async function handleCargaCities2() {
        const db = getFirestore()
        const citiesRef = collection(db, "ciudades2");
        await Promise.all([
            addDoc(collection(citiesRef, 'SF', 'landmarks'), {
                name: 'Golden Gate Bridge',
                type: 'bridge'
            }),
            addDoc(collection(citiesRef, 'SF', 'landmarks'), {
                name: 'Legion of Honor',
                type: 'museum'
            }),
            addDoc(collection(citiesRef, 'LA', 'landmarks'), {
                name: 'Griffith Park',
                type: 'park'
            }),
            addDoc(collection(citiesRef, 'LA', 'landmarks'), {
                name: 'The Getty',
                type: 'museum'
            }),
            addDoc(collection(citiesRef, 'DC', 'landmarks'), {
                name: 'Lincoln Memorial',
                type: 'memorial'
            }),
            addDoc(collection(citiesRef, 'DC', 'landmarks'), {
                name: 'National Air and Space Museum',
                type: 'museum'
            }),
            addDoc(collection(citiesRef, 'TOK', 'landmarks'), {
                name: 'Ueno Park',
                type: 'park'
            }),
            addDoc(collection(citiesRef, 'TOK', 'landmarks'), {
                name: 'National Museum of Nature and Science',
                type: 'museum'
            }),
            addDoc(collection(citiesRef, 'BJ', 'landmarks'), {
                name: 'Jingshan Park',
                type: 'park'
            }),
            addDoc(collection(citiesRef, 'BJ', 'landmarks'), {
                name: 'Beijing Ancient Observatory',
                type: 'museum'
            })
        ]);
    }


    // await productosRef.doc().set({
    //     nombre: objeto.nombre, descripcion: objeto.descripcion, stock: objeto.stock, precio: objeto.precio, descuento: objeto.precio, genero: objeto.genero, tipo: objeto.tipo, imagenA: objeto.imagenA, imagenB: objeto.imagenB, imagenC: objeto.imagenC, imagenD: objeto.imagenD, clave1: objeto.clave1, clave2: objeto.clave2, clave3: objeto.clave3
    // })
    const dato123 = new Date()
    console.log("Estos son todos los productos: ", productos)
    // localStorage.setItem('productosStorage', JSON.stringify(productos))
    // const recuperoProdsStorage = JSON.parse(localStorage.getItem('productosStorage'))

    console.log(`Esta es la fecha creacion: ${dato123.getDate()}`)
//Midudev 1:21 https://youtu.be/t5TZB1KimfU

    return (
        <div className='containFormPush'>
            <h1>subir Producto</h1>
            <button className='subirProds' onClick={cargaDeDatos}><ion-icon name="card-outline"></ion-icon> subir productos </button>
            
            <br></br>
            <button className='subirProds' onClick={handleSlider}><ion-icon name="card-outline"></ion-icon> subir slider </button>


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