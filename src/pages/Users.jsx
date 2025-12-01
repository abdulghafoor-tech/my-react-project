import { useState, useEffect } from "react";
import { useParams } from "react-router";

const Users = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState("");
  let allUsers = JSON.parse(localStorage.getItem("Users")) || [];

  useEffect(() => {
    if (allUsers) {
      let filteredUser = allUsers.filter((item) => item.id == id);
      setUserData(filteredUser);
    }
  }, [id]);
  return (
    <div className="table-container">
      <h3>User Details</h3>
      {userData.length > 0 ? (
        <table className="table-component">
          <thead>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>*******</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No details found!</p>
      )}
    </div>
  );
};

export default Users;