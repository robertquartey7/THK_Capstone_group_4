import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import { Provider } from "react-redux";
import store from "./utlis/redux/store";
import Home from "./Pages/Home";
import ProtectedRoute from "./utlis/protectedRoutes";
import Account from "./Pages/Account";
import Locate from "./Pages/Locate";
import Shop from "./Pages/Shop";
import Personal from "./Component/Personal";
import Accessibility from "./Component/Accessibility";
import 'react-toastify/dist/ReactToastify.css';
import Product from "./Pages/Product";
import LocateComp from "./Component/LocateComp";
import Card from "./Component/Card";
import PaymentMethod from "./Component/PaymentMethod/PaymentMethod";
import Stores from "./Pages/Stores";
import UserProfile from "./Component/UserProfile";
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
        path: "/card",
        element: <Card />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/account",
        element: <Account />,
        children: [
          {
            path: "",
            element: <UserProfile />,
          },
          {
            path: "personal",
            element: <Personal />,
          },
          {
            path: "paymentoption",
            element: <PaymentMethod />,
          },
          {
            path: "accessibility",
            element: <Accessibility />,
          },
        ],
      },
      {
        path: "/shop",
        element: <Shop />,
        children: [
          {},
          {
            path: "stores",
            element: <Stores />,
          },
        ],
      },
      {
        path: "/locate",
        element: <Locate />,
        children: [
          {
            path: "",
            element: <LocateComp />,
          },
          {
            path: "products",
            element: <Product />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
