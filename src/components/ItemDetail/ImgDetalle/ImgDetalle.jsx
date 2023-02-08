import { useState } from "react"

const ImgDetalle = ({img1,img2,img3,describe}) => {
    const [imagen1, setImg1] = useState(img1)
    const [imagen2, setImg2] = useState(img2)
    const [imagen3, setImg3] = useState(img3)


    const handleStateImg2 = (e) => {
        e.preventDefault();
        e.stopPropagation();
        (imagen1 === img2 || imagen1 === img3) ? (setImg1(img1), setImg2(img2), setImg3(img3))
        : (setImg1(img2), setImg2(img1), setImg3(img3))
        // console.log(imagen1)
    }
    const handleStateImg3 = (e) => {
        e.preventDefault();
        e.stopPropagation();
        (imagen1 === img3 || imagen1 === img2) ? (setImg1(img1), setImg3(img3), setImg2(img2))
        : (setImg1(img3), setImg3(img1), setImg2(img2))
        // console.log(imagen1)
    }

    return (
        <>
        <section className="containerImgs">
            <div className="img1">
                <img src={imagen1} alt={describe} />
            </div>
            <div className="imgSecundary">
                <div className="img2" onClick={handleStateImg2}>
                    <img src={imagen2} alt={describe} />
                </div>
                {img3.length === 0 ? <div className="img3">no disponible</div> : <div className="img3" onClick={handleStateImg3}><img className="img3" src={imagen3} alt={describe} /></div>}
            </div>

        </section>
        </>
        
    )
}
export default ImgDetalle