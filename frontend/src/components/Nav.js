import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Axios } from "axios";
const Nav = () => {
  const [product, setProducts] = useState([]);
  const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false);
  const [userMenuIsActive, setUserMenuIsActive] = useState(false);
  const [searchBarIsActive, setSearchBarIsActive] = useState(false);

  const handleOpenMobileMenu = () => {
    setMobileMenuIsActive((current) => !current);
  };
  const handleOpenUserMenu = () => {
    setUserMenuIsActive((current) => !current);
  };

  const handleOpenSearchBar = () => {
    setSearchBarIsActive((current) => !current);
  };

  return (
    <React.Fragment>
      <div className="desktop-nav w-100% p-6 bg-white flex items-center">
        <div className="container flex m-auto">
          <h2 className="text-xl flex items-center">
            <img
              width="20px"
              className="mr-3"
              src={require("../assets/web-design.png")}
              alt="logo"
            />
            Theme Pen
          </h2>
          <nav className="flex-1 pl-10 flex items-center">
            <ul>
              <li className="inline-block mx-4">
                <a href="#w">Home</a>
              </li>
              <li className="inline-block mx-4">
                <a href="#w">About us</a>
              </li>
              <li className="inline-block mx-4">
                <a href="#w">Contact us</a>
              </li>
            </ul>
          </nav>
          <div
            className={searchBarIsActive ? "show search-bar " : "search-bar"}
          ></div>
          <div onClick={handleOpenSearchBar} className="px-4">
            <ion-icon name="search-outline"></ion-icon>
          </div>
          <div onClick={handleOpenUserMenu} className="px-4">
            <ion-icon name="grid-sharp"></ion-icon>
          </div>
        </div>
      </div>
      <div
        className={
          userMenuIsActive
            ? "open user-menu w-32 bg-white absolute right-10 top-20 rounded-b-sm"
            : "user-menu"
        }
      >
        <div className="flex items-center p-2">
          <ion-icon name="person-add"></ion-icon>
          <h2 className="ml-2">sign in</h2>
        </div>
        <div className="flex items-center p-2">
          <ion-icon name="person-circle"></ion-icon>
          <h2 className="ml-2">log in</h2>
        </div>
      </div>
      <div className="mobile-nav w-100% p-6 bg-white items-center justify-between">
        <h2 className="text-xl flex items-center">
          <img
            width="20px"
            className="mr-3"
            src={require("../assets/web-design.png")}
            alt="logo"
          />
          Theme Pen
        </h2>
        <button onClick={handleOpenMobileMenu}>
          <ion-icon name="grid-sharp"></ion-icon>
        </button>
      </div>
      <div
        className={
          mobileMenuIsActive ? "show w-100% h-fit bg-white pb-3" : "menu w-100%"
        }
      >
        <nav>
          <ul>
            <li className="bg-blue-100 p-1.5 border-l-4 border-blue-500">
              <div className="flex items-center">
                <a className="ml-2" href="#w">
                  Home
                </a>
              </div>
            </li>
            <li className="hover:bg-slate-100 p-1.5 hover:border-l-4 hover:border-slate-300 my-2">
              <div className="flex items-center">
                <a className="ml-2" href="#w">
                  About us
                </a>
              </div>
            </li>
            <li className="hover:bg-slate-100 p-1.5 hover:border-l-4 hover:border-slate-300 my-2">
              <div className="flex items-center">
                <a className="ml-2" href="#w">
                  Contact us
                </a>
              </div>
            </li>
            <li className="hover:bg-slate-100 p-1.5 hover:border-l-4 hover:border-slate-300 my-2">
              <Link className="ml-2" to="/login">
                Login
              </Link>
            </li>
            <li className="hover:bg-slate-100 p-1.5 hover:border-l-4 hover:border-slate-300 my-2">
              <Link className="ml-2" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Nav;
