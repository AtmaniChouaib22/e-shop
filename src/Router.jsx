import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState, createContext } from "react";
import Home from "./pages/home";
import AllProducts from "./pages/allProducts";
import Fullitem from "./components/fullitem";
import Cart from "./components/cart";

export const Shopcontext = createContext({
  items: 0,
  setItems: () => {},
  total: 0,
  setTotal: () => {},
  totalPriceItems: 0,
  setTotalPriceItems: () => {},
});

const Router = () => {
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [totalPriceItems, setTotalPriceItems] = useState([]);

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
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);
  return (
    <Shopcontext.Provider
      value={{
        items,
        setItems,
        total,
        setTotal,
        totalPriceItems,
        setTotalPriceItems,
      }}
    >
      <RouterProvider router={router} />
    </Shopcontext.Provider>
  );
};

export default Router;
