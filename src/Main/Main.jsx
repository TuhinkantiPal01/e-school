import { Outlet } from "react-router-dom";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <main>
      <Nav />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
      <Footer/>
    </main>
  );
};

export default Main;
