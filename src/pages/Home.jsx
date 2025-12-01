import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  let getUserData = JSON.parse(localStorage.getItem("Users")) || [];
  let activeUser = JSON.parse(localStorage.getItem("currentUser")) || [];
  let activeUserId = activeUser.id;

  useEffect(() => {
    if (getUserData) {
      setUserData(getUserData);
    }
  }, []);

  const viewUser = (userId) => {
    if (userId) {
      navigate(`/users/${userId}`);
    }
  };

  const editUser = (userId) => {
    if (userId) {
      navigate(`/edit/${userId}`);
    }
  };

  const deleteUser = (userId) => {
    if (userId) {
      const updatedUser = userData.filter((user) => user.id !== userId);

      setUserData(updatedUser);
      localStorage.setItem("Users", JSON.stringify(updatedUser));
    }
  };

  return (
    <div className="table-container">
      <h3>Total Users</h3>
      {userData.length > 0 ? (
        <table className="table-component">
          <thead>
            <tr>
              <th>User I'd</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>
                  <span>
                    <button
                      className="main-button"
                      onClick={() => viewUser(user.id)}
                    >
                      View
                    </button>
                    <button
                      className="main-button"
                      onClick={() => editUser(user.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="main-button"
                      onClick={() => deleteUser(user.id)}
                      style={{
                        backgroundColor: "blue",
                        opacity:
                          String(user.id) === String(activeUserId) ? 0.5 : 1,
                      }}
                      disabled={String(user.id) === String(activeUserId)}
                    >
                      Delete
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No Users Here!</p>
      )}
    </div>
  );
};

export default Home;