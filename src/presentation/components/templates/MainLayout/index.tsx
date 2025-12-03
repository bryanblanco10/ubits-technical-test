import { Outlet } from "react-router-dom";
import { Header } from "../../organisms";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
