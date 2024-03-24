import { Routes, Route } from 'react-router-dom';
import Login from '../pages/login/Login';
import Registration from '../pages/registration/Registration';
import Home from '../pages/home/Home';
import CreateAssemb from '../pages/create_assemb/Create_assemb';

export default function AppRouter() {
  return (
    <Routes>
      <Route index path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/create_assemb" element={<CreateAssemb />} />
    </Routes>
  );
}
