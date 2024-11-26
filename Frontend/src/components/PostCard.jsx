import { useState } from "react";
import axios from "axios";
import { FaHeart, FaComment, FaShare, FaExchangeAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { IoMenu } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { BsSend } from "react-icons/bs";
import { Link } from "react-router-dom";

function PostCard({ post, onPostDeleted, onPostUpdated }) {
    const [showMenu, setShowMenu] = useState(false);
    const [editing, setEditing] = useState(false);
    const [newCaption, setNewCaption] = useState(post.caption);
    const [newImage, setNewImage] = useState(null);
    const [liked, setLiked] = useState(false); // Track like state
    const [likeCount, setLikeCount] = useState(post.likes || 0); // Track like count (dummy data)
    const [commentCount, setCommentCount] = useState(post.comments?.length || 0); // Track comment count

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            console.log("Deleting post:", post._id);
            try {
                const token = localStorage.getItem("authToken");
                await axios.delete(`http://localhost:3000/api/v1/post/${post._id}`, {
                    
                    headers: {
                        Authorization:`Bearer ${token}`,
                    },
                });
                toast.success("Post deleted successfully!");
                onPostDeleted(post._id);
            } catch (error) {
                console.error("Error deleting post:", error.response?.data || error.message);
                toast.error(
                    error.response?.data?.message
                );
            }
        }
    };

    const updatePost = async (image, caption) => {
        if (!image && !caption.trim()) {
            toast.error("Please provide an updated caption or image.");
            return;
        }

        const token = localStorage.getItem("authToken");
        if (!token) {
            toast.error("You are not logged in. Please log in to update the post.");
            return;
        }

        const formData = new FormData();
        if (image) formData.append("file", image);
        if (caption.trim()) formData.append("caption", caption.trim());
        if (image && image.type.startsWith("video/")) {
            formData.append("resource_type", "video");
        }

        try {
            const response = await axios.put(
                `http://localhost:3000/api/v1/post/${post._id}`,
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const updatedPost = response.data.data;
            toast.success("Post updated successfully!");
            setEditing(false);

            if (onPostUpdated) {
                onPostUpdated(updatedPost);
            }
        } catch (error) {
            console.error("Error updating post:", error.response?.data || error.message);
            toast.error(
                error.response?.data?.message || "Failed to update the post. Please try again."
            );
        }
    };

    // Dummy like function
    const handleLike = () => {
        setLiked((prev) => !prev); // Toggle like state
        setLikeCount((prev) => (liked ? prev - 1 : prev + 1)); // Increment or decrement like count
    };
    const handleshare = () => {
        setLiked((prev) => !prev); // Toggle like state
        setLikeCount((prev) => (liked ? prev - 1 : prev + 1)); // Increment or decrement like count
    };

    // Dummy comment function (just logs the action for now)
    const handleComment = () => {
        setCommentCount((prev) => prev + 1); // Increment comment count as a dummy action
        console.log("Comment section opened (dummy action)"); // Dummy action
    };

    return (
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md mb-6 relative border border-gray-200">
            {/* Dropdown Menu */}
            <div className="absolute top-2 right-2">
                <button
                    tabIndex={0}
                    role="button"
                    onClick={() => setShowMenu((prev) => !prev)}
                    className="p-2 text-3xl font-extrabold hover:bg-gray-300 rounded-full hover:shadow-lg transition-all duration-300 ease-in-out"
                >
                    <IoMenu />
                </button>
                {showMenu && (
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 shadow-lg transition-all duration-300 ease-in-out"
                    >
                        <li className="flex items-center space-x-3 p-2">
                            <button
                                onClick={handleDelete}
                                className="btn btn-error text-primary-content font-bold"
                            >
                                <MdDelete />Delete Post
                            </button>
                        </li>
                        <li className="flex items-center space-x-3 ">
                            <button
                                onClick={() => setEditing(true)}
                                className="btn btn-info text-primary-content"
                            >
                                <FaExchangeAlt />Update Post
                            </button>
                        </li>
                    </ul>
                )}
            </div>

            {/* Post Header */}
            <div className="flex items-center px-4 py-3 border-b">
               <Link to={`/all`}> <img
                    src={`https://i.pravatar.cc/150?u=${post.user?.email}`}
                    alt={post.user?.username || "User"}
                    className="w-10 h-10 rounded-full object-cover"
                /></Link>
                <div className="ml-3">
                    <h3 className="font-semibold text-lg text-gray-900">{post.user?.username || "Anonymous"}</h3>
                    
                    <p className="text-xs text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
                </div>
                
            </div>

            {/* Post Content */}
            {editing ? (
                <div className="px-4  bg-gray-100 py-3">
                    <textarea
                        className="w-full border rounded-md p-2 mb-3"
                        value={newCaption}
                        onChange={(e) => setNewCaption(e.target.value)}
                        placeholder="Update caption"
                    />
                    <input
                        type="file"
                        accept="image/*,video/*"
                        className="block w-full text-sm text-gray-500"
                        onChange={(e) => setNewImage(e.target.files[0])}
                    />
                    <div className="flex space-x-4 mt-3">
                        <button
                            onClick={() => updatePost(newImage, newCaption)}
                            className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setEditing(false)}
                            className="bg-gray-300 text-black px-4 py-2 rounded-md"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            ) : (
                <>
                    {post.image?.includes("video") ? (
                        <video
                            src={post.image}
                            alt={post.caption}
                            className="w-full object-cover max-h-[600px] overflow-hidden"
                            loop
                            controls
                        />
                    ) : (
                        <img
                            src={post.image}
                            alt={post.caption}
                            className="w-full object-cover max-h-[600px] overflow-hidden"
                        />
                    )}
                    <div className="px-4">
                        <p className="text-sm text-gray-800 mb-3">
                            <span className="font-semibold">{post.user?.username || "Anonymous"}: </span>
                            {post.caption}
                        </p>
                    </div>
                </>
            )}

            {/* Post Actions */}
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex space-x-4">
                    <button
                        className={`text-gray-600 hover:text-red-500 ${liked ? "text-red-500" : ""}`}
                        onClick={handleLike}
                    >
                        <FaHeart size={24} />
                        <span className="ml-1">{likeCount||0}</span> {/* Display like count */}
                    </button>
                    <button
                        className="text-gray-600 hover:text-blue-500"
                        onClick={handleComment}
                    >
                        <FaComment size={24} />
                        <span className="ml-1">{commentCount}</span> {/* Display comment count */}
                    </button>
                    <button className="text-gray-600 hover:text-green-500">
                        <BsSend size={24} />
                        <span className="ml-1">{0}</span> {/* Display comment count */}
                    </button>
                </div>
                <button className="text-gray-600 text-sm">Save</button>
            </div>
        </div>
    );
}

export default PostCard;
