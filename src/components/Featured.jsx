import { useEffect, useState } from "react";
import Card from "./card";

const Featured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => setProducts(json))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="text-center font-extrabold text-4xl">Featured</div>
      <div className="flex justify-center items-center gap-3 flex-wrap p-8">
        {products.map((product) => (
          <Card
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
