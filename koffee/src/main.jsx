import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Authentication/Login.jsx";
import SignupPage from "./Authentication/Signup.jsx";
import AboutPage from "./pages/About.jsx";
import ContactPage from "./pages/Contact.jsx";
// import Shop from "./pages/shop.jsx";

const paths = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  // {
  //   path: "/shop",
  //   element: <Shop/>,
  // },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={paths} />
  </React.StrictMode>
);
