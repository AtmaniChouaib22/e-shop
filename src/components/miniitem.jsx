const Miniitem = ({ productItem }) => {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:items-center flex flex-col items-center bg-slate-50 sm:w-96 px-3 shadow-md transition duration-150 ease-out hover:ease-in hover:scale-105">
      <div className="flex justify-center items-center">
        <img
          src={productItem.image}
          className="sm:h-32 sm:w-44 h-28 w-32"
          alt="item-image"
        />
      </div>
      <div className="flex flex-col col-span-2 px-3 gap-3">
        <div className="font-0 font-semibold text-lg">{productItem.title}</div>
        <div>items ordered: {productItem.numberOfOrders}</div>
        <div>total price: ${productItem.totalp}</div>
      </div>
    </div>
  );
};

export default Miniitem;
