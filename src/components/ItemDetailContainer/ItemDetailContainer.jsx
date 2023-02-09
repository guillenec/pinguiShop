import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getProds, getProducto } from "../../gFetch"
import Item from "../Item/Item"
import ItemDetail from "../ItemDetail/ItemDetail"
import Loading from "../Loading/Loading"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetailContainer = () => {
    const {idProducto} = useParams();
    // console.log(idProducto)
    const [estadoProds, setEstadoProductos ] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        getProducto(Number(idProducto))
        .then((response)=> {
            // console.log(response)
            setEstadoProductos(response) //guardamos el estado 
        })
        .catch((err) => {
            console.log(err.message)
        })
        .finally(() => setLoading(false))
    }, [])

    return (
        <>
            {
                loading ? <Loading /> : <ItemDetail objeto={estadoProds} />
            }

        </>
    )

}

export default ItemDetailContainer