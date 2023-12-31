import { useState } from "react";
import { FaHamburger, FaXing, FaUtensils } from "react-icons/fa";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";

const Header = () => {
  let location = useLocation();

  const [navColour, updateNavbar] = useState(false);

  const [nav, setNav] = useState(false);

  // MenuToggle
  const toggleMenu = () => setNav(!nav);

  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  window.addEventListener("scroll", scrollHandler);
  const handleSetActive = (to) => {
    // console.log(to);
  };
  return (
    <header className="">
      <div
        className={`w-full  h-[70px] fixed z-[100] text-white
    ${
      navColour
        ? "shadow-sm  bg-main-bg transition-all text-zinc-800   duration-300 ease-in  shadow-slate-100"
        : " "
    }`}
      >
        <div className="flex items-center justify-between mx-8 h-full">
          <div>
            <a href="/">
              <h1> JayKit</h1>
            </a>
          </div>

          <div className="">
            <ul className="md:flex hidden  ">
              <li className="cursor-pointer">
                <Link
                  activeClass="active"
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onSetActive={handleSetActive}
                >
                  Home
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onSetActive={handleSetActive}
                >
                  About Us
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onSetActive={handleSetActive}
                >
                  Our Services
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  activeClass="active"
                  to="menu"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onSetActive={handleSetActive}
                >
                  Menu
                </Link>
              </li>
              <li className="cursor-pointer">
                <Link
                  activeClass="active"
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={800}
                  onSetActive={handleSetActive}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center gap-5">
            <div className="  cursor-pointer p-2 text-center border-teal-700 rounded-[100px] border-2 ">
              <a href="https://jayfood-order.netlify.app">
                <FaUtensils className="text-2xl text-firstColor cursor-pointer" />
              </a>
            </div>

            <button
              className={`buttonp hidden md:flex bg-white border-transparent  text-firstColor  ${
                navColour ? " border-altColor border-2" : ""
              }`}
            >
              <span className="hidden md:block z-10 text-12 ">
                <a href="/reservation"> Make Reservation </a>
              </span>
            </button>
            <div
              className="md:hidden pl-3 cursor-pointer transition-all "
              onClick={toggleMenu}
            >
              {!nav ? (
                <FaHamburger className="text-xl transition-all ease-in duration-[1000ms] " />
              ) : (
                <FaXing className="w-6 " />
              )}
            </div>
          </div>
        </div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute w-[50%] t-0 h-screen text-black bg-zinc-100  right-0 px-8 z-[10] py-10"
          }
        >
          <li className="mb-4 border-b pb-2 border-zinc-400 hover:pl-2  hover:border-b-teal-600 transition-all ease-in-out duration-600">
            <Link
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              onSetActive={handleSetActive}
              className={`${location.pathname === "/" ? "active " : ""}`}
            >
              Home
            </Link>
          </li>
          <li className="mb-4 border-b pb-2 border-zinc-400 hover:pl-2 hover:border-b-teal-600 transition-all ease-in-out duration-300">
            <a
              href="/"
              className={`${location.pathname === "/" ? "active " : ""}`}
            >
              About Us
            </a>
          </li>
          <li className="mb-4 border-b pb-2 border-zinc-400 hover:pl-2 hover:border-b-teal-600 transition-all ease-in-out duration-300">
            <a
              href="services"
              className={`${location.pathname === "/" ? "active " : ""}`}
            >
              Our Services
            </a>
          </li>
          <li className="mb-4 border-b pb-2 border-zinc-400 hover:pl-2  hover:border-b-teal-600 transition-all ease-in-out duration-300">
            <a
              href="/menu"
              className={`${location.pathname === "/menu" ? "active " : ""}`}
            >
              Menu
            </a>
          </li>
          <li className=" mb-4 border-b pb-2 border-zinc-400 hover:pl-2  hover:border-b-teal-600 transition-all ease-in-out duration-300">
            <a
              href="/"
              className={`${location.pathname === "/" ? "active " : ""}`}
            >
              Contact
            </a>
          </li>
          <li>
             <button
            className={`buttonp md:flex bg-white border-transparent  text-firstColor  ${
              navColour ? " border-altColor border-2" : ""
            }`}
          >
            <span className=" md:block z-10 text-xs ">
              <a href="/reservation">Make Reservation </a>
            </span>
          </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
