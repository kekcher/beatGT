import AppRouter from "./routes/Routes";

import './global_styles/app.scss';
import './global_styles/media.scss';
import { createContext, useEffect } from "react";
import { useState } from "react";

export const AppContext = createContext();

function App() {
  const [deviceSize, setDeviceSize] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setDeviceSize(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <AppContext.Provider
        value={{ deviceSize }}
      >
        <AppRouter />
      </AppContext.Provider>
    </>
  );
}

export default App;
