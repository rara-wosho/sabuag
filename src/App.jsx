import { useEffect } from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
import AllRoutes from "./routes/AllRoutes";
import { AuthProvider } from "./hooks/AuthProvider";
import FeedbackAlert from "./components/ui/FeedbackAlert";
import { AlertProvider } from "./hooks/AlertContext";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <AuthProvider>
      <AlertProvider>
        <FeedbackAlert />
        <AllRoutes />
      </AlertProvider>
    </AuthProvider>
  );
}

export default App;
