import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './login/login.html'

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: ,
      children: [
        {
          path: ,
          element:
        },
        {
          path: ,
          element:
        },
        {
          path: ,
          element:
        },
        {
          path: ,
          element:
        },
        {
          path: ,
          element:
        },
        {
          path: ,
          element:
        },
        {
          path: ,
          element:
        },
        {
          path: ,
          element:
        }
      ]   
    },
    {
      path:"/login/login.html",
      element: <Login/>
    },

  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
