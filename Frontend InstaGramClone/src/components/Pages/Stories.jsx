import React from "react";

function Stories({ users }) {
    return (
        <div className="flex space-x-4 p-4 bg-inherit rounded-lg overflow-x-auto">
            {users.map((user) => (
                <div key={user._id} className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full border-2 cursor-not-allowed border-pink-500 p-1">
                        <img
                            src={`https://i.pravatar.cc/150?u=${user.email}`}
                            alt={user.username}
                            className="w-full h-full rounded-full object-cover"
                        />
                    </div>
                    <p className="text-sm mt-2 text-center truncate w-16">{user.username}</p>
                </div>
            ))}
        </div>
    );
}

export default Stories;
