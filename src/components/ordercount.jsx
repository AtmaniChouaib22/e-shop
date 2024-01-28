import { Shopcontext } from "../Router";
import { useContext } from "react";

const Ordercount = ({ product, orderCount, inc, dec }) => {
  const { items, setItems, total, setTotal } = useContext(Shopcontext);
  return (
    <div className="border-4 rounded-xl border-green-900 p-8 w-72 flex flex-col gap-4 bg-slate-50">
      <div>
        <div className="text-lg font-bold">{product.title}</div>
        <div>${product.price}</div>
      </div>
      <div className="flex justify-around">
        <button
          onClick={dec}
          className="bg-black text-white font-extrabold text-lg px-2 rounded-full text-center"
        >
          -
        </button>
        <div
          name={product.id}
          id={product.id}
          className="bg-slate-200 px-9 rounded-xl flex justify-center items-center"
        >
          {orderCount}
        </div>
        <button
          onClick={inc}
          className="bg-black text-white font-extrabold text-lg px-2 rounded-full text-center"
        >
          +
        </button>
      </div>
      <div className="flex justify-center items-center ">
        <button
          type="submit"
          onClick={() => {
            if (orderCount > 0) {
              product.numberOfOrders = orderCount;
              product.totalp = product.price * product.numberOfOrders;
              const newArray = [...items, product];
              setItems(newArray);
              setTotal(total + product.totalp);
            }
          }}
          className="bg-green-900 py-1 px-2 text-white font-bold text-md rounded-xl"
        >
          add to Cart
        </button>
      </div>
    </div>
  );
};

export default Ordercount;
