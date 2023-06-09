import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../utlis/redux/userSlice";

export default function Login() {
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
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

  async function handleSubmit(e) {
    e.preventDefault();

    try {
   
      const getUser = await axios.post(`/v1/auth/login`, {
        email: user.email,
        password: user.password,
      });

      if (getUser) {
    
        Cookie.set("token", getUser.data.token);
        toast.success("Login Successful", {
          position: toast.POSITION.TOP_RIGHT,
        });
        dispatch(setAuthenticated({ isAuthenticated: true,}))
        navigate('/')
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }

  return (
    <div className="w-screen flex flex-row-reverse h-full">
      <div className="w-2/4 bg-primary  gap-2 flex flex-col justify-center items-center">
        <div className="">
          <img src="/img/logo.png" alt="" className="mix-blend-multiply" />
        </div>
        <p className="text-white">Don't have an account</p>
        <Link to={"/signup"}>
          <span className="bg-secondary border-none p-2 rounded">Signup</span>
        </Link>
      </div>
      <div className="w-2/4 h-full">
        <div className="text-center">
          <span className="text-3xl  text-blue-900 font-semibold">BODE</span>
          <span className="text-3xl  text-green-500 font-semibold ">GO</span>
        </div>
        <p className="text-3xl container px-5  text-blue-900 font-semibold">
          Login
        </p>

        <div className="container px-5  mx-auto flex w-full h-full">
          <form
            className="bg-white rounded-lg p-4 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
            onSubmit={handleSubmit}
          >
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
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
