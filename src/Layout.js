import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <p>"header" I'm present in Layout.js </p>
      <Outlet />
    </>
  );
};

export default Layout;
