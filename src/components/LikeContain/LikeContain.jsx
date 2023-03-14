import React, { memo } from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemLikeList from '../ItemLikeList/ItemLikeList';

const LikeContain = memo(() => {

    const { meGusta } = useCartContext()
    // console.log("mE gusta ::: ",meGusta)

    return (
        <section className='likeContainer'>
            <Link to='/' className='linkComprar'> <ion-icon name="arrow-back-outline"></ion-icon>ir a todos los productos</Link>
            {
                meGusta.length == 0 
                ? <section className='cartVacio'><h2>sin Like</h2></section>
                : <ItemLikeList listLike={meGusta}/>
                    
            }

        </section>
    )
}
)

export default LikeContain