import Miniitem from "./miniitem";
const Cart = ({ data, total }) => {
  return (
    <div className="">
      <div className=".popnav">
        {data.map((item) => (
          <Miniitem itemprod={item}/>
        ))}
      </div>
      <div>total: {total}</div>
      <div>
        <button>checkout</button>
      </div>
    </div>
  );
};

export default Cart;

