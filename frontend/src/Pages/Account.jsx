import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

function Account() {
  return (
    <div className="flex">
      <aside
        id="logo-sidebar"
        className="left-0 z-40 w-64 h-screen "
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-100">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/account/personal"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white  focus:bg-secondary active:bg-secondary hover:bg-secondary"
              >
                <span className="flex-1 ml-3 whitespace-nowrap text-black ">
                  Personal Infomation
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="/account/paymentoption"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white focus:bg-secondary active:bg-secondary hover:bg-secondary"
              >
                <span className="flex-1 ml-3 whitespace-nowrap text-black">
                  Payment Options
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 flex-shrink-0 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                to="/account/accessibility"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-whitefocus:bg-secondary active:bg-secondary hover:bg-secondary"
              >
                <span className="flex-1 ml-3 whitespace-nowrap text-black">
                  Accessibility Tools
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="border border-solid w-full p-2">
        <Outlet />
      </div>
    </div>
  );
}

export default Account;
