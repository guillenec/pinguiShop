import React, { useState, useEffect } from 'react';
// import Vibrant from 'node-vibrant';
// import axios from 'axios';

function SliderItem({ allProds, banner }) {
    const [predominantColor, setPredominantColor] = useState('#3E4098');

    useEffect(() => {
        setPredominantColor(banner.color)

    }, [])

    return (
        <>
            <div className='sliderCaja dragonBall' style={{ backgroundColor: predominantColor }}>
                <img src={banner.imagen} alt="" />
                <section className='contenidoSlider'>
                    <h3>funkos coleccio</h3>

                </section>
            </div>
        </>
    )
}

export default SliderItem