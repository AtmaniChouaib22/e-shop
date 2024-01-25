import { Link } from "react-router-dom";
import { X, Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";

const NavLinks = ({ count }) => {
  return (
    <div className="flex w-full items-center justify-evenly py-4 font-0">
      <Link to="/">
        <span className="font-medium text-semibold hover:text-green-900">
          Home
        </span>
      </Link>
      <Link to="/products">
        <span className="font-medium text-semibold hover:text-green-900">
          Products
        </span>
      </Link>
      <Link to="">
        <div className="flex gap-1">
          <ShoppingCart />
          <div className="bg-red-500 px-1 rounded-full text-white">{count}</div>
        </div>
      </Link>
    </div>
  );
};

const Navbar = ({ count }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="py-1 grid grid-cols-4 shadow-lg">
      <div className="flex justify-center items-center text-xl font-bold text-green-900">
        Big Store
      </div>
      <div className="col-span-2 flex justify-center items-center">
        <input
          type="text"
          placeholder="Search for item"
          className="rounded-lg border-2 w-full sm:w-1/2 px-2 py-1 bg-slate-50 placeholder-slate-300"
        />
      </div>
      <div className="hidden sm:flex">
        <NavLinks count={count} />
      </div>
      <div className="sm:hidden flex justify-center items-center">
        <button onClick={toggleNav}>{isOpen ? <X /> : <Menu />}</button>
      </div>
      {isOpen && (
        <div className="flex basis-full flex-col items-center col-span-4">
          <NavLinks count={count} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
