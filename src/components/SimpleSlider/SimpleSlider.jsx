import React from 'react'
import Slider from "react-slick";

const SimpleSlider = ({objeto}) => {
    console.log("Slider")


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    }


    return (
        <div className='containSlider'>
            <h2>Slider autoplay</h2>
            <Slider {...settings}>
                <div>
                    <h3></h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
            </Slider>
        </div>
    )
}

export default SimpleSlider