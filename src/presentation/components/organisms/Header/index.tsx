import { useAuthStore } from "@/presentation/store";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { ButtonPrimary } from "../../atoms";
import { HeaderContainer, Logo, Nav, NavItem } from "./style";
export const Header = () => {
  const { isAuthenticate, reset } = useAuthStore();
  const navigate = useNavigate();
  const isLogin = useLocation().pathname !== "/login";
  const logout = () => {
    reset();
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <NavLink to="/">
        <Logo src="/logo.png" alt="Logo" />
      </NavLink>

      {isLogin && (
        <>
          <Nav>
            <NavLink to="/products">
              <NavItem>Productos</NavItem>
            </NavLink>
          </Nav>
          {isAuthenticate ? (
            <div>
              <ButtonPrimary
                text="Cerrar Sesión"
                variant="outline"
                type="button"
                onClick={logout}
              />
            </div>
          ) : (
            <NavLink to="/login">
              <ButtonPrimary
                text="Iniciar sesión"
                variant="primary"
                type="button"
              />
            </NavLink>
          )}
        </>
      )}
    </HeaderContainer>
  );
};
