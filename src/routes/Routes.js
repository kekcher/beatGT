import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Login from '../pages/login/Login';
import Registration from '../pages/registration/Registration';
import Component from '../pages/pc_component/Component';
import NotFound from '../pages/not_found/NotFound';
import { ComponentLoader } from '../pages/pc_component/Component';
import Home from '../pages/home/Home';

export default function AppRouter() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route index path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/component" element={<Component />} loader={ComponentLoader} />
        <Route path="/*" element={<NotFound>Страница не найдена!</NotFound>} />
      </>,
    ),
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
