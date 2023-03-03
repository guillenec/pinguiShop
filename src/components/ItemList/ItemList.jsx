import Item from "../Item/Item"

const ItemList = ({ arregloProds }) => {
    return (
        <>
            {
                arregloProds.map(producto => {
                    //key debo usarla siempre que hago una lista de elementos. mejora performance, permite mantener el estado
                    return ( <article key={producto.id} className='card'>
                        <Item element={producto} />
                    </article> )
                })
            }
        </>
    )

}

export default ItemList