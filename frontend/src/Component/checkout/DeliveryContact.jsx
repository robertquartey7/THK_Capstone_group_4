import React from "react";

function DeliveryContact() {
  return (
    <div>
      <div></div>
      <div>
        <div className="container px-5  mx-auto flex w-full h-full ">
          <form className="bg-white rounded-lg p-4 px-5` flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative">
            <div className="relative mb-1 flex gap-4  justify-between">
              <div className=" w-full">
                <label
                  for="firstName"
                  className="leading-7 text-sm text-gray-600 "
                >
                  FirstName
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="w-full">
                <label
                  for="lastName"
                  className="leading-7 text-sm text-gray-600"
                >
                  LastName
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="relative mb-1">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div>
              <div className="relative mb-1">
                <label for="number" className="leading-7 text-sm text-gray-600">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="mt-10">
              <span>Address details</span>
              <div className="relative mb-1">
                <label
                  for="address"
                  className="leading-7 text-sm text-gray-600"
                >
                  Home address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-1 flex gap-4  justify-between">
                <div className=" w-full">
                  <label
                    for="state"
                    className="leading-7 text-sm text-gray-600 "
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="w-full">
                  <label for="city" className="leading-7 text-sm text-gray-600">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="relative mb-1 flex gap-4  justify-between">
                <div className=" w-full">
                  <label
                    for="zipcode"
                    className="leading-7 text-sm text-gray-600 "
                  >
                    Zipcode
                  </label>
                  <input
                    type="text"
                    id="zipcode"
                    name="zipcode"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="w-full">
                  <label for="apt" className="leading-7 text-sm text-gray-600">
                    Door number
                  </label>
                  <input
                    type="text"
                    id="apt"
                    name="apt"
                    className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                  <input
                    id="same"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-secondary dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-secondary dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 active:bg-secondary"
                    required
                  />
                </div>
                <label
                  for="same"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  my shipping and billing are the same
                </label>
              </div>
            </div>
            <button className="mt-5 text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-opacity-80 rounded text-lg">
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DeliveryContact;
