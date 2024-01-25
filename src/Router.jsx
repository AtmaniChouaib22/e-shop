import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/home";
import AllProducts from "./pages/allProducts";
import Fullitem from "./components/fullitem";

const Router = () => {
  const [count, setCount] = useState(0);
  console.log(count)

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home count={count}  />,
    },
    {
      path: "/products",
      element: <AllProducts count={count} />,
    },
    {
      path: "/products/:id",
      element: <Fullitem count={count} setCount={setCount} />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
