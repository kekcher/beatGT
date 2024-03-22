import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Component from "../pages/pc_component/Component";

export default function AppRouter() {
    return (
        <Routes>
            <Route index path="/home" element={<p>ffaf</p>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/component" element={<Component/>} />
        </Routes>
    );
}