import React, { useState, useEffect } from 'react'
// import Vibrant from 'node-vibrant';
// import axios from 'axios';

function SliderItem({ allProds, banner }) {
    const [predominantColor, setPredominantColor] = useState('#3E4098');
    const [gradiente, setgradiente] = useState("null")


    useEffect(() => {
        setPredominantColor(banner.color);

        if (banner.gradiente !== "") {
            setPredominantColor(banner.gradiente);
        }
    }, [])

    const prodsBanner = allProds.filter((element) => banner.nombre === element.clave2 && element.clave3 === "coleccion").slice(0, 5);
    console.log(prodsBanner)

    return (
        <>
            <div className='sliderCaja dragonBall' style={{ background: predominantColor }}>
                <img src={banner.imagen} alt={banner.descripcion} />
                <section className='contenidoSlider'>

                    <h3>funkos coleccio {banner.nombre}</h3>
                    <section className='minisCard'>

                    </section>
                </section>

            </div>
        </>
    )
}

export default SliderItem

