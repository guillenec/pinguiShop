import React, { useState, useEffect } from 'react';
// import Vibrant from 'node-vibrant';
// import axios from 'axios';

function SliderItem({ allProds, banner }) {
    const [predominantColor, setPredominantColor] = useState('#3E4098');
    const [gradiente, setgradiente] = useState("null");


    useEffect(() => {
        setPredominantColor(banner.color);

        if (banner.gradiente !== "") {
            setPredominantColor(banner.gradiente);
        }  
    }, [])

    const prodsBanner = allProds.filter((element) => banner.nombre === element.clave2 && element.clave3 === "coleccion")
        console.log(prodsBanner)
        
    return (
        <>
            <div className='sliderCaja dragonBall' style={{ background: predominantColor}}>
                <img src={banner.imagen} alt="" />
                <section className='contenidoSlider'>
                    <h3>funkos coleccio</h3>

                </section>
            </div>
        </>
    )
}

export default SliderItem

