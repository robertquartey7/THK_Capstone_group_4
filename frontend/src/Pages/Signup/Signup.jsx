import React from 'react'
import { useState } from 'react';
import axios from "axios";

export default function Signup() {
  
  const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    number:"",
    dob:"",
    address:"",
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

    axios.post(`${import.meta.env.VITE_APP_URL}auth/signup`, {
      displayName: `${user.fname} ${user.lname}`,
      // firstName: user.firstName, 
      // lastName: user.lastName,
      email:  user.email,
      number: user.number,
      dob: user.dob,
      address:user. address,
      password:user. password,
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
      <div className='Signup'></div>
      <div className="pl-4 flex justify-start mx-10 flex-col text-blue-900 font-semibold">
        <p className="text-3xl">SignUp</p>
      </div>
       <div className="container px-5  mx-auto flex w-full h-full">
        <form className="bg-white rounded-lg p-4 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md" onSubmit={handleSubmit}>
          
          <div className="relative mb-1 flex  justify-between">
            <div className=" w-full">
              <label for="firstName" className="leading-7 text-sm text-gray-600 ">
                FirstName
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:bg-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="w-full">
              <label for="lastName" className="leading-7 text-sm text-gray-600">
                LastName
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:bg-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
              value={user.email}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:bg-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
              value={user.address}
              onChange={handleChange}
              className="w-full bg-white rounded border border-gray-300 focus:bg-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                value={user.number}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:bg-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
                value={user.dob}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:bg-gray-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            
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
  
// export default Signup
// model User {
//   id        String   @id @default(uuid())
//   firstName String
//   lastName  String
//   email     String
//   password  String
//   number    String
//   role      Role     @default(BASIC)
//   Store     Store?
//   Cart      Cart[]
//   Review    Review[]

        