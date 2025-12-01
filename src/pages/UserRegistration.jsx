import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function UserRegistration() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordCheck, setPasswordCheck] = useState("");

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({
      ...user,
      [name]: value,
    }));

    if (name === "confirmPassword" || name === "password") {
      if (name === "confirmPassword" && user.password !== value) {
        setPasswordCheck("Password do not match.");
      } else if (
        name === "password" &&
        user.confirmPassword &&
        user.confirmPassword !== value
      ) {
        setPasswordCheck("Password do not match.");
      } else {
        setPasswordCheck("");
      }
    }
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 900000) + 100000;
  };

  const handleSubmission = (event) => {
    event.preventDefault();

    let userDataArrray = JSON.parse(localStorage.getItem("Users")) || [];

    if (
      user.firstName &&
      user.lastName &&
      user.email &&
      user.password &&
      user.confirmPassword !== ""
    ) {
      const userDataObj = {
        id: generateRandomNumber(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      };

      userDataArrray.push(userDataObj);
      console.log("Regitration Done.");

      localStorage.setItem("Users", JSON.stringify(userDataArrray));
      event.target.reset();
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });

      navigate("/login");
    } else {
      console.log("Please enter your information.");
    }
  };

  console.log(user.firstName, user.lastName, user.email, user.password);

  return (
    <div>
      <form className="user-auth" onSubmit={handleSubmission}>
        <input
          value={user.firstName}
          name="firstName"
          onChange={handleUserInput}
          type="text"
          placeholder="Enter Your First Name.."
        ></input>

        <input
          value={user.lastName}
          name="lastName"
          onChange={handleUserInput}
          type="text"
          placeholder="Enter Your Last Name.."
        ></input>

        <input
          value={user.email}
          name="email"
          onChange={handleUserInput}
          type="email"
          placeholder="Enter your Email.."
        ></input>

        <input
          value={user.password}
          name="password"
          onChange={handleUserInput}
          type="password"
          placeholder="Enter Password.."
        ></input>

        <input
          name="confirmPassword"
          onChange={handleUserInput}
          type="text"
          placeholder="Confirm password.."
        ></input>
        {passwordCheck && <p style={{ color: "red" }}>{passwordCheck}</p>}

        <button className="main-button" type="submit">
          Sign Up
        </button>

        <p>Already have an account?</p>
        <button className="main-button" type="button">
          <Link style={{ textDecoration: "none", color: "black" }} to="/login">
            Log in
          </Link>
        </button>
      </form>
    </div>
  );
}