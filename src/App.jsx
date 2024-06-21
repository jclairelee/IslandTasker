import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Add from "./pages/add/Add";
import MySale from "./pages/mySale/MySale";
import Messages from "./pages/messages/Messages";
import Message from "./pages/singleMsg/SingleMsg";
import MyPurchase from "./pages/myPurchase/MyPurchase";
import Taskers from "./pages/taskers/Taskers";
import Profile from "./pages/profile/Profile";
import ServiceArea from "./components/serviceArea/ServiceArea";
import HowItWorks from "./pages/howitworks/HowItWorks";
import Search from "./pages/search/Search";
import Contact from "./pages/contact/Contact";
import "leaflet/dist/leaflet.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/searchResult", element: <ServiceArea /> },
        { path: "/taskers", element: <Taskers /> },
        { path: "/mySale", element: <MySale /> },
        { path: "/myPurchase", element: <MyPurchase /> },
        { path: "/messages", element: <Messages /> },
        { path: "/message/:id", element: <Message /> },
        { path: "/add", element: <Add /> },
        { path: "/profile/:id", element: <Profile /> },
        { path: "/how", element: <HowItWorks /> },
        { path: "/search", element: <Search /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },
  ]);

  return <RouterProvider router={router} />;
}

const Layout = () => (
  <div className="app">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

export default App;
