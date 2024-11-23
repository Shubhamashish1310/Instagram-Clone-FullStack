import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import Left from "../Left";

function Search({ users }) {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter users based on search query
    const filteredUsers = users.filter(
        (user) =>
            user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            {/* Search Input */}
            <Left className="sticky top-0 h-screen w-1/5 bg-white shadow-md" />
  
            <div className="relative">
                <IoSearchSharp className="absolute text-2xl top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search users by name or email..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-gray-700"
                />
            </div>

            {/* Results */}
            <div className="mt-6 space-y-4">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <div
                            key={user._id}
                            className="flex items-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200 hover:bg-gray-100 cursor-pointer"
                        >
                            {/* User Avatar */}
                            <img
                                src={`https://i.pravatar.cc/150?u=${user.email}`}
                                alt={user.username}
                                className="w-14 h-14 rounded-full object-cover border-2 border-blue-500"
                            />
                            <div className="ml-4">
                                <p className="font-semibold text-gray-900 text-lg">{user.username}</p>
                                <p className="text-sm text-gray-500">{user.role}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center mt-8">
                        <MdErrorOutline className="text-gray-400 text-5xl mb-2" />
                        <p className="text-gray-500 text-lg">No users found.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;
