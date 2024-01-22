import { useState } from "react";

const Ordercount = ({ product, count, inc, dec, addItems }) => {
  
  

  return (
    <div>
      <div>
        <div>{product.title}</div>
        <div>{product.price}</div>
      </div>
      <div>
        <button onClick={inc}>increment</button>
        <input type="text" value={count}/>
        <button onClick={dec}>increment</button>
      </div>
      <div>
        <button type="submit" onClick={addItems}>add to Cart</button>
      </div>
    </div>
  );
};

export default Ordercount;
