import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-items">
          <div className="nav-links">
            <Link className="nav-links" to={"/"}>
              Home
            </Link>
            <Link className="nav-links" to={"/about-us"}>
              About Us
            </Link>
            <Link className="nav-links" to={"/contact-us"}>
              Contact Us
            </Link>
            <Link className="nav-links" to="/login">
              Login
            </Link>
            <Link className="nav-links" to="/register">
              Register
            </Link>
          </div>
        </div>

        <div className="footer-items">
          <b>Developed by Abdul Ghafoor</b>
          <a href="https://www.github.com" target="_blank">
            <img
              width="40"
              height="40"
              alt="Github"
              src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
            />
          </a>
        </div>
      </div>
    </>
  );
};