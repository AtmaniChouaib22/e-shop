import PropTypes from "prop-types";
import Ordercount from "../components/ordercount";
import { useState } from "react";
import Navbar from "../components/nav";
import Footer from "../components/footer";

const Deataileditem = ({ product, setCount, count }) => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const findTotal = (items) => {
    items.map((item) => {
      setTotal(total + item.price);
    });
  };

  const inc = () => {
    setCount(count + 1);
    setTotal(total + product.price);
  };

  const dec = () => {
    setCount(count - 1);
    setTotal(total - product.price);
  };

  const addItems = () => {
    setItems([...items, product]);
    findTotal(items);
    setTotal(total + product.price);
  };

  return (
    <div className="flex-col">
      <Navbar count={count} />
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
            count={count}
            inc={inc}
            dec={dec}
            addItems={addItems}
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
