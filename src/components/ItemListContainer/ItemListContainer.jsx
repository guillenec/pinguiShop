import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProds } from "../../gFetch";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";

// componente contenedor
const ItemListContainer = ({ greeting }) => {
        //valor del estado  //forma de actualizar el estado
    const [productos, setProductos] = useState([]) //estado inicial array vacio
    let [loading, setLoading] = useState(true) //"" "" true
    const { idCategoria } = useParams()
    // const fetchMercado = async () => {
    //     const resp = await fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1051')
    //     const respParse = await resp.json()
    //     console.log(respParse)
    // }
    // fetchMercado()

    useEffect(() => { //hook
        if (idCategoria) {
            setLoading(true)  //esto nose si esta bien 
            getProds()
            .then((response) => {
                setProductos(response.filter(producto => producto.tipo === idCategoria || producto.nombre === idCategoria || producto.genero === idCategoria || producto.clave1 === idCategoria || producto.clave2 === idCategoria || producto.clave3 === idCategoria))  //actualiza el estado de los productos
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => setLoading(false)) //se ejecuta siempre al final, actualiza el state de loading
        }
        else{
            // setLoading(true)
            setLoading(true) 
            getProds()
            .then((response) => {
                setProductos(response)  //actualiza el estado de los productos
            })
            .catch((err) => {
                console.log(err.message)
            })
            .finally(() => setLoading(false)) //se ejecuta siempre al final, actualiza el state de loading
        }
    }, [idCategoria]) //permitira que se re-renderisen los productos

    //cuando lo llamo al empezar se muestra el array vacio ya que productos al inicio esta vacio
    console.log(idCategoria)

    return (
        <>
            <section className="saludo">
                <h1>{greeting}</h1>
            </section>
            <section className="cardsContainer">
                {
                    loading ? <Loading />
                        : <ItemList arregloProds={productos}/>
                }
            </section>
        </>
    )
}

export default ItemListContainer