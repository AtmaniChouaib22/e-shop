import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Deataileditem from "../pages/detaileditem";

const Fullitem = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json))
      .catch((err) => console.error(err));
  }, []);

  return <Deataileditem product={product} />;
};

export default Fullitem;
