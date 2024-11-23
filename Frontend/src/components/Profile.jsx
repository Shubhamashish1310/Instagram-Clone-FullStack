import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "./PostCard";


function Profile() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:3000/api/v1/post", {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                setPosts(res.data.data.posts);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p className="text-center text-gray-500">Loading posts...</p>;
    }

    return (
        <div className="h-screen overflow-x-hidden scrollbar-none smooth-scroll">
            {posts.map((post) => (
                <PostCard key={post._id} post={post} />
            ))}
        </div>
    );
}

export default Profile;
