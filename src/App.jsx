import './App.css';
import UserRegistration from './pages/UserRegistration';
import UserLogin from './pages/UserLogin';
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Layout from "./layouts/main-layouts";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import { AboutUs } from "./pages/AboutUs";
import { ContactUs } from "./pages/ContactUs";
import EditUsers from './pages/EditUsers';
import Users from './pages/Users';
import { Userposts } from './pages/Userposts';
import { ViewPosts } from './pages/ViewPost';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route element={<ProtectedRoutes />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/users/:id" element={<Users/>}></Route>
          <Route path="/edit/:id" element={<EditUsers/>}></Route>
          <Route path="/users/:userId/posts" element={<Userposts/>}></Route>
          <Route path="/users/:userId/posts/:id" element={<ViewPosts/>}></Route>


        </Route>
        <Route path="register" element={<UserRegistration />}></Route>
        <Route path="login" element={<UserLogin />}></Route>
        <Route path="about-us" element={<AboutUs />}></Route>
        <Route path="contact-us" element={<ContactUs />}></Route>
      </Route>
    </Routes>
  );
}

export default App;