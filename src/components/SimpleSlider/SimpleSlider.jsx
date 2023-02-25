import React from 'react'
import Slider from "react-slick";

// import "./slick.scss";
// import "./slick-theme.scss";

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
        autoplaySpeed: 14000,
    }


    return (
        <div className='containSlider'>
            <Slider {...settings}>
            <div className='sliderCaja dragonBall'>
                    <img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364406/imgs/slider/dragon_ball2_uwr8x6.jpg" alt="" />
                    <h3>1 Pokemon</h3>
                </div>
                <div className='sliderCaja pokemon'>
                    <img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364421/imgs/slider/pokemon2_n5hntz.png" alt="" />
                    <h3>1 Pokemon</h3>
                </div>
                <div className='sliderCaja onePunch'>
                    <img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364420/imgs/slider/one_punch_man2_qvxqfk.jpg" alt="" />
                    <h3>2 One punch</h3>
                </div>
                <div className='sliderCaja mandalorian'> 
                    <img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364416/imgs/slider/mandalorian3_deualz.jpg" alt="" />
                    <h3>3 The mandalorian</h3>
                </div>
                <div className='sliderCaja onePiece'>
                    <img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1677364422/imgs/slider/one_piece6_odxbmh.jpg" alt="" />
                    <h3>4 One Piece</h3>
                </div>
            </Slider>
        </div>
    )
}

export default SimpleSlider