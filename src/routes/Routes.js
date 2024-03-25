import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import Component from "../pages/pc_component/Component";
import NotFound from "../pages/not_found/NotFound";
import { ComponentLoader } from "../pages/pc_component/Component";
import Assembly from "../pages/assembly/Assembly";
import { AssemblyLoader } from "../pages/assembly/Assembly";

export default function AppRouter() {

    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route index path="/home" element={<button>ffaf</button>} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/component" element={<Component />} errorElement={<NotFound>Комплектующее не найдено!</NotFound>} loader={ComponentLoader} />
            <Route path="/assembly" element={<Assembly />} errorElement={<NotFound>Сборка не найдена!</NotFound>} loader={AssemblyLoader}/>
            <Route path="/*" element={<NotFound >Страница не найдена!</NotFound>} />
        </>
    ))

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}