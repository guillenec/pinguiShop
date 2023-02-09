import { useEffect } from "react"

const Loading = () => {
    useEffect(()=>{
        return (
            console.log('desmontando loading...')
        )
    })
    return (
        <>
            <div className="contentLoader"><span className="loader">Loading</span></div>
        </>
    )
}

export default Loading 