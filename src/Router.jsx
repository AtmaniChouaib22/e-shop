import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import AllProducts from "./pages/allProducts";
import Fullitem from "./components/fullitem";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <AllProducts />,
    },
    {
      path: "/products/:id",
      element: <Fullitem />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
