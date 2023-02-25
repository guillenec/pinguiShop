import { useState } from "react";
import { useEffect } from "react";
import { useFetcher, useParams } from "react-router-dom";
import { getProds } from "../../gFetch";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { collection, doc, getDoc, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';
import SimpleSlider from "../SimpleSlider/SimpleSlider";

const ItemListContainer = ({ greeting }) => {
    //valor del estado  //forma de actualizar el estado
    const [productos, setProductos] = useState([]) //estado inicial array vacio
    // const [producto, setProducto ] = useState({})

    let [loading, setLoading] = useState(true) //"" "" true
    const { idCategoria } = useParams()
    // const fetchMercado = async () => {
    //     const resp = await fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1051')
    //     const respParse = await resp.json()
    //     console.log(respParse)
    // }
    // fetchMercado()

    // useEffect(() => { //hook
    //     if (idCategoria) {
    //         setLoading(true)  //esto nose si esta bien 
    //         getProds()
    //         .then((response) => {
    //             setProductos(response.filter(producto => producto.tipo === idCategoria || producto.nombre === idCategoria || producto.genero === idCategoria || producto.clave1 === idCategoria || producto.clave2 === idCategoria || producto.clave3 === idCategoria))  //actualiza el estado de los productos
    //         })
    //         .catch((err) => {
    //             console.log(err.message)
    //         })
    //         .finally(() => setLoading(false)) //se ejecuta siempre al final, actualiza el state de loading
    //     }
    //     else{
    //         // setLoading(true)
    //         getProds()
    //         .then((response) => {
    //             setProductos(response)  //actualiza el estado de los productos
    //         })
    //         .catch((err) => {
    //             console.log(err.message)
    //         })
    //         .finally(() => setLoading(false)) //se ejecuta siempre al final, actualiza el state de loading
    //     }
    // }, [idCategoria]) //permitira que se re-renderisen los productos


    useEffect(() => { //hook
        if (idCategoria) {
            const db = getFirestore()
            const queryColection = collection(db, 'productos')
            const queryFiltrado = query(queryColection,where('claves', 'array-contains-any', [idCategoria] ))

            getDocs(queryFiltrado)
                .then(response => setProductos(response.docs.map(element => (
                    { id: element.id, ...element.data() }
                ))))
                .catch((err) => {
                    console.log(err.message)
                })
                .finally(() => setLoading(false)) 


        } else {
            const db = getFirestore()
            const queryColeccion = collection(db, 'productos')
            const ordenadas = query(queryColeccion, orderBy("nombre", "asc")) // de esta forma los ordeno ascendentemente
            getDocs(ordenadas)
                .then(response => setProductos(response.docs.map(element => (
                    { id: element.id, ...element.data() }
                ))))
                .catch((err) => {
                    console.log(err.message)
                })
                .finally(() => setLoading(false))
        }
    }, [idCategoria]) //permitira que se re-renderisen los productos
    // console.log(productos)

    //trae un prod
    // useEffect(()=>{
    //     const db = getFirestore()
    //     const query = doc(db, 'productos','KNdvp4swRaIVcucAzfvT')
    //     getDoc(query)
    //     .then(resp => setProducto({id: resp.id, ...resp.data()}))
    // }, [])

    // useEffect(()=>{
    //     const db = getFirestore();
    //     const queryCollections = collection(db, 'productos');
    //     // const queryFilter = query(queryCollections, where('precio','>',2500))

    //     getDocs(queryCollections)
    //     .then(response => setProductos( response.docs.map(product => ({id: product.id, ...product.data()}) ) ) )
    //     .catch((err) => {
    //         console.log(err.message)
    //     })
    //     .finally(() => setLoading(false)) 
    // },[])

    /* Nota: 
    useEfect (( 
        //se ejecuta cada que renderiza el componente
        console.log(codigo a ejecutar)
    )=>{}) SIN PARAETRO == se ejecuta cada vez que renderiza el componente
    
    useEfect (()=>{
        //como minimo se ejecuta 1 vez, cuando se monta el componente, la primera vez que renderiza.
        console.log (codigoEjecutar) 
    },[]) == se ejecurtara al menos una vez
    
    useEfect (()=>{
        //como minimo se ejecuta 1 vez,cuando se monta el componente, la primera vez que renderiza y cuando se ejecuta la "funcionUno".
    
        console.log(codigo a ejecutar)
    }[funcionUno]) 
    
    */
    
    return (
        <>
        {
            (idCategoria) ? "" : <SimpleSlider objeto={productos}/>
        }
            
            <section className="saludo">
                <h1>{idCategoria ? idCategoria : greeting}</h1>
            </section>
            <section className="cardsContainer">
                {
                    loading ? <Loading />
                        : <ItemList arregloProds={productos} />
                }
            </section>
        </>
    )
}

export default ItemListContainer