import React from 'react'
import { Link } from 'react-router-dom';

const CategoriaDetalle = ({objeto}) => {
    
    const { nombre: nombre, genero: genero, tipo: tipo, clave1: cl1, clave2: cl2, clave3: cl3 } = objeto;
    return (
        <>
            <section className="palabraClave">
                <Link to={`/categoria/${nombre}`}>{nombre}</Link>
                <Link to={`/categoria/${genero}`}>{genero}</Link>
                <Link to={`/categoria/${tipo}`}>{tipo}</Link>
                <Link to={`/categoria/${cl1}`}>{cl1}</Link>
                <Link to={`/categoria/${cl2}`}>{cl2}</Link>
                <Link to={`/categoria/${cl3}`}>{cl3}</Link>
            </section>
        </>
    )
}

export default CategoriaDetalle