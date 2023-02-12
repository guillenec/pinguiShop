//render de un icono cart, e incluislo dentro de navBar

import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";


const CartWidget = () => {
    // const [count, setCount] = useState(0)
    // const hanldeCount = () => {
    //     setCount(count + 1);
    // };
    const { contador, contadorComprados } = useCartContext()
    
    contador()
    // console.log(`cartWeidght contador`, contadorComprados)

    return (
        <>
        <section className="carrito">
            <Link to='/cart'>
                <ion-icon name="cart"></ion-icon>
                <p>{contadorComprados}</p>
            </Link>
            {/* <a onClick={hanldeCount}><ion-icon name="cart"></ion-icon></a>
            <ItemCount contador={count}/> */}
        </section> 
        </>
    )
}

export default CartWidget