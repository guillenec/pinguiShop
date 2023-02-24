import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const { idProducto } = useParams();
    // console.log(idProducto)
    const [estadoProds, setEstadoProductos] = useState([])
    const [loading, setLoading] = useState(true)

    // useEffect(() => {

    //     getProducto(Number(idProducto))
    //     .then((response)=> {
    //         // console.log(response)
    //         setEstadoProductos(response) //guardamos el estado 
    //     })
    //     .catch((err) => {
    //         console.log(err.message)
    //     })
    //     .finally(() => setLoading(false))
    // }, [])

    console.log("++++++ ESTE ESEL ID: ", idProducto)
    useEffect(() => { //hook

        const db = getFirestore()
        const query = doc(db, 'productos', idProducto)
        getDoc(query)
            .then(response => setEstadoProductos({ id: response.id, ...response.data() }))
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => setLoading(false))


    }, []) //permitira que se re-renderisen los productos
    console.log(estadoProds)

    return (
        <>
            {
                loading ? <Loading /> : <ItemDetail objeto={estadoProds} />
            }

        </>
    )

}

export default ItemDetailContainer