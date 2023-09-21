import React from "react";
import NavBar from "../components/NavBar";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <NavBar />;
      <Outlet />
    </>
  );
};

export default Layout;
