import { useEffect, useState } from "react";
import axios from "axios";
import Left from "./Left";
import Profile from "./Profile";
import Stories from "./Pages/Stories";
import Search from "./Pages/Search";

function Home() {
    const [users, setUsers] = useState([]);

    // Fetch users for the Stories section
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/userDetail");
                setUsers(response.data.data); // Assuming response.data.data contains the user list
            } catch (error) {
                console.error("Failed to fetch users:", error.message);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="min-h-screen flex relative overflow-hidden">
            {/* Left Sidebar */}
            <Left />

            {/* Main Feed Section */}
            <main className="flex-1 mx-auto max-w-xl overflow-scroll">
                {/* Stories Section */}
                <div>
                    <Stories users={users} />
                </div>

                {/* Profile Section */}
                <Profile />
            </main>

            {/* Right Sidebar */}
            <aside className="w-1/4 shadow-lg p-6 hidden lg:flex flex-col justify-between h-screen border-l">
                {/* Suggestions Section */}
                <div>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Suggestions</h2>
                    <ul className="space-y-4">
                        {[
                            { id: "user1", name: "John Doe", username: "@johndoe" },
                            { id: "user2", name: "Jane Smith", username: "@janesmith" },
                            { id: "user3", name: "Alex Johnson", username: "@alexjohnson" },
                            { id: "user4", name: "Emily Davis", username: "@emilydavis" },
                        ].map((user) => (
                            <li
                                key={user.id}
                                className="flex items-center space-x-4 p-2 rounded-md hover:bg-gray-100 transition-colors"
                            >
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
                </div>

                {/* Search Section */}
                <h2 className="text-xl mt-8 font-bold text-black mb-2">Search Users</h2>
                <div className="flex-1 overflow-y-auto border border-gray-300 p-2 rounded-lg">
                    <Search users={users} />
                </div>

                {/* Footer */}
                <footer className="p-4 text-center text-xs text-gray-600 mt-6 border-t">
                    <p>&copy; 2024 Instagram Clone</p>
                </footer>
            </aside>
        </div>
    );
}

export default Home;
