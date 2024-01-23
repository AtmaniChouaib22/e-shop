import PropTypes from "prop-types";
import Layout from "../components/layout";
import Ordercount from "../components/ordercount";
import { useState } from "react";
import Cart from "../components/cart";
import Navbar from "../components/nav";
import Footer from "../components/footer";

const Deataileditem = ({ product }) => {
  const [count, setCount] = useState(0);
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
    setCount(count + 1);
    setTotal(total + product.price);
  };

  return (
    <div className="flex-col">
    <Navbar />
      <div className="flex justify-center items-center flex-wrap pt-9 ">
        <div className="w-60">
          <img src={product.image} alt={product.title} className="h-72" />
        </div>
        <div className="w-96">
          <Ordercount
            product={product}
            count={count}
            inc={inc}
            dec={dec}
            addItems={addItems}
          />
        </div>
      </div>
      <div className="px-8 pt-8">
        <h1>Description</h1>
        {product.description}
      </div>
      <div className="relative sm:absolute inset-x-0 bottom-0">
        <Footer />
      </div>
    </div>
  );
};

Deataileditem.propTypes = {
  product: PropTypes.object,
};

export default Deataileditem;
