import  { useEffect, useState } from 'react'
import Search from './Pages/Search'
import axios from 'axios';

function Explore() {
    const [users, setUsers] = useState([]);

    // Fetch users for the Stories section
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/userDetail");
                setUsers(response.data.data); // Adjust according to your API response structure
            } catch (error) {
                console.error("Failed to fetch users:", error.message);
            }
        };

        fetchUsers();
    }, []);
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900">Explore</h1>
        <p className="mt-2 text-gray-600">
          Explore other users on the platform.
        </p>
        <Search users={users}/>
      </div>
    </div>
  )

}

export default Explore