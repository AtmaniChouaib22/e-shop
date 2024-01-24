import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center px-10 py-16 gap-6">
      <div className="text-3xl font-extrabold text-center">
        Your one-stop destination for all your
        <br />
        shopping needs
      </div>
      <div className="text-xl font-medium text-center">
        Discover an unparalleled shopping experience with our extensive
        selection of products,<br/> unbeatable prices, and exceptional customer
        service. Shop now and transform your<br/> shopping journey with us.
      </div>
      <div className="px-8 py-4 bg-cyan-400 rounded-lg font-bold text-lg text-white">
        <Link to="/products">Shop Now</Link>
      </div>
    </div>
  );
};

export default Hero;
