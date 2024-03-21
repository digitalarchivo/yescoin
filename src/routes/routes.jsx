import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

// main layout
import MainLayout from "../layout/MainLayout";
import ErrorPage from "./ErrorPage";
import Loader from "../components/Loader";

// pages (using lazy loading)
const Home = lazy(() => import("../pages/Home/Home"));
const Ranking = lazy(() => import("../pages/Ranking/Ranking"));
const Friend = lazy(() => import("../pages/Friend/Friend"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/friends",
        element: <Friend />,
      },
      {
        path: "/ranking",
        element: <Ranking />,
      },
    ],
  },
]);

export default router;
