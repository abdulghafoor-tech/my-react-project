import{ Outlet } from "react-router";
import { Header } from "../components/Header"
import { Footer } from "../components/Footer";

const Layout =()=>{
    return(
        <div>
            <div className="Header">
                <Header/>
            </div>
            <div className="content">
                <Outlet/>
            </div>
            <div className="Footer">
                <Footer/>
            </div>
        </div>
    );
};

export default Layout;
