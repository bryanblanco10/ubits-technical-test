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
        element: <HomePage />,
      },

      {
        path: "/login",
        element: (
          <PublicRoutes>
            <LoginPage />
          </PublicRoutes>
        ),
      },

      // Rutas privadas
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: "/products",
            async lazy() {
              const { ProductPage } = await import("@/presentation/views");
              return { Component: ProductPage };
            },
          },
        ],
      },
    ],
  },
  {
    path: "*",
    async lazy() {
      const { ErrorPage } = await import(
        /* webpackChunkName: 'ErrorPage' */ "@/presentation/views"
      );
      return {
        Component: ErrorPage,
      };
    },
  },
]);

