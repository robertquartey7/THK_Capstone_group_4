import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { Provider } from "react-redux";
import store from "./utlis/redux/store";
import Home from "./Pages/Home/Home";
import ProtectedRoute from "./utlis/protectedRoutes";
import Account from "./Pages/Account/Account";
import Locate from "./Pages/Locate/Locate";
import Shop from "./Pages/Shop/Shop";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/locate",
        element: <Locate />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
