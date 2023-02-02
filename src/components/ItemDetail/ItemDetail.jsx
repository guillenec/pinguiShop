import { useState } from "react";
import { NavLink } from "react-router-dom";

const ItemDetail = ({objeto}) => {

    const [cantidadProd, setCantidadProd] = useState({
        cantidad:0
    });

    const {id: ident, nombre: nombre, descripcion: describe, stock: stock, precio: precio, descuento: descuento, genero: genero, tipo: tipo, imagenA: img1, imagenB: img2, imagenC: img3, imagenD: img4, clave1: cl1, clave2: cl2, clave3: cl3} = objeto;

    // console.log("cantidad de productos a comprar")

    const handleChange = (e) =>{
        // const num = e.target.name;
        // const value = e.target.value;
        const {name, value} = e.target;
        // console.log(num,value)

        setCantidadProd((prev)=>{
            return {...prev, [name]: value}
        })
    }
    
    const handleSubmit = (e) => { //
        e.preventDefault()
        console.log(cantidadProd.cantidad) //despues puedo remplazarlo
        return cantidadProd.cantidad
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
                        <a>{nombre}</a>
                        <a>{genero}</a>
                        <a>{tipo}</a>
                        <NavLink to='/categoria'>{cl1}</NavLink>
                        <a>{cl2}</a>
                        <a>{cl3}</a>
                    </section>

                    <form className="formCantidad" onSubmit={handleSubmit}>
                        <label className="labelCantidad" htmlFor="cantidad">cantidad 
                        <input
                        className="inputCantidad"
                            id="cantidad"
                            name="cantidad"
                            type="number"
                            min={1} max={stock}
                            onChange={handleChange}
                            value={cantidadProd.cantidad||0}
                        />
                        </label>
                        
                        <button type="submit">comprar</button>
                    </form>

                </section>

            </section>
        </>
    )
}

export default ItemDetail