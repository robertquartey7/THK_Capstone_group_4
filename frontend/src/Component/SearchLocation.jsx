import React from "react";

function SearchLocation() {
  return (
    <>
      <div className="bg-gray-300 w-full h-64 flex justify-center items-center">
        <form className="flex items-center w-full px-20">
          <div className="relative w-full">
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Location"
              required
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 ">
              <button type="submit">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-700 dark:text-black-700"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchLocation;
