import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div className="navbar">
      {auth ? (
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Product</Link>
          </li>
          <li>
            <Link to="/update">Update Product</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          {/*Writing new code, latest code for removing options after login and registration  */}
          <li>
            <Link onClick={logout} to="/signup">
              Logout
            </Link>{" "}
          </li>
        </ul>
      ) : (
        <div className="nav-right">
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
export default Navbar;
