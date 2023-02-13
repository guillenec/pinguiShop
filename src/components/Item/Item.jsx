import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import Toggle from "../Toggle/Toggle";

const Item = ({element}) => {

    const { agregaAlCarrito, cartList, contadorComprados } = useCartContext()

    const [activaHeart, setActivaHeart] = useState('')
    const [activaCart, setActivaCart] = useState('')
    const [activaWallet, setActivaWallet] = useState('')


    const handleActiveHeart = () => {
        setActivaHeart('activado');
        setTimeout(() => {
            setActivaHeart('')
        }, 5000);
    }
    const handleActiveCart = () => {
        setActivaCart('activado');
        setTimeout(() => {
            setActivaCart('')
        }, 5000);
    }
    const handleActiveWallet = () => {
        setActivaWallet('activado');
        setTimeout(() => {
            setActivaWallet('')
        }, 5000);
    }

    // const botoneraClassChecked = activaHeart ? 'activado' : '' ;

    const cant = 1;

    const onAdd = (e) => {
        e.preventDefault();
        console.log(contadorComprados)
        console.log(element.stock)

        if ( contadorComprados < element.stock) {
            console.log("entre")
            agregaAlCarrito(
                { ...element ,
                    comprado:cant, 
                    precioTotal: element.precio * cant
                } )   
        }
        // agregarCarrito( {...objeto, cantidad:cant} );
    }



    const {id:id, nombre:nombre, precio:precio, descripcion:desc, imagenA:img1} = element;
    return (
        // <article key={id} className='card'>
        <>
            <div className="containerContenido">
                <Link to={`/detalle/${id} `} className="cardImg">
                    <img src={img1} alt={nombre} />
                    <p>${precio}</p>
                </Link>
                <section className="cardDescripcion">
                    <h2 className="cardHeader">{nombre}
                    </h2>
                    <p><span>{desc}</span></p>
                </section>
                <section className="botoneraCard">
                    <div>
                        <a className={`heart ${activaCart}`} onClick={handleActiveCart}><ion-icon name="heart"></ion-icon></a>
                        <a className={`cart ${activaHeart}`} onClick={onAdd && handleActiveHeart}><ion-icon name="cart"></ion-icon></a>
                        <a className={`wallet ${activaWallet}`} onClick={handleActiveWallet}><ion-icon name="wallet"></ion-icon></a>
                    </div>
                </section>
            </div>      
        </>
            
            
        // </article>
    )
}

export default Item