import { useEffect, useState } from "react";
import axios from "axios";
import { FaFileUpload } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";


function ProfilePage() {
  const userId = localStorage.getItem("userId");
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        setError("Authentication token not found. Please log in.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/profile/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfileData(response.data.data);
      } catch (err) {
        setError(
          err.response?.data?.message || "Failed to fetch profile data."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-primary">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  const { userDetails, userPosts } = profileData;

  return (
    <div className="min-h-screen flex">
      {/* Sidebar Component */}
     
  
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header Section */}
        <div className="bg-primary-content shadow-lg">
          <div className="max-w-5xl mx-auto py-8 px-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src={`https://i.pravatar.cc/150?u=${userDetails.email}`}
                alt="Profile"
                className="w-20 h-20 sm:w-28 sm:h-28 rounded-full border-4 border-pink-400"
              />
              <div>
                <h1 className="text-3xl font-bold text-secondary">{userDetails.username}</h1>
                <p className="text-primary text-sm">{userDetails.email}</p>
              </div>
            </div>
            <div className="flex space-x-8 text-center text-gray-700">
              <div className="hover:scale-110 transition-transform">
                <p className="text-2xl font-semibold">{userPosts.length}</p>
                <p>Posts</p>
              </div>
              <div className="hover:scale-110 transition-transform">
                <p className="text-2xl font-semibold">100k</p>
                <p>Followers</p>
              </div>
              <div className="hover:scale-110 transition-transform">
                <p className="text-2xl font-semibold">500</p>
                <p>Following</p>
              </div>
            </div>
            <Link className="text-3xl font-bold text-primary" to={"/home"}>
              <IoHomeOutline />
            </Link>
          </div>
        </div>
  
        {/* Posts Section */}
        <div className="size-2/3 max-w-full mx-auto px-4 py-8">
          <h2 className="text-3xl font-semibold text-primary-content mb-6">Posts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {userPosts.map((post) => (
              <div
                key={post._id}
                className="relative group bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
                    <p className="font-bold text-lg">{post.caption}</p>
                    <div className="flex space-x-4 mt-2">
                      <span className="flex items-center space-x-1">
                        ❤️
                        <span>10</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        💬
                        <span>5</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Floating Action Button */}
        <button className="fixed bottom-8 right-8 bg-pink-500 hover:bg-pink-600 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-3xl">
          <Link to="/upload">
            <FaFileUpload />
          </Link>
        </button>
      </div>
    </div>
  );
  
  
}

export default ProfilePage;
