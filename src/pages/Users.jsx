import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchUsers } from "../utils/users";

const Users = () => {
  const { id } = useParams();
  const [userData, setUserData] = useState("");
  

  useEffect(() => {
    const getUser= async () => {
      try {
        const userData =await fetchUsers();
        let filteredUser = userData.filter((item) => item.id == id);

        if(userData) {
          setUserData(filteredUser);
        }

      } catch(error) {
        console.log(error);

      }
    };
    getUser();
  },
    
   [id]);
  return (
    <div className="table-container">
      <h3>User Details</h3>
      {userData.length > 0 ? (
        <table className="table-component">
          <thead>
            <tr>
              <th>Id</th>
              <th> Name</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Address</th>
            
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  {user.address?.city}
                </td>
               
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