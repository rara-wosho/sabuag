import { useEffect } from "react";

import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

import AllRoutes from "./routes/AllRoutes";
import { AuthProvider } from "./hooks/AuthProvider";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AuthProvider>
      <AllRoutes />
    </AuthProvider>
  );
}

export default App;
