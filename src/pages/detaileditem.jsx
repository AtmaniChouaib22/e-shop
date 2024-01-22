import PropTypes from "prop-types";
import Layout from "../components/layout";
import Ordercount from "../components/ordercount";
import { useState } from "react";

const Deataileditem = ({ product }) => {
  const [count, setCount] = useState(1);
  const [items, setItems] = useState([]);

  const inc = () => {
    setCount(count + 1);
    console.log(count);
  };

  const dec = () => {
    setCount(count - 1);
  };

  const addItems = () => {
    setItems([...items, product]);
    console.log(items);
  };

  return (
    <Layout>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <Ordercount product={product} count={count} inc={inc} dec={dec} addItems={addItems} />
      <div>
        <div>Description</div>
        {product.description}
      </div>
    </Layout>
  );
};

Deataileditem.propTypes = {
  product: PropTypes.object,
};

export default Deataileditem;
