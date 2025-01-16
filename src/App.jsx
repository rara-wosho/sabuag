import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

import AllRoutes from "./routes/AllRoutes";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  // Check if the current route is an authentication page
  const isAuthPage =
    location.pathname === "/" || location.pathname === "/auth/signup";

  return (
    <>
      <AllRoutes />
      {/* {!isAuthPage && <Footer />} */}
    </>
  );
}

export default App;
