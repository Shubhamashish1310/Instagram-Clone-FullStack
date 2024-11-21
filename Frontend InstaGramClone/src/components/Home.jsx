import Profile from "./Profile";
// import { AiFillHome, AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";
// import { BiUserCircle } from "react-icons/bi";

// import Theme from "./Pages/theme";
import { useEffect, useState } from "react";

import Stories from "./Pages/Stories";
import axios from "axios";
import Left from "./Left";
import Search from "./Pages/Search";

function Home() {
    const [users, setUsers] = useState([]);

    // Fetch users for the Stories section
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/userDetail");
                setUsers(response.data.data);
                console.log(response.data.data); // Adjust according to your API response structure
            } catch (error) {
                console.error("Failed to fetch users:", error.message);
            }
        };

        fetchUsers();
    }, []);
    // const navigate = useNavigate();
    
    return (
        <div className="min-h-screen flex relative overflow-hidden">
            {/* Theme Controller */}
           {/* Search Section */}
           
           

            {/* Left Sidebar */}
           <Left/>

            {/* Feed Section */}
            <main className="flex-1 mx-auto max-w-xl  overflow-scroll">
                 {/* Stories Section */}
            <div className=" ">
                <Stories users={users} />
            </div>
          
                <Profile />
            </main>

            {/* Right Sidebar */}
<aside className="w-1/4 shadow-lg p-6 hidden lg:block">
    <h2 className="text-xl font-bold text-gray-800 mb-4">Suggestions</h2>
    <ul className="space-y-4">
        {/* Suggestion List */}
        {[
            { id: "user1", name: "John Doe", username: "@johndoe" },
            { id: "user2", name: "Jane Smith", username: "@janesmith" },
            { id: "user3", name: "Alex Johnson", username: "@alexjohnson" },
        ].map((user) => (
            <li key={user.id} className="flex items-center space-x-4">
                <img
                    src={`https://i.pravatar.cc/50?u=${user.id}`}
                    alt="Profile"
                    className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-800">{user.name}</h3>
                    <p className="text-xs text-gray-500">{user.username}</p>
                </div>
                <button className="text-blue-500 text-sm font-semibold hover:underline">
                    Follow
                </button>
            </li>
        ))}
    </ul>

    {/* Search Component */}
    <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Search Users</h2>
        <div className="border border-secondary-content p-4 rounded-lg">
            <Search users={users} />
        </div>
    </div>
</aside>

        </div>
    );
}

export default Home;
