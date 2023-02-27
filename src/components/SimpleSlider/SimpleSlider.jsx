import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import SliderItem from '../SliderItem/SliderItem';

// import "./slick.scss";
// import "./slick-theme.scss";

const SimpleSlider = ({ objeto }) => {
    console.log("Slider")

    const elementsBanner = [
        { "id": 1, "nombre": "the mandalorian","imgDescribe":"the mandalorian logo", "descripcion": "Figuras de la coleccion de Star Wars The Black Series, Toy Figura de la serie The Mandalorian de 6 pulgadas.", "palabraClave": "the mandalorian", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364416/imgs/slider/mandalorian3_deualz.jpg", "color": "#000000", "gradiente": "" },

        { "id": 2, "nombre": "pokemon","imgDescribe":"pockemon logo background", "descripcion": "Funkos de la coleccion pokemon, pokemon inicial. serie rojo y otras, marca pop, de 3.75 pulgadas aproximadamente.", "palabraClave": "pokemonl", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677365775/imgs/slider/pokemonLogo1_ioxzjh.jpg", "color": "#0B48A5", "gradiente": "" },

        { "id": 3, "nombre": "one punch man","imgDescribe":"one punch man logo background", "descripcion": "FunKo POP! de la coleccion One Punch Man- Figura de vinilo de 3.75 pulgadas de serie especial marca pop.", "palabraClave": "one punch man", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364420/imgs/slider/one_punch_man2_qvxqfk.jpg", "color": "#000000", "gradiente": "" },

        { "id": 4, "nombre": "dragon ball","imgDescribe":"dragon Ball logo background", "descripcion": "Funko pop de la coleccion Dragon ball y Dragon Ball Z, Figuras coleccionables marca pop, de 3.75 pulgadas aproximadamente.", "palabraClave": "dragon ball", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364406/imgs/slider/dragon_ball2_uwr8x6.jpg", "color": "#EA6E14", "gradiente": "linear-gradient(0deg, rgba(235,68,15,1) 0%, rgba(233,154,27,1) 100%)" },

        { "id": 5, "nombre": "one piece", "imgDescribe":"one piece logo background", "descripcion": "Figuras de la coleccion Bandai Spirits Ichibansho Ichiban - One Piece - figuras (película roja).", "palabraClave": "one piece", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677366289/imgs/slider/onePieceLogo1_cspj2h.jpg", "color": "#1C1924", "gradiente": "" },

        { "id": 6, "nombre": "bad batch", "imgDescribe":"bad batch logo background", "descripcion": "Figuras Star Wars The Black Series Toy - Figura de acción coleccionable de 6 pulgadas a escala de The Bad Batch y accesorio, juguetes", "palabraClave": "bad batch", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364428/imgs/slider/bad_bach_guzdot.jpg", "color": "#cc5454", "gradiente": "linear-gradient(to right, #471E0C 0%, 49.070098996162415%, #D18261 100%)" },
    ]


    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 55000,
    }

    return (
        <div className='containSlider'>
            <Slider {...settings}>
                {
                    elementsBanner.map(element => {
                        return (
                            <SliderItem key={element.id} allProds={objeto} banner={element} />
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default SimpleSlider