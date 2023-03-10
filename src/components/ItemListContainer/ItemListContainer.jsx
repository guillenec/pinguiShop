import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';
import SimpleSlider from "../SimpleSlider/SimpleSlider";

const ItemListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([]) //estado inicial array vacio
    const [loading, setLoading] = useState(true) //"" "" true
    const { idCategoria } = useParams()

    useEffect(() => { //hook
        setLoading(true)
            const db = getFirestore()
            const queryColection = collection(db, 'productos')
            const queryFiltrado = idCategoria ? query(queryColection, where('claves', 'array-contains-any', [idCategoria])) : query(queryColection, orderBy("nombre", "asc"))

            getDocs(queryFiltrado)
                .then(response => setProductos(response.docs.map(element => (
                    { id: element.id, ...element.data() }
                ))))
                .catch((err) => {
                    console.log(err.message)
                })
                .finally(() => setLoading(false))

    }, [idCategoria]) //permitira que se re-renderisen los productos

    return (
        <>
            {
                (idCategoria) ? "" : <SimpleSlider objeto={productos} />
            }
            
            <section className="saludo">
                <h1>{idCategoria ? idCategoria : greeting}</h1>
            </section>
            <section className="cardsContainer">
                {
                    loading ? <Loading />
                        : <ItemList prods={productos} />
                }
            </section>
        </>
    )
}

export default ItemListContainer