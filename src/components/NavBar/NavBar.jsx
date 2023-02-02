import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget "
import Toggle from "../Toggle/Toggle"

//objetivo : crear el menú e-comerce de tu proyecto
const NavBar = () => {
    const [toggleState, setToggleState] = useState(false)
    
    function handleClick(){
        setToggleState(toggleState => !toggleState);
    }

    const toggleClassCheck = toggleState ? 'active': '';

    return (
        <>
        <nav className={`navBar ${toggleClassCheck}`}>
            <section className="contenedorLogo">
                <Link to='/' className="logotipo">
                    <img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1667461454/icons/pinguino03_cnrawx.gif" alt="logotipo pinguino" />
                </Link>
                <span>pinguiShop</span>
            </section>
            <section className="menuAndCar">
                <ul className="listMenu">
                    <li><NavLink to='/' className={({ isActive })=> isActive ? 'rutaActiva' : '' }>home</NavLink></li>
                    <li className="listConSubMenu">
                        <a>categoria 
                            <ion-icon name="chevron-down"></ion-icon>
                        </a>
                        <ul className="subMenuCategoria">
                                <li><NavLink to='/categoria/funkos' className={({ isActive })=> isActive ? 'rutaActiva' : '' }>funkos</NavLink></li>
                                <li><NavLink to='/categoria/figuras' className={({ isActive })=> isActive ? 'rutaActiva' : '' }>figuras</NavLink></li>
                        </ul>            
                    </li>
                    <li><NavLink to='/nosotros' className={({ isActive })=> isActive ? 'rutaActiva' : '' }>nosotros</NavLink></li>
                    <li><NavLink to='/contacto' className={({ isActive })=> isActive ? 'rutaActiva' : '' }>contacto</NavLink></li>
                </ul>
                    <CartWidget/>
            </section>
            <Toggle prop1={toggleClassCheck} func2={handleClick}/>
        </nav>
        </>
    )
}

export default NavBar