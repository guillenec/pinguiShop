//render de un icono cart, e incluislo dentro de navBar

import { useState } from "react";

const CartWidget = () => {
    const [count, setCount] = useState(0)
    const hanldeCount = () => {
        setCount(count + 1);
    };
    return (
        <>
        <section className="carrito">
            <a onClick={hanldeCount}><ion-icon name="cart"></ion-icon></a>
            <p>{count}</p>
        </section> 
        </>
    )
}

export default CartWidget