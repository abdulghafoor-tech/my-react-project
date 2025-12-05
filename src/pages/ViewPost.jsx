import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { viewPost } from '../utils/users';

export const ViewPosts = () => {
  const [userPosts, setUserPosts] = useState([]);
  const navigate = useNavigate();

  const { userId } = useParams();
  const { id } = useParams();


  useEffect(() => {
    const getPosts = async () => {
      try {
        const apiUserPosts = await viewPost(userId, id);
        setUserPosts(apiUserPosts);
      } catch (error) {
        console.log(error);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="card-container" style={{ display: "flex", width: "800px" }}> 
      {userPosts.length > 0 ? (
        userPosts.map((post) => (
          <div className="card" key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        )) 
      ) : (
        <p>No posts available</p> 
      )}
    </div>
  );
};
