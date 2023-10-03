import { Outlet, useLocation } from "react-router-dom";
import Nav from "../components/Navbar/Nav";
import Footer from "../components/Footer/Footer";

const Main = () => {
  let location = useLocation().pathname;
  

  return (
    <main>
      <Nav />
      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
      {location !== "/login" && <Footer />}
    </main>
  );
};

export default Main;
