import { useState } from "react";
import { Link, useNavigate } from "react-router";

function UserLogin() {
  const navigate = useNavigate(); 
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const handleSubmission = (event) => {
    event.preventDefault();

    let getUserData = JSON.parse(localStorage.getItem("Users")) || [];

    const foundUser = getUserData.find(
      (item) => user.email == item.email && user.password == item.password
    );

    if (foundUser) {
      console.log("Login Successful.");
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      navigate("/");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div>
      <form className="user-auth" onSubmit={handleSubmission}>
        <input
          value={user.email}
          name="email"
          onChange={handleUserInput}
          type="email"
          placeholder="Enter your email.."
        ></input>

        <input
          value={user.password}
          name="password"
          onChange={handleUserInput}
          type="password"
          placeholder="Enter password.."
        ></input>

        <button className="main-button" type="submit">
          Log in
        </button>

        <p>Dont't have an account?</p>
        <button className="main-button">
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/register"
          >
            Sign up
          </Link>
        </button>
      </form>
    </div>
  );
}

export default UserLogin;