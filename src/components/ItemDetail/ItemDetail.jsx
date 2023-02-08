import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Contador from "../Contador/Contador";
import ItemCount from "../ItemCount/ItemCount";
import CategoriaDetalle from "./CategoriaDetalle/CategoriaDetalle";
import ImgDetalle from "./ImgDetalle/ImgDetalle";

const ItemDetail = ({ objeto }) => {

    const { id: ident, nombre: nombre, descripcion: describe, stock: stock, precio: precio, descuento: descuento, genero: genero, tipo: tipo, imagenA: img1, imagenB: img2, imagenC: img3, imagenD: img4, clave1: cl1, clave2: cl2, clave3: cl3 } = objeto;

    const { agregarCarrito, cartList } = useContext(CartContext)


    const onAdd = (cant) => {
        agregarCarrito({ ...objeto, cantidad: cant })
    }
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
                    
                    <CategoriaDetalle objeto={objeto}/>
                    <ItemCount objeto2={objeto} />

                </section>

            </section>
        </>
    )
}
export default ItemDetail