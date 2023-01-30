import { useContext, useState } from "react"

const Toggle = ({prop1,func2}) => {
    const [toggleState, setToggleState] = useState(false)
    
    function handleClick(){
        setToggleState(toggleState => !toggleState);
    }

    const toggleClassCheck = toggleState ? 'active': '';

    // const fincActivaToggle = () => {
    //     const toggle = document.querySelector('.toggle')
    //     const nav = document.querySelector('.navBar')
    //     toggle.classList.toggle('active'), nav.classList.toggle('active')
    // }
    
    return (
        <>
            <div className={`toggle ${prop1}`} onClick={func2}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </>
    )
}
export default Toggle;


