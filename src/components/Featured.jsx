import { useEffect, useState } from "react";
import Card from "./card";

const Featured = () => {
  const [products, setProducts] = useState([]);
  const [ isLoading, setLoading ] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch("https://fakestoreapi.com/products?limit=4", {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setLoading(false)
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="shadow-lg bg-gray-50 pt-5 font-0">
      <div className="text-center font-extrabold text-4xl">Featured Items</div>
      <div className="flex justify-center items-center gap-8 flex-wrap p-8">
        {!isLoading? products.map((product) => (
          <Card
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        )): (<div>fetching data</div>)}
      </div>
    </div>
  );
};

export default Featured;
