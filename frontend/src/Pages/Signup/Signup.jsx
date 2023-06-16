import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import {Autocomplete } from "@react-google-maps/api";
import { toast } from "react-toastify";
export default function Signup() {
 
 

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    dob: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const [address, setAddress] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);

  function onPlacesChange() {
    setUser({
      ...user,
      address: autocomplete.getPlace().formatted_address,
    });
  }
  async function handleSubmit(e) {
    e.preventDefault();
   

   try {
    const newUser = await axios
    .post(`https://tkhcapstonegroup4-production.up.railway.app/v1/auth/signup`, {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      number: user.number,
      dob: user.dob,
      address: user.address,
      password: user.password,
    })
    if(newUser){
      toast.success("Sign up Successful", {
        position: toast.POSITION.TOP_RIGHT,
      })
    }

   } catch (error) {
    console.log(error)
    toast.error("something went wrong", {
      position: toast.POSITION.TOP_RIGHT,
    });
   }

  }

  return (
    <div className="w-screen h-full flex flex-row-reverse">
      <div className="w-2/4 bg-primary  gap-2 flex flex-col justify-center items-center">
        <div className="">
          <img src="/img/logo.png" alt="" className="mix-blend-multiply" />
        </div>
        <p className="text-white">Already have an Account</p>
        <Link to={"/login"}>
          <span className="bg-secondary border-none p-2 rounded">Login</span>
        </Link>
      </div>
      <div className="w-2/4 h-full">
        <div className="text-center">
          <span className="text-3xl  text-blue-900 font-semibold">BODE</span>
          <span className="text-3xl  text-green-500 font-semibold ">GO</span>
        </div>
        <p className="text-3xl container px-5  text-blue-900 font-semibold">
          SignUp
        </p>

        <div className="container px-5  mx-auto flex w-full h-full">
          <form
            className="bg-white rounded-lg p-4 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
            onSubmit={handleSubmit}
          >
            <div className="relative mb-1 flex  justify-between gap-2">
              <div className=" w-full">
                <label
                  htmlFor="firstName"
                  className="leading-7 text-sm text-gray-600 "
                >
                  FirstName
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  className="w-full bg-white rounded border b  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="lastName"
                  className="leading-7 text-sm text-gray-600"
                >
                  LastName
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  className="w-full bg-white rounded border b  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="relative mb-1">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full bg-white rounded border b  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-1">
              <label
                htmlFor="address"
                className="leading-7 text-sm text-gray-600"
              >
                Home address
              </label>

            
                <Autocomplete
                  onLoad={(e) => setAutocomplete(e)}
                  onPlaceChanged={onPlacesChange}
                >
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                    className="w-full bg-white rounded border b  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </Autocomplete>
         
            </div>
            <div>
              <div className="relative mb-1">
                <label
                  htmlFor="number"
                  className="leading-7 text-sm text-gray-600"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  value={user.number}
                  onChange={handleChange}
                  className="w-full bg-white rounded border b  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="dob"
                  className="leading-7 text-sm text-gray-600"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  name="dob"
                  value={user.dob}
                  onChange={handleChange}
                  className="w-full bg-white rounded border b  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="relative mb-3">
              <label
                htmlFor="password"
                className="leading-7 text-sm text-gray-600"
              >
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="w-full bg-white rounded border b  focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded text-lg">
              create account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

