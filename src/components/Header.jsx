import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <div className="h-14 bg-green-500 flex justify-center items-center">
        <div className="flex space-x-3">
          <Link to="/">Home</Link>
          <Link to="/user">User</Link>
          <Link>About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
