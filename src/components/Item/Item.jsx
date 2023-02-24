import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useCartContext } from "../../context/CartContext";
import Toggle from "../Toggle/Toggle";

const Item = ({ element }) => {

    const { agregaAlCarrito, agregaAMeGusta, meGusta, cartList } = useCartContext()

    const [activaHeart, setActivaHeart] = useState(false)
    const [activaCart, setActivaCart] = useState('')
    const [activaWallet, setActivaWallet] = useState('')
    const [valorHeart, setValorHeart] = useState('')
    const [valorActiveCart, setValorActivoCart] = useState('')

    // const [activaEstado, setActivaEstado] = useState(false)

    useEffect(() => {
        if (cartList.some(elem => (elem.id === element.id && elem.nombre === element.nombre))) {
            // console.log("----  este id se repite ----")
            const objeto2 = cartList.find(elem => elem.id === element.id)
            // console.log(objeto2)
            element = objeto2
            if (activaHeart === true) {
                setTimeout(() => {
                    setValorActivoCart('like')
                }, 3000)
            }else{
                setTimeout(() => {
                    setValorActivoCart('')
                }, 3000)
            }
            
        }
    }, [cartList])

    useEffect(() => {
        if (meGusta.length !== 0 && meGusta.some(el => (el.id === element.id))) {
            if (activaHeart === false) {
                setActivaHeart(true);
                setValorHeart('activado');
                setTimeout(() => {
                    setValorHeart('like')
                }, 3000);
            }
            
        }else {
            setActivaHeart(false);
            setValorHeart('');
        }
    }, [meGusta])

    // const handleActiveHeart = () => {
    //     setActivaHeart('activado');
    //     setTimeout(() => {
    //         setActivaHeart('')
    //     }, 3000);
    // }
    const handleActiveCart = (val) => {
        (val === true) ?
            (setActivaCart('activado'),
                setTimeout(() => {
                    setActivaCart('')
                }, 3000)
            )
            : setActivaCart('sinStock')
    }

    const handleActiveWallet = () => {
        setActivaWallet('activado');
        setTimeout(() => {
            setActivaWallet('')
        }, 3000);
    }

    const notify = (numer, name) => toast.success(`🥰🥰 compraste ${numer} ${name}`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const errToast = () => toast.error(`😡😡 no hay stock`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
    })
    // const botoneraClassChecked = activaHeart ? 'activado' : '' ;

    const onAdd = (e) => {
        e.preventDefault();
        console.log(element.stock, element.comprado)
        if (element.stock <= element.comprado) {
            handleActiveCart(false)
            errToast()
        }
        else {
            handleActiveCart(true)
            agregaAlCarrito(
                {
                    ...element,
                    comprado: 1,
                    precioTotal: element.precio * 1
                })
            notify(1, element.nombre)
        }
        // handleActiveCart(false)
        // console.log("fin")

        // agregarCarrito( {...objeto, cantidad:cant} );
    }

    const onAddMeGusta = () => {
        agregaAMeGusta(element);
    }

    // console.log("Me gusta ==== ", meGusta)

    const { id: id, nombre: nombre, precio: precio, descripcion: desc, imagenA: img1 } = element;
    return (
        // <article key={id} className='card'>
        <>
            <div className="containerContenido">
                <Link to={`/detalle/${element.id} `} className="cardImg">
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
                        <a className={`heart ${valorHeart}`} onClick={onAddMeGusta}><ion-icon name="heart"></ion-icon></a>
                        <a className={`cart ${activaCart} ${valorActiveCart}`} onClick={onAdd}><ion-icon name="cart"></ion-icon></a>
                        <a className={`wallet ${activaWallet}`} onClick={handleActiveWallet}><ion-icon name="wallet"></ion-icon></a>
                    </div>
                </section>
            </div>
        </>


        // </article>
    )
}

export default Item