import { Navbar, MobileNav, Typography, Button, IconButton } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setOpenNav(false));
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="h6" color="blue-gray" className="p-1 font-medium">
        <Link to="/">Home</Link>
      </Typography>
      <Typography as="li" variant="h6" color="blue-gray" className="p-1 font-medium">
        <Link to="/admissions">Admissions</Link>
      </Typography>
      <Typography as="li" variant="h6" color="blue-gray" className="p-1 font-medium">
        <Link to="/academics">Academics</Link>
      </Typography>
      <Typography as="li" variant="h6" color="blue-gray" className="p-1 font-medium">
        <Link to="/teachers">Teachers</Link>
      </Typography>
    </ul>
  );

  return (
    <div>
      <Navbar className="fixed mx-auto min-w-full py-2 px-4 lg:px-8 lg:py-4 rounded-none z-10 bg-opacity-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-blue-gray-900">
          {/* Logo */}
          <div>
            <img src={logo} alt="" className="h-12" />
          </div>
          <div className="hidden lg:block">{navList}</div>

          <Button color="blue" size="lg" className="rounded-none">
            Login
          </Button>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <Button color="blue" size="lg" className="w-full rounded-none">
              Login
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default Nav;