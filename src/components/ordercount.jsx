const Ordercount = ({ product, count, inc, dec, addItems }) => {
  return (
    <div className="border-2 p-4 w-72 flex flex-col gap-4">
      <div>
        <div className="text-lg font-bold">{product.title}</div>
        <div>{product.price}</div>
      </div>
      <div className="flex justify-around">
        <button onClick={dec} className="bg-black text-white font-extrabold text-lg px-2 rounded-full text-center">-</button>
        <div name={product.id} id={product.id} className="bg-slate-200 px-9 rounded-xl flex justify-center items-center">
          {count}
        </div>
        <button onClick={inc} className="bg-black text-white font-extrabold text-lg px-2 rounded-full text-center">+</button>
      </div>
      <div className="flex justify-center items-center ">
        <button type="submit" onClick={addItems} className="bg-cyan-500 py-1 px-2 text-white font-bold text-md rounded-xl">
          add to Cart
        </button>
      </div>
    </div>
  );
};

export default Ordercount;
