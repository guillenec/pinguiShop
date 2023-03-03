import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';
import SimpleSlider from "../SimpleSlider/SimpleSlider";
import UserComponent from "../UserComponent/UserComponent";

const ItemListContainer = ({ greeting }) => {
    //valor del estado  //forma de actualizar el estado
    const [productos, setProductos] = useState([]) //estado inicial array vacio
    // const [producto, setProducto ] = useState({})

    let [loading, setLoading] = useState(true) //"" "" true
    const { idCategoria } = useParams()

    useEffect(() => { //hook
        setLoading(true)
        if (idCategoria) {
            const db = getFirestore()
            const queryColection = collection(db, 'productos')
            const queryFiltrado = query(queryColection, where('claves', 'array-contains-any', [idCategoria]))

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
                (idCategoria) ? "" : <SimpleSlider objeto={productos} />
            }

            <section className="saludo">
                <h1>{idCategoria ? idCategoria : greeting}</h1>
            </section>

            <UserComponent user={false}/>

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