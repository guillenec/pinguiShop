const ItemDetail = ({estadoProds}) => {
    const {id: id, nombre: nombre, descripcion: describe, stock: stock, precio: precio, descuento: descuento, genero: genero, tipo: tipo, imagenA: img1, imagenB: img2, imagenC: img3, imagenD: img4, clave1: cl1, clave2: cl2, clave3: cl3} = estadoProds;

    return (
        <>
            <section className="itemDetailContain">
                <section className="containImgs">
                    <div className="imgPrincipal">
                        <img src={img1} alt={describe} />
                    </div>
                    <div className="imgSecundary">
                        <img src={img2} alt={describe} /> 
                        <img src={img3} alt={describe} />                      
                    </div>
                </section>
                
                <section className="detalle">
                    <h2 className="precio"></h2>
                    <p><strong>Categoria</strong> </p>
                </section>

            </section>
        </>
    )
}