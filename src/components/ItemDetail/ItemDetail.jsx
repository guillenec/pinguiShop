// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";

import ItemCount from "../ItemCount/ItemCount";
import CategoriaDetalle from "./CategoriaDetalle/CategoriaDetalle";
import ImgDetalle from "./ImgDetalle/ImgDetalle";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCartContext } from "../../context/CartContext";

const ItemDetail = ({ objeto }) => {

    const { id: ident, nombre: nombre, descripcion: describe, stock: stock, precio: precio, descuento: descuento, genero: genero, tipo: tipo, imagenA: img1, imagenB: img2, imagenC: img3, imagenD: img4, clave1: cl1, clave2: cl2, clave3: cl3 } = objeto;

    const { agregaAlCarrito, cartList } = useCartContext()

    const notify = (numer, name) => toast.success(`🥰🥰 compraste ${numer} ${name}`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const onAdd = (objeto, cant) => {
        console.log(objeto);
        console.log(nombre, cant);

        agregaAlCarrito( { ...objeto ,comprado:cant} )
        notify(cant, objeto.nombre);
        // agregarCarrito( {...objeto, cantidad:cant} );
        
    }

    /*
    const { agregaAlCarrito, cartList} = useContext(CartContext)
    console.log("cartList ===>",cartList)
     */
    console.log("cartList ===>",cartList)


    return (
        <>
            <section className="itemDetailContain">
                <ImgDetalle img1={img1} img2={img2} img3={img3} describe={describe} />

                <section className="detalle">
                    <h2 className="nombre">#{ident} {nombre}</h2>
                    <p className="descripcion">{describe}</p>
                    <h2 className="precio">${precio}</h2>
                    <p className="categoria"><strong>Disponibles: </strong>{stock}</p>
                    <p className="categoria"><strong>Categorias:</strong></p>

                    <CategoriaDetalle objeto={objeto} />
                    <ItemCount producto={objeto} inicial={0} stock={stock} nombre={nombre} onAdd={onAdd} />

                    <ToastContainer
                        position="bottom-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"/>
                </section>

            </section>
        </>
    )
}
export default ItemDetail