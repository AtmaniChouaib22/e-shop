import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Card from "../components/card";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Layout>
      <div className="flex flex-wrap gap-3 justify-center items-center py-14">
        {products.map((item) => (
          <Card
            id={item.id}
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </Layout>
  );
};

export default AllProducts;
