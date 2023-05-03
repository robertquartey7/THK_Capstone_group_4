import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { Provider } from "react-redux";
import store from "./utlis/redux/store";
import Home from "./Pages/Home";
import ProtectedRoute from "./utlis/protectedRoutes";
import Account from "./Pages/Account";
import Locate from "./Pages/Locate";
import Shop from "./Pages/Shop";
import Personal from "./Component/Personal";
import Accessibility from "./Component/Accessibility";
import Payment from "./Component/Payment/Payment";

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
        children: [
          {
            path: "personal",
            element: <Personal />,
          },
          {
            path: "paymentoption",
            element: <Payment />,
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
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
