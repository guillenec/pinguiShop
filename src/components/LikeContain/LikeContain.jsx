import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemLike from '../ItemLike/ItemLike';

const LikeContain = () => {

    const { meGusta } = useCartContext()
    // console.log("mE gusta ::: ",meGusta)
    
    return (
        <section className='likeContainer'>
            <Link to='/' className='linkComprar'> <ion-icon name="arrow-back-outline"></ion-icon>ir a todos los productos</Link>
            {
                meGusta.length == 0 ? <section className='cartVacio'><h2>sin Like</h2></section>
                    :
                    <section className='containLikes'>
                        <h1>Me Gustan</h1>
                        <section className='like'>
                            {
                                meGusta.map(elemento => {
                                    return (<section key={elemento.id} className="elementLike">
                                        <ItemLike  objeto={elemento}/>
                                    </section>)
                                })
                            }
                        </section>
                    </section>
            }

        </section>
    )
}

export default LikeContain