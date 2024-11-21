
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Upload from "./components/UploadPost"
import Home from "./components/Home"
import Login from "./components/Login"
import Registration from "./components/Registration"
import Profile from "./components/Profile"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from "./components/ProtectedRoute"

import Explore from "./components/Explore"
import ProfilePage from "./components/UserProfile"


export default function App() {

  return (
    <>
     
      <ToastContainer />
      <Router>
        <Routes>

          <Route element={<ProtectedRoute/>}>
            <Route path="/profile" element={<Profile />} />

          </Route>

          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/search" element={<Explore/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/home" element={<Home />}/>
          <Route path="/userprofile" element={<ProfilePage />}/>
          <Route path="/userprofile/:id" element={<ProfilePage />} />

        </Routes>
      </Router>

    </>
  )
}
