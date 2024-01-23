import Navbar from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="w-96">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
