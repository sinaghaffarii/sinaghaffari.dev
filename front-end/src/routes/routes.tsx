import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import RouterError from "../components/ErrorBoundry/RouterError";
import { RouteObject } from "../constant/RouteObject";
import Dashboard from "../pages/dashboard";
import Blog from "../pages/blog";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Login from "@/pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <RouterError />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: RouteObject.BLOG,
        Component: Blog,
      },
      {
        path: RouteObject.LOGIN,
        Component: Login,
      },
      {
        path: RouteObject.DASHBOARD,
        Component: Dashboard,
      },
      {
        path: RouteObject.NOT_FOUND,
        Component: NotFound,
      },
    ],
  },
]);
