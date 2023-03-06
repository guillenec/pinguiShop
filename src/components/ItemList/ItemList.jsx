import { memo } from "react"
import Item from "../Item/Item"

const ItemList = memo(( { arregloProds } ) => {
        console.log("Render : ItemList")
    
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
) 

export default ItemList