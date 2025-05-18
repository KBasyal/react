import { Route, Routes } from "react-router-dom"
import Home from "../../components/pages/home/home"
import About from "../../components/pages/about"
import Contact from "../../components/pages/contactus"
const RoutingConfig=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contactus" element={<Contact/>}/>

        </Routes>

        </>
    )
}

export default RoutingConfig;