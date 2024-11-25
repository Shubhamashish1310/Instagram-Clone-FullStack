import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

import { jwtDecode } from "jwt-decode";

import { toast } from 'react-toastify';
import homeImage from '../assets/home-phones.png'; // Replace with the correct path
import Header from './Header';
import Insta from './Pages/instagram.svg'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Make the API call
            const res = await axios.post('http://localhost:3000/api/v1/user/login', { email, password });

            if (res.data.success && res.data.data) {
                const token = res.data.data; // Get the JWT token
                localStorage.setItem('authToken', token); // Store JWT directly

                // Decode the token to extract user details
                const decoded = jwtDecode(token);
                const userId = decoded.id; // Get the user ID from the decoded token
                localStorage.setItem("userId", userId); // Store the user ID

                console.log('Token stored:', token);
                console.log('Decoded User ID:', userId);

                toast.success('Login Successful');
                navigate('/home');
            } else {
                throw new Error('Token not received or invalid response');
            }
        } catch (error) {
            console.error('Login Error:', error.response?.data || error.message);
            
            if (error.response?.status === 401) {
                toast.error('Unauthorized! Please check your credentials.');
            } else {
                toast.error('Something went wrong. Please try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="flex justify-center items-center">
                <img className='flex justify-center text-center items-center' src={Insta} alt="Instagram Logo" />
            </div>
            
            
            <div className="flex flex-col lg:flex-row items-center justify-start min-h-screen bg-gray-50 gap-0">
                {/* Left Section - Image */}
                <div className="hidden lg:flex w-1/2 justify-center items-center">
                    <img
                        src={homeImage}
                        alt="App Showcase"
                        className="auto-cols-auto"
                    />
                </div>
              

                {/* Right Section - Login Form */}
                <div className="flex flex-col w-full lg:w-[350px] p-10 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Instagram</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 font-semibold text-white rounded-lg focus:outline-none ${loading ? 'bg-blue-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                        >
                            {loading ? 'Logging in...' : 'Log In'}
                        </button>
                    </form>
                    <div className="text-center mt-6">
                        <p className="text-gray-600 text-sm">
                            Don't have an account?{' '}
                            <Link to="/signup" className="text-blue-500 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
