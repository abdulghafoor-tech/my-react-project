import { Link, useNavigate } from "react-router";
import "../App.css";

export const Header = () => {
  const navigate = useNavigate();
  let sessionUser = localStorage.getItem("currentUser");

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="header">
      <Link className="nav-links" to={"/"}>
        Home
      </Link>
      <Link className="nav-links" to={"/about-us"}>
        About Us
      </Link>
      <Link className="nav-links" to={"/contact-us"}>
        Contact Us
      </Link>

      {sessionUser ? (
        <button className="main-button" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <div style={{ display: "flex", gap: "20px" }}>
          <Link className="nav-links" to="/login">
            Login
          </Link>
          <Link className="nav-links" to="/register">
            Register
          </Link>
        </div>
      )}
    </div>
  );
};