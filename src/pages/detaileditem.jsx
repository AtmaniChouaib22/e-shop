import PropTypes from "prop-types";
import Ordercount from "../components/ordercount";
import { useState } from "react";
import Navbar from "../components/nav";
import Footer from "../components/footer";

const Deataileditem = ({ product }) => {
  const [orderCount, setOrderCount] = useState(0);

  const inc = () => {
    setOrderCount(orderCount + 1);
  };

  const dec = () => {
    setOrderCount(orderCount - 1);
  };

  return (
    <div className="flex-col">
      <Navbar />
      <div className="flex justify-center items-center flex-wrap pt-9 pb-3 gap-2">
        <div className="w-60 flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="h-60 sm:h-72"
          />
        </div>
        <div className="w-60 sm:w-96 flex justify-center">
          <Ordercount
            product={product}
            orderCount={orderCount}
            inc={inc}
            dec={dec}
          />
        </div>
      </div>
      <div className="px-8 py-8 border-t-2 sm:flex-col items-center bg-slate-50">
        <h1 className="text-lg font-bold">Description</h1>
        <div>{product.description}</div>
      </div>
      <div className="relative  inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
};

Deataileditem.propTypes = {
  product: PropTypes.object,
};

export default Deataileditem;
