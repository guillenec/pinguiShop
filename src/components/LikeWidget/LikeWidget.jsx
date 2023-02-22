import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const LikeWidget = () => {
    return (
        <>
            <section className='likeWidget'>
                <NavLink to='/like'>
                    <ion-icon name="heart-sharp"></ion-icon>
                </NavLink>
            </section>
        </>
    )
}

export default LikeWidget