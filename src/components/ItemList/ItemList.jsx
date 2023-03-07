import { memo } from "react"
import Item from "../Item/Item"

const ItemList = memo(( { prods } ) => {
    
        console.log("Render : ItemList")
    
        return (
            <>
                {
                    prods.map(product => {
                        //key debo usarla siempre que hago una lista de elementos. mejora performance, permite mantener el estado
                        return (
                            <Item key={product.id}  element={product} />
                        )
                    })
                }
            </>
        )
    
    }
) 

export default ItemList