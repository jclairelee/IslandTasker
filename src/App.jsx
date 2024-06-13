import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import MySale from "./pages/mySale/MySale";
import Messages from "./pages/messages/Messages";
import Message from "./pages/singleMsg/SingleMsg";
import MyPurchase from "./pages/myPurchase/MyPurchase.jsx";
import Taskers from "./pages/taskers/Taskers.jsx";
import Task from "./pages/task/Task.jsx";
import "leaflet/dist/leaflet.css";
import ServiceArea from "./components/serviceArea/ServiceArea.jsx";

function App() {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/searchResult",
          element: <ServiceArea />,
        },
        {
          path: "/taskers",
          element: <Taskers />,
        },

        {
          path: "/mySale",
          element: <MySale />,
        },
        {
          path: "/myPurchase",
          element: <MyPurchase />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/task/:id",
          element: <Task />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
