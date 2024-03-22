import AppRouter from "./routes/Routes";

import {useNavigate, useLocation} from "react-router-dom";

import './global_styles/app.scss';
import './global_styles/media.scss';
import { createContext, useEffect } from "react";
import { useState } from "react";

export const AppContext = createContext();

function App() {
  const [deviceSize, setDeviceSize] = useState(window.innerWidth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function handleResize() {
      setDeviceSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [location.pathname]);

  return (
    <>
      <AppContext.Provider
        value={{ deviceSize, navigate, location }}
      >
        <AppRouter />
      </AppContext.Provider>
    </>
  );
}

export default App;
