import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

export default function EditUsers() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordCheck, setPasswordCheck] = useState("");

  useEffect(() => {
    let allUsers = JSON.parse(localStorage.getItem("Users")) || [];

    let foundUser = allUsers.find((u) => u.id == id);
    setUser({
      firstName: foundUser.firstName,
      lastName: foundUser.lastName,
      email: foundUser.email,
      password: foundUser.password,
    });
  }, [id]);

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

    let userIndex = userDataArrray.findIndex((u) => u.id == id);

    if (userIndex > -1) {
      if (
        user.firstName &&
        user.lastName &&
        user.email &&
        user.password &&
        user.confirmPassword !== ""
      ) {
        userDataArrray[userIndex] = {
          id: userDataArrray[userIndex].id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          password: user.password,
        };

        alert("Update Done.");

        localStorage.setItem("Users", JSON.stringify(userDataArrray));
        event.target.reset();
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });

        navigate(`/users/${id}`);
      } else {
        console.log("Please enter your information.");
      }
    }
  };

  console.log(user.firstName, user.lastName, user.email, user.password);

  return (
    <div>
      <form className="user-auth" onSubmit={handleSubmission}>
        <h3>Edit User Details</h3>
        <input
          value={user.firstName}
          name="firstName"
          onChange={handleUserInput}
          type="text"
          placeholder="Enter first name.."
        ></input>

        <input
          value={user.lastName}
          name="lastName"
          onChange={handleUserInput}
          type="text"
          placeholder="Enter last name.."
        ></input>

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

        <input
          name="confirmPassword"
          onChange={handleUserInput}
          type="text"
          placeholder="Confirm password.."
        ></input>
        {passwordCheck && <p style={{ color: "red" }}>{passwordCheck}</p>}

        <button className="main-button" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}