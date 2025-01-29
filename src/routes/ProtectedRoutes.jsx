import { Navigate, Outlet } from "react-router-dom";
import Loader from "../components/ui/Loader";

import { useAuth } from "../hooks/AuthProvider";

const ProtectedRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="bg-white d-flex center p-2 w-100 min-h-vh">
        <Loader />
      </div>
    );
  }
  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
