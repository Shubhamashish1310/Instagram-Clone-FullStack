import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";

function Search({ users }) {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter users based on search query
    const filteredUsers = users.filter(
        (user) =>
            user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="max-w-xl mx-auto p-4  rounded-lg ">
            {/* Search Input */}
            <div className="relative">
            <h1>shubham</h1>
                <div className="relative">
                    <IoSearchSharp className="absolute text-xl top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
                    <input 
                        type="text"
                        placeholder="Search users by name or email..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-3 pl-10 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-gray-800"
                    />
                </div>
                
            </div>
    
            {/* Results */}
            <div className="mt-4 space-y-4">
                {filteredUsers.length > 0 ? (
                    filteredUsers.map((user) => (
                        <div
                            key={user._id}
                            className="flex items-center p-3 border rounded-lg hover:shadow-md transition-all duration-200 hover:bg-blue-50 cursor-pointer"
                        >
                            {/* User Avatar */}
                            <img
                                src={`https://i.pravatar.cc/150?u=${user.email}`}
                                alt={user.username}
                                className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                            />
                            <div className="ml-4">
                                <p className="font-semibold text-gray-800 text-base">{user.username}</p>
                                <p className="text-sm text-gray-500">{user.role}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center">
                        <MdErrorOutline className="text-gray-500 text-4xl"></MdErrorOutline>
                        <span className="text-gray-500">No users found.</span>
                        
                    </div>
                )}
            </div>
        </div>
    );
    
}

export default Search;
