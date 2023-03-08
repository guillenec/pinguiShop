import { memo } from "react"
import Item from "../Item/Item"
import NotItem from "../NotItem/NotItem"

const ItemList = memo(( { prods } ) => {
        // prods = []
        console.log("Render : ItemList")
        return (
            <>
                {
                    prods.length > 0 ? prods.map(product => {
                        //key debo usarla siempre que hago una lista de elementos. mejora performance, permite mantener el estado
                        return (
                            <Item key={product.id}  element={product} />
                        )
                    }) : <NotItem/>
                }
            </>
        )
    
    }
) 

export default ItemList