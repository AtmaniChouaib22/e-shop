import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center p-10 gap-4">
      <div>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti
        ipsa accusamus illum quasi consequatur expedita aspernatur, voluptatem
        sit recusandae.
      </div>
      <div>
        <Link to='/products'>Shop Now</Link>
      </div>
    </div>
  );
};

export default Hero ;
