const Ordercount = ({ product, count, inc, dec, addItems }) => {
  return (
    <div className="border-2 p-4">
      <div>
        <div className="text-lg font-bold">{product.title}</div>
        <div>{product.price}</div>
      </div>
      <div className="flex justify-around">
        <button onClick={inc}>Increment</button>
        <div name={product.id} id={product.id}>
          {count}
        </div>
        <button onClick={dec}>Decrement</button>
      </div>
      <div className="flex justify-center">
        <button type="submit" onClick={addItems}>
          add to Cart
        </button>
      </div>
    </div>
  );
};

export default Ordercount;
