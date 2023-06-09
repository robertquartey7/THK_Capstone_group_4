import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLinks from "./NavLink";
import Cookie from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { setAuthenticated } from "../../utlis/redux/userSlice";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Cookie.get("token")) {
      dispatch(setAuthenticated({ token: Cookie.get("token") }));
    }
  }, [isAuthenticated]);
  
  function logout() {
    console.log("hi");
    dispatch(setAuthenticated({ isAuthenticated: false}))
    Cookie.remove("token");

  }

  return (
    <nav className="bg-white">
      <div className="flex items-center justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <Link to={"/"}>
            <img
              src={"/img/logo.png"}
              alt="logo"
              className="md:cursor-pointer h-9"
            />
          </Link>
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>

        <ul className="md:flex hidden items-center gap-2 ">
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
        </ul>
        {!Cookie.get("token") ? (
          <div className="md:flex hidden py-5 gap-2">
            <Link to="/signup">
              <span className="p-3 border rounded-xl px-4  border-secondary bg-secondary text-white hover:bg-opacity-80">
                SignUp
              </span>
            </Link>
            <Link to={"/login"}>
              <span className="p-3 border rounded-xl px-4  border-secondary text-secondary hover:bg-opacity-80">
                Login
              </span>
            </Link>
          </div>
        ) : (
          <div className="md:flex hidden py-5 gap-2">
            <span className="pointer" onClick={logout}>
              Logout
            </span>
          </div>
        )}
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 z-10 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          {!isAuthenticated ? (
            <div className="md:flex hidden py-5 gap-2">
              <Link to="/signup">
                <span className="p-3 border rounded-xl px-4  border-secondary bg-secondary text-white hover:bg-opacity-80">
                  SignUp
                </span>
              </Link>
              <Link to={"/login"}>
                <span className="p-3 border rounded-xl px-4  border-secondary text-secondary hover:bg-opacity-80">
                  Login
                </span>
              </Link>
            </div>
          ) : (
            <div className="md:flex hidden py-5 gap-2">
              <span className="pointer" onClick={logout}>
                Logout
              </span>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
