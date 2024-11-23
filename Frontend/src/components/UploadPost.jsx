import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UploadPost = () => {
    const navigate = useNavigate();
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null); // To display image preview
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setImagePreview(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image || !caption.trim()) {
            toast.error('Please add an image and a valid caption.');
            return;
        }

        const token = localStorage.getItem('authToken');
        if (!token) {
            toast.error('You are not logged in. Please log in to upload a post.');
            return;
        }

        const formData = new FormData();
        formData.append('image', image);
        formData.append('caption', caption.trim());

        try {
            setLoading(true);

            // eslint-disable-next-line no-unused-vars
            const response = await axios.post(
                'http://localhost:3000/api/v1/post',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            toast.success('Post uploaded successfully');
            setCaption('');
            setImage(null);
            setImagePreview(null);
            navigate('/home');
        } catch (error) {
            toast.error(
                error.response?.status === 401
                    ? 'Unauthorized! Please log in again.'
                    : 'Failed to upload post. Please try again later.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-6">
            <div className="max-w-lg w-full p-10 text-center bg-pink-50 rounded-xl shadow-lg border border-gray-300 transition-transform transform hover:scale-105">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Upload a Post</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Caption Input */}
                    <div>
                        <label className="block text-md font-semibold text-gray-700 mb-2">Caption</label>
                        <textarea
                            className="w-full p-3 text-md rounded-lg border focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400 shadow-md"
                            value={caption}
                            onChange={(e) => setCaption(e.target.value)}
                            placeholder="Write an engaging caption..."
                            rows="3"
                        ></textarea>
                    </div>

                    {/* Image Upload */}
                    <div className="flex flex-col items-center">
                        <label className="block text-md font-semibold text-gray-700 mb-2">Choose an Image</label>
                        <div className="flex flex-col items-center justify-center w-full border-2 border-dashed border-gray-300 p-4 rounded-lg">
                            <input
                                type="file"
                                className="hidden"
                                id="file-upload"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                            <label
                                htmlFor="file-upload"
                                className="cursor-pointer text-blue-500 hover:text-blue-600 transition"
                            >
                                Click to upload or drag & drop
                            </label>
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    className="mt-4 w-48 h-48 object-cover rounded-lg shadow-md"
                                />
                            )}
                            {!imagePreview && (
                                <p className="mt-2 text-sm text-gray-400">No image selected</p>
                            )}
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className={`w-full py-3 btn btn-success ${
                                loading
                                    ? 'bg-red-700 text-white cursor-not-allowed opacity-75'
                                    : '  hover:bg-success active:scale-95'
                            }`}
                            disabled={loading}
                        >
                            {loading ? (
                                <div className="flex items-center justify-center space-x-2">
                                    <span className="spinner-border animate-spin inline-block w-4 h-4 border-2 rounded-full"></span>
                                    <span>Uploading...</span>
                                </div>
                            ) : (
                                'Upload Post'
                            )}
                        </button>
                    </div>
                </form>
                <Link to= "/home" className='btn-error btn mt-12'>Exit</Link>
            </div>
            
        </div>
    );
};

export default UploadPost;
