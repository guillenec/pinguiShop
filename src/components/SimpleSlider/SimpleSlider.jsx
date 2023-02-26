import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import SliderItem from '../SliderItem/SliderItem';

// import "./slick.scss";
// import "./slick-theme.scss";

const SimpleSlider = ({ objeto }) => {
    console.log("Slider")

    const elementsBanner = [
        { "id": 1, "nombre": "dragon ball", "descripcion": "banner logo dragon ball.", "palabraClave": "dragon ball", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364406/imgs/slider/dragon_ball2_uwr8x6.jpg", "color": "#EA6E14" },
        { "id": 2, "nombre": "pokemon", "descripcion": "banner logo pokemon.", "palabraClave": "pokemonl", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677365775/imgs/slider/pokemonLogo1_ioxzjh.jpg", "color": "#0B48A5" },

        { "id": 3, "nombre": "one punch man", "descripcion": "banner logo dragon ball.", "palabraClave": "one punch man", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364420/imgs/slider/one_punch_man2_qvxqfk.jpg", "color": "#000000" },

        { "id": 4, "nombre": "the mandalorian", "descripcion": "banner the mandalorian.", "palabraClave": "the mandalorian", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364416/imgs/slider/mandalorian3_deualz.jpg", "color": "#345C8D" },

        { "id": 5, "nombre": "one piece", "descripcion": "banner one piece.", "palabraClave": "one piece", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677366289/imgs/slider/onePieceLogo3_nfcomt.png", "color": "#51A1CB" },

        { "id": 6, "nombre": "bad batch", "descripcion": "banner logo dragon ball.", "palabraClave": "bad batch", "imagen": "https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364428/imgs/slider/bad_bach_guzdot.jpg", "color": "#cc5454" },
    ]

    const settings = {
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: "linear",
        autoplaySpeed: 5000,
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