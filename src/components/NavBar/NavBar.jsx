import { useState } from "react";
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
                <a className="logotipo" href="#">
                    <img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1667461454/icons/pinguino03_cnrawx.gif" alt="logotipo pinguino" />
                </a>
                <span>pinguiShop</span>
            </section>
            <section className="menuAndCar">
                <ul className="listMenu">
                    <li><a >home</a></li>
                    <li><a >nosotros</a></li>
                    <li><a >contacto</a></li>
                </ul>
                <CartWidget/>
            </section>
            <Toggle prop1={toggleClassCheck} func2={handleClick}/>
        </nav>
        </>
    )
}

export default NavBar