import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Careers from "../pages/Careers";

const AppRoutes = ( )=>{
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/careers" element={<Careers/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;