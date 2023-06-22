import React from "react";
import useSWR from "swr";
import { fetcher } from "../utlis/dataFetch";
import { useSelector,  } from "react-redux";

function Shop() {
  const { lat, lng } = useSelector((state) => state.user.location);

  

  return (
    <div className="bg-primary h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col gap-2">
        <div>
          <img src="/img/logo.png" alt="" className="mix-blend-multiply" />
        </div>
        <span className="text-white">Location: 123 street aveune</span>
        <div className="">
          <label for="countries" class="mb">
            Select an option
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="delivery" selected>
              Delivery
            </option>
            <option value="canada">Pick Up</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Shop;
