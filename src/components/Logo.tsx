import React from "react";
import { Link, useLocation } from "react-router-dom";

const Logo = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const isDashboard = location.pathname === "/dashboard";

  return (
    <>
      <Link to="/login" className={isLogin ? "active" : ""}>
        Nichify
      </Link>
      <Link to="/dashboard" className={isDashboard ? "active" : ""}>
        <img src="/logo.png" alt="Logo" />
      </Link>
    </>
  );
};

export default Logo;
