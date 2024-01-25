import Navbar from "./nav";
import Footer from "./footer";

const Layout = ({ children, count }) => {
  return (
    <div>
      <Navbar count={count} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
