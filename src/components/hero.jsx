import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center px-10 py-16 gap-6 font-0">
      <div className="text-4xl font-extrabold text-center">
        Your one-stop destination for all your
        <br />
        shopping needs
      </div>
      <div className="text-xl font-normal text-center text-slate-500">
        Discover an unparalleled shopping experience with our extensive
        selection of products,
        <br /> unbeatable prices, and exceptional customer service. Shop now and
        transform your
        <br /> shopping journey with us.
      </div>
      <div className="px-8 py-3 bg-green-900 rounded-lg font-semibold text-lg text-white hover:scale-105 hover:bg-white hover:border-2 hover:border-green-900 hover:text-green-900 transition duration-150 ease-out hover:ease-in">
        <Link to="/products">Shop Now</Link>
      </div>
    </div>
  );
};

export default Hero;
