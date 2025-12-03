import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store";

export const ProtectedRoutes = () => {
  const { isAuthenticate } = useAuthStore();

  if (!isAuthenticate) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};
