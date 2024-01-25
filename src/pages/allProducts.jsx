import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Card from "../components/card";

const AllProducts = ({count}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Layout count={count}>
      <div className="w-full justify-center text-center items-center text-2xl pt-4 font-bold">All Products</div>
      <div className="flex flex-wrap gap-3 justify-center items-center py-14">
        {!isLoading ? (
          products.map((item) => (
            <Card
              id={item.id}
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          <div>fetching data</div>
        )}
      </div>
    </Layout>
  );
};

export default AllProducts;
