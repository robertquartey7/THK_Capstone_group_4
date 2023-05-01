import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="px-5 pt-5 flex items-center justify-between">
        <div>
          <Link to={"/"}>
            <img src="/img/logo.png" alt="" width={"50px"} height={"50px"} />
          </Link>
        </div>
        <div>
          <span className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-t-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <Link to="/">Home</Link>
          </span>
          <span className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-t-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <Link to="/locate">Locate</Link>
          </span>
          <span className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-t-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <Link to="/shop">Shop</Link>
          </span>
          <span className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-t-3xl border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            <Link to="/account">Account</Link>
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
