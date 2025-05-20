import { Route, Routes } from "react-router-dom"
// import About from "../../components/pages/about"
// import Contact from "../../components/pages/contactus"
import Home from "../../pages/home/home"
import About from "../../pages/about"
import Contact from "../../pages/contactus"
import Login from "../../pages/login"
import SignUp from "../../pages/sign-up"
const RoutingConfig=()=>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contactus" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path= "/sign-up"  element={<SignUp/>}/>

        </Routes>

        </>
    )
}

export default RoutingConfig;