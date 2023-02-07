import { useContext } from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Contador from "../Contador/Contador";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({objeto}) => {

    const {id: ident, nombre: nombre, descripcion: describe, stock: stock, precio: precio, descuento: descuento, genero: genero, tipo: tipo, imagenA: img1, imagenB: img2, imagenC: img3, imagenD: img4, clave1: cl1, clave2: cl2, clave3: cl3} = objeto;

    const { agregarCarrito, cartList } = useContext(CartContext)
    const onAdd = (cant) => {
        agregarCarrito( { ...objeto, cantidad:cant } )
    }
    return (
        <>
            <section className="itemDetailContain">
                <section className="containerImgs">
                    <div className="img1">
                        <img src={img1} alt={describe} />
                    </div>
                    <div className="imgSecundary">
                        <div className="img2">
                            <img src={img2} alt={describe} />
                        </div>
                        {img3.length === 0 ? <div className="img3">no disponible</div> : <div className="img3"><img className="img3" src={img3} alt={describe} /></div>}
                    </div>
                    
                </section>

                <section className="detalle">
                    <h2 className="nombre">#{ident} {nombre}</h2>
                    <p className="descripcion">{describe}</p>
                    <h2 className="precio">${precio}</h2>
                    <p className="categoria"><strong>Disponibles: </strong>{stock}</p>
                    <p className="categoria"><strong>Categorias:</strong></p>
                    <section className="palabraClave">
                        <Link to={`/categoria/${nombre}`}>{nombre}</Link>
                        <Link to={`/categoria/${genero}`}>{genero}</Link>
                        <Link to={`/categoria/${tipo}`}>{tipo}</Link>
                        <Link to={`/categoria/${cl1}`}>{cl1}</Link>
                        <Link to={`/categoria/${cl2}`}>{cl2}</Link>
                        <Link to={`/categoria/${cl3}`}>{cl3}</Link>
                    </section>
                    
                    <ItemCount objeto2={objeto}/>

                </section>

            </section>
        </>
    )
}

export default ItemDetail