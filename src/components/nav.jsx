import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";
import { useState } from "react";

const NavLinks = () => {
  return (
    <div className="flex w-full items-center justify-evenly py-4">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/products">
        <span>Products</span>
      </Link>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen(!isOpen)
  }
  return (
    <div className="py-1 grid grid-cols-4 shadow-lg">
      <div className="flex justify-center items-center">Logo</div>
      <div className="col-span-2 flex justify-center items-center">
        <input type="text" placeholder="Search for item"  className="rounded-lg border-2 w-full sm:w-1/2 px-2 py-1 bg-slate-50 placeholder-slate-300"/>
      </div>
      <div className="hidden sm:flex">
        <NavLinks />
      </div>
      <div className="sm:hidden flex justify-center items-center">
        <button onClick={toggleNav}>{isOpen ? <X /> : <Menu />}</button>
      </div>
      {isOpen && <div className="flex basis-full flex-col items-center col-span-4"><NavLinks /></div>}
    </div>
  );
};

export default Navbar;
