import Miniitem from "./miniitem";
const Cart = ({ data, total }) => {
  return (
    <dialog className="" data-modal>
      <div className=".popnav">
        {data.map((item) => (
          <Miniitem itemprod={item} key={item.id} />
        ))}
      </div>
      <div>total: {total}</div>
      <div>
        <button>checkout</button>
      </div>
    </dialog>
  );
};

export default Cart;
