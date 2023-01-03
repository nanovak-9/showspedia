import { Routes, Route } from "react-router-dom"
import App from "../components/App"
import Header from "../components/Header"

import ShowIndex from "../components/show/ShowIndex"

export default function Paths () {
    return (
        <>
            <Header/>
        
            <Routes>
                <Route path ="/" element = { <App/> }/>
                <Route path ="/about" element = { <p>About</p> }/>
                <Route path="/shows/:idShow" element={ <ShowIndex/> }/>
            </Routes>
        </>
    )
}
