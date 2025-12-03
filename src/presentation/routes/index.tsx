import { HomePage, LoginPage } from "@/presentation/views";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../components";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: (
          <PublicRoutes>
            <HomePage />
          </PublicRoutes>
        ),
      },
      {
        path: "/login",
        element: (
          <PublicRoutes>
            <LoginPage />
          </PublicRoutes>
        ),
      },
      {
        path: "/",
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/client",
            async lazy() {
              const { ClientPage } = await import(
                /* webpackChunkName: 'ClientPage' */ "@/presentation/views"
              );
              return {
                Component: ClientPage,
              };
            },
          },
        ],
      },
    ],
  },
]);
