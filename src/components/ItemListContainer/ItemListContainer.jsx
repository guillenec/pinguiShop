import { useState } from "react";
import { useEffect } from "react";
import { getProds } from "../../gFetch";
import ItemList from "../ItemList/ItemList";

// componente contenedor
const ItemListContainer = ({ greeting }) => {
        //valor del estado  //forma de actualizar el estado
    const [productos, setProductos] = useState([]) //estado inicial array vacio
    const [loading, setLoading] = useState(true) //"" "" true

    // const fetchMercado = async () => {
    //     const resp = await fetch('https://api.mercadolibre.com/sites/MLA/search?category=MLA1051')
    //     const respParse = await resp.json()
    //     console.log(respParse)
    // }
    // fetchMercado()

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

    //cuando lo llamo al empezar se muestra el array vacio ya que productos al inicio esta vacio
    console.log(productos)
    return (
        <>
            <section className="saludo">
                <h1>{greeting}</h1>
            </section>
            <section className="cardsContainer">
                {
                    loading ? <div className="contentLoader"><span className="loader">Loading</span></div>
                        : <ItemList arregloProds={productos}/>
                }
            </section>
        </>
    )
}

export default ItemListContainer