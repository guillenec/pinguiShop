import { useEffect } from "react"
import { useState } from "react"
import { getProds, getProducto } from "../../gFetch"
import Item from "../Item/Item"
import Loading from "../Loading/Loading"

const ItemDetailContainer = () => {

    const [estadoProds, setEstadoProductos ] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducto()
        .then((response)=> {
            setEstadoProductos(response) //guardamos el estado 
        })
        .catch((err) => {
            console.log(err.message)
        })
        .finally(() => setLoading(false))
    }, [])

    return (
        <>
            <section>
                {
                    loading ? <Loading /> : <Item estadoProd={estadoProds}/>
                }
            </section>
        </>
    )

}

export default ItemDetailContainer