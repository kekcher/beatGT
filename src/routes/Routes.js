import { Routes, Route } from "react-router-dom";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";

export default function AppRouter() {
    return (
        <Routes>
            <Route index path="/" element={<p>Не логин</p>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
        </Routes>
    );
}