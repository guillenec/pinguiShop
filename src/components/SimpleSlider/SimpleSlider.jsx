import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimpleSlider = ( {objeto} ) => {
    console.log("Slider")

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        cssEase: "linear",
        autoplaySpeed: 10000,
    }


    return (
        <div className='containSlider'>
            <h2>Slider autoplay</h2>
            <Slider {...settings}>
                <div className='slider pokemon'>
                    <h3>1 Pokemon</h3>
                </div>
                <div className='slider onePunch'>
                    <h3>2 One punch</h3>
                </div>
                <div className='slider mandalorian'> 
                    <h3>3 The mandalorian</h3>
                </div>
                <div className='slider onePiece'>
                    <h3>4 One Piece</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
            </Slider>
        </div>
    )
}

export default SimpleSlider