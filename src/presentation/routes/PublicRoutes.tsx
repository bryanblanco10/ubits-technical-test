import { Navigate } from "react-router-dom";
import { useAuthStore } from "../store";

interface Props {
  children: React.ReactElement;
}
export const PublicRoutes = ({ children }: Props) => {
  const { isAuthenticate } = useAuthStore();
  if (isAuthenticate) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};
