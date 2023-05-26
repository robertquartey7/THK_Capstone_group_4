import React from 'react'
import { useState } from 'react';
import axios from "axios";

export default function Login() {
  
  const [user, setUser] = useState({
    email:"",
    password:''
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  function handleSubmit(e){
    e.preventDefault()
    console.log(user)

    axios.post(`${import.meta.env.VITE_APP_URL}auth/login`, {

      email:  user.email,
      password:user.password,

    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

  return (
    <div className="flex"> 
     <div className="flex-1 text-blue-900 font-semibold items-end">
        <p className="text-3xl">BODE</p>
      </div>
      <div className="flex-1 text-right text-green-500 font-semibold ">
        <p className="text-3xl">GO</p>
      </div>
      <div className='Login'></div>
      <div className="pl-4 flex justify-start mx-10 flex-col text-blue-900 font-semibold">
        <p className="text-3xl">SignUp</p>
      </div>

       <div className="container px-5  mx-auto flex w-full h-full">
        
        <form className="bg-white rounded-lg p-4 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md" onSubmit={handleSubmit}>
          
          <div className="relative mb-1">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:bg-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
      
          <div className="relative mb-3">
              <label for="password" className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="text"
                id="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:bg-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          <button className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-500 rounded text-lg">
            create account
          </button>
        </form>
      </div>
        </div>
  );
}