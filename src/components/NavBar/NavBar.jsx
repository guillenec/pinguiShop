import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartWidget from "../CartWidget/CartWidget "
import LikeWidget from "../LikeWidget/LikeWidget";
import PanelLogin from "../PanelLogin/PanelLogin";
import PanelRoot from "../PanelRoot/PanelRoot";
import PanelSettings from "../PanelSettings/PanelSettings";
import Toggle from "../Toggle/Toggle";
import UserWidget from "../UserWidget/UserWidget";

//objetivo : crear el menú e-comerce de tu proyecto
const NavBar = () => {
    const [toggleState, setToggleState] = useState(false)
    const [renderLogin, setRenderLogin] = useState(null)
    const [renderPanelRoot, setRenderPanelRoot] = useState(null)
    const { panelRoot, login } = useCartContext()

    function handleClick() {
        setToggleState(toggleState => !toggleState);
    }

    const toggleClassCheck = toggleState ? 'active' : '';

    useEffect(() => {
        setRenderLogin(!login ? null : <PanelLogin />)
    },[login])

    useEffect(() => {
        setRenderPanelRoot(!panelRoot ? null : <PanelSettings /> )

    },[panelRoot])
    //a ver cvomo lo hago, un mini panel para el admin
    const userLogin = "root"

    return (
        <>
            <nav className={`navBar ${toggleClassCheck}`}>
                <section className="menuSuperior">
                    <section className="contenedorLogo">
                        <Link to='/' className="logotipo">
                            <img src="https://res.cloudinary.com/dpiwmbsog/image/upload/v1667461454/icons/pinguino03_cnrawx.gif" alt="logotipo pinguino" />
                        </Link>
                        <span>pinguiShop</span>
                    </section>
                    <section className="menuAndCar">
                        <ul className="listMenu">
                            <li><NavLink to='/' className={({ isActive }) => isActive ? 'rutaActiva' : ''}>home</NavLink></li>
                            <li className="listConSubMenu">
                                <a>categoria
                                    <ion-icon name="chevron-down"></ion-icon>
                                </a>
                                <ul className="subMenuCategoria">
                                    <li><NavLink to='/categoria/funkopop' className={({ isActive }) => isActive ? 'rutaActiva' : ''}>funkos</NavLink></li>
                                    <li><NavLink to='/categoria/figura' className={({ isActive }) => isActive ? 'rutaActiva' : ''}>figuras</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to='/nosotros' className={({ isActive }) => isActive ? 'rutaActiva' : ''}>nosotros</NavLink></li>
                            <li><NavLink to='/contacto' className={({ isActive }) => isActive ? 'rutaActiva' : ''}>contacto</NavLink></li>
                        </ul>

                    </section>
                    <Toggle prop1={toggleClassCheck} func2={handleClick} />
                </section>

                <section className="subMenuPrincipal">
                    {userLogin === "root" && <PanelRoot />}
                    <UserWidget />
                    <LikeWidget />
                    <CartWidget />
                </section>

            </nav>
            {
                panelRoot || login ? (<div className="subPaneles">
                {renderPanelRoot}
                {renderLogin} 
            </div>) : null
            }
            
        </>
    )
}

export default NavBar