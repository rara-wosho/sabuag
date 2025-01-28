import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../hooks/AuthProvider";

const ProtectedRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="bg-white p-2 w-100 min-h-vh">loading</div>;
  }
  return user ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoutes;
