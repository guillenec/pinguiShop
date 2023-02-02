//render de un icono cart, e incluislo dentro de navBar

import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const CartWidget = () => {
    // const [count, setCount] = useState(0)
    // const hanldeCount = () => {
    //     setCount(count + 1);
    // };
    return (
        <>
        <section className="carrito">
            <Link to='/cart'><ion-icon name="cart"></ion-icon><p>0</p></Link>
            {/* <a onClick={hanldeCount}><ion-icon name="cart"></ion-icon></a>
            <ItemCount contador={count}/> */}
        </section> 
        </>
    )
}

export default CartWidget