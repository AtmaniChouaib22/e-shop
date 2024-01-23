import PropTypes from "prop-types";
import Layout from "../components/layout";
import Ordercount from "../components/ordercount";
import { useState } from "react";
import Cart from "../components/cart";

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
    <Layout>
      <div className="sm:grid grid-cols-2 place-items-center ">
        <div>
          <img src={product.image} alt={product.title} className="h-60" />
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
        <div className="col-span-2">
          <div>Description</div>
          {product.description}
        </div>
      </div>
      <Cart data={items} total={total} />
    </Layout>
  );
};

Deataileditem.propTypes = {
  product: PropTypes.object,
};

export default Deataileditem;
