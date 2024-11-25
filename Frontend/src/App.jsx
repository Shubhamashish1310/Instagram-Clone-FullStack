import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Upload from "./components/UploadPost";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Profile from "./components/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from "./components/ProtectedRoute";

import Explore from "./components/Explore";
import ProfilePage from "./components/UserProfile";
import Left from "./components/Left"; // Your Sidebar Component
import { Outlet } from "react-router-dom";

export default function App() {
    return (
        <>
            <ToastContainer />
            <Router>
                <Routes>
                    {/* Public Routes */}
                    <Route path="*" element={<Login />} />
                    <Route path="/" element={<Login />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Registration />} />
                    <Route path="/home" element={<Home />} />
                    
                    
                        <Route element={<MainLayout />}>
                            
                            <Route path="/upload" element={<Upload />} />
                            <Route path="/search" element={<Explore />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/userprofile" element={<ProfilePage />} />
                            <Route path="/userprofile/:id" element={<ProfilePage />} />
                        </Route>
                    
                </Routes>
            </Router>
        </>
    );
}

// Main Layout with Sidebar
function MainLayout() {
    return (
        <div className="flex">
            {/* Sidebar */}
            <Left />

            {/* Main Content */}
            <div className="flex-1 p-4">
                <Outlet /> {/* Child components rendered here */}
            </div>
        </div>
    );
}
