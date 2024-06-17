import {Nav} from "../components/nav.jsx"

export const  Home = () => {

    const authToken =true
     
    const handleClick = () => {
        console.log("clicked");
    }
    return (
        <>
        <Nav minimal={true}/>
        <div className="home">

            <h1>Sail your Ship</h1>
            <button className="primary-button" onClick={handleClick}>
                {authToken ? 'Sign out' : 'Sign up'}
            </button>
        </div>
        </>
    )
}
