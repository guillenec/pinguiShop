import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"
import { doc, getDoc, getFirestore, } from 'firebase/firestore';

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
    // console.log(estadoProds)

    console.log("Render : ItemDetailContainer")
    return (
        <>
            {
                loading ? <Loading /> : <ItemDetail objeto={estadoProds} />
            }

        </>
    )

}

export default ItemDetailContainer