import axios from 'axios';
const API_BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async ()=> {
    try{
        const response = await axios.get(`${API_BASE_URL}/users`)
        return response.data
    }
    catch(error){
        console.log("API Fecthing error", error);
    }

    
    

}
export const fetchPosts = async (userId)=> {
    try{
        const response = await axios.get(`${API_BASE_URL}/posts?userId=${userId}`);
        return response.data
    }
    catch(error){
        console.log("API Fecthing error", error);
    }
}

export const viewPost = async (userId, id)=> {
    try{
        const response = await axios.get(`${API_BASE_URL}/posts?userId=${userId}&id=${id}`);
        return response.data
    }
    catch(error){
        console.log("API Fecthing error", error);
    }
}