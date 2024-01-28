import Miniitem from "./miniitem";
import { Shopcontext } from "../Router";
import { useContext } from "react";
import Layout from "./layout";
const Cart = () => {
  const { items, total } = useContext(Shopcontext);
  return (
    <Layout>
      <div className="flex flex-col items-center py-6 gap-8 ">
        <div className="text-3xl font-0 font-bold">Your Cart</div>
        <div className="flex flex-col justify-center gap-6">
          {items.map((item) => (
            <Miniitem productItem={item} key={item.id} />
          ))}
        </div>
        <div className="font-0 font-medium ">total: ${total}</div>
        <div className="px-8 py-3 bg-green-900 rounded-lg font-semibold text-lg text-white hover:scale-105 hover:bg-white hover:border-2 hover:border-green-900 hover:text-green-900 transition duration-150 ease-out hover:ease-in">
          <button>checkout</button>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
