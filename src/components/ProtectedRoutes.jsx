import { Outlet,Navigate } from "react-router";
export const ProtectedRoutes = () =>{
    const isLogged = localStorage.getItem("currentUser");
    return isLogged ? <Outlet/> : <Navigate to={"/login"} />
};