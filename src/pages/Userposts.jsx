import {useState, useEffect } from "react";
import { useNavigate,useParams } from "react-router";
import { fetchPosts } from "../utils/users";

export const Userposts =() =>{
 
  const[Userposts , setUserposts]=useState([]);
  const navigate =useNavigate();
  const {userId} = useParams();
  
  useEffect(() => {
    const getPosts = async () => {
        try {
            const userPosts = await fetchPosts(userId);

            setUserposts(userPosts)
        } catch(error) {
            console.log(error);
        }
    };
    getPosts();
  }, []);

  const viewpost = (id) => {
    if (id) {
        navigate(`/users/${userId}/posts/${id}`);
    }
  };
  return (
    <div className="container">
        
            {Userposts.map((post)=> (
               <div className="square" key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <div>
                    <button className="button" onClick={() => viewpost(post.id)}>
                        Read More...
                    </button>
                    </div> 
                    </div>
            ))}
        

        
        

    </div>
  );
};



    
