// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";

import ItemCount from "../ItemCount/ItemCount";
import CategoriaDetalle from "./CategoriaDetalle/CategoriaDetalle";
import ImgDetalle from "./ImgDetalle/ImgDetalle";

import { toast } from 'react-toastify';
import { useCartContext } from "../../context/CartContext";
import { useEffect } from "react";

const ItemDetail = ({ objeto }) => {

    // const { id: ident, nombre: nombre, descripcion: describe, stock: stock, precio: precio, descuento: descuento, genero: genero, tipo: tipo, imagenA: img1, imagenB: img2, imagenC: img3, imagenD: img4, clave1: cl1, clave2: cl2, clave3: cl3 } = objeto;

    const { agregaAlCarrito, cartList } = useCartContext()

    if (cartList.some(elem => elem.id === objeto.id && elem.nombre === objeto.nombre)) {
        console.log("----  este id se repite ----")
        const objeto2 = cartList.find(elem => elem.id === objeto.id)
        console.log(objeto2)
        objeto = objeto2
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

    const onAdd = (objeto, cant, precioTotal) => {

        // console.log(objeto);
        // console.log(objeto.nombre, cant, precioTotal);
        // console.log(objeto.stock, objeto.comprado)

        if (objeto.stock <= objeto.comprado) {
            errToast()
        } else {
            agregaAlCarrito(
                {
                    ...objeto,
                    comprado: cant,
                    precioTotal: precioTotal * cant
                })
            notify(cant, objeto.nombre);
        }

        // agregarCarrito( {...objeto, cantidad:cant} );

    }

    /*
    const { agregaAlCarrito, cartList} = useContext(CartContext)
    console.log("cartList ===>",cartList)
     */
    // console.log("cartList ===>",cartList)

    return (
        <>
            <section className="itemDetailContain">
                <ImgDetalle objeto={objeto} describe={objeto.descripcion} />

                <section className="detalle">
                    <h2 className="nombre"># {objeto.nombre}</h2>
                    <p className="descripcion">{objeto.descripcion}</p>
                    <h2 className="precio">${objeto.precio}</h2>
                    <h3 className="precioTotal">{objeto.precioTotal}</h3>
                    <p className="categoria"><strong>Disponibles: </strong>{objeto.comprado ? (objeto.stock - objeto.comprado) : objeto.stock}</p>
                    <p className="categoria"><strong>Categorias:</strong></p>

                    <CategoriaDetalle objeto={objeto} />
                    <ItemCount producto={objeto} inicial={1} stock={objeto.comprado ? (objeto.stock - objeto.comprado) : objeto.stock} onAdd={onAdd} />


                </section>

            </section>
        </>
    )
}
export default ItemDetail