import axios from "axios";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";

function Personal() {
  const [userProileData, setUserProfileData] = useState(null);

  async function getUserData() {
    const {
      data: { data },
    } = await axios.get(
      "https://tkhcapstonegroup4-production.up.railway.app/v1/auth/",
      {
        headers: {
          Authorization: `Bearer ${Cookie.get("token")}`,
        },
      }
    );
    if (data) {
      setUserProfileData(data);
      console.log(data);
    }
  }
  useEffect(() => {
    getUserData();
    console.log(userProileData);
  }, []);

  return (
    <div>
      <div className="container px-5  mx-auto flex w-full h-full">
        <form className="bg-white rounded-lg p-4 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative  shadow-md">
          <span>Contact Details</span>
          <div className="relative w-60 h-60 m-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 absolute right-7 bg-gray-500 rounded-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
            <div>
              <img
                src="/img/default.png"
                alt="default"
                className="border border-black rounded-full"
              />
            </div>
          </div>
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
                value={userProileData?.firstName}
                className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="w-full">
              <label for="lastName" className="leading-7 text-sm text-gray-600">
                LastName
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={userProileData?.lastName}
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
              value={userProileData?.email}
              className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-1">
            <label for="address" className="leading-7 text-sm text-gray-600">
              Home address
            </label>
            <input
              type="text"
              id="address"
              name="address"
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
                value={userProileData?.number}
              />
            </div>
            <div className="relative mb-4">
              <label for="dob" className="leading-7 text-sm text-gray-600">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>

          <div className="mt-10">
            <span>Delivery details</span>
            <div className="relative mb-1">
              <label for="address" className="leading-7 text-sm text-gray-600">
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
                <label for="state" className="leading-7 text-sm text-gray-600 ">
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
                  Apt No.
                </label>
                <input
                  type="text"
                  id="apt"
                  name="apt"
                  className="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
          <button className="mt-5 text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-opacity-80 rounded text-lg">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default Personal;
