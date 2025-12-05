import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { fetchUsers } from "../utils/users";
import { TableHead } from "../components/TableHead";
import { TableBody } from "../components/TableBody";
const Home = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  let getUserData = JSON.parse(localStorage.getItem("Users")) || [];
  let activeUser = JSON.parse(localStorage.getItem("currentUser")) || [];
  let activeUserId = activeUser.id;

  useEffect(() => {
    const getUser = async()=>{
    const getUserData = await fetchUsers();
    
    try {
      setUserData(getUserData);
    } catch(error){
      console.log("error");
 
  }
  
 
  };
  
getUser();
  })
  const viewPosts = (userId) =>{
    if (userId) {
      navigate(`/users/${userId}/posts`)
    }
  };
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
          <TableHead/>
          <TableBody
          callViewPosts={viewPosts}
          callViewUser={viewUser}
          callEditUser={editUser}
          callDeleteUser={deleteUser}
          userData={userData}
          activeUserId={activeUserId}

          />
        
        </table>
      ) : (
        <p>No Users Here!</p>
      )}
    </div>
  );
};

export default Home;