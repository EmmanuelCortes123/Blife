import { Route, Routes, Navigate } from "react-router-dom";
import Home from '../pages/Home'
import Login from '../pages/Login'
import Contact from '../pages/Contact'
function AppRouter() {
    return (
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<Navigate to ="home"/>}></Route>
        </Routes>
     );
}

export default AppRouter;