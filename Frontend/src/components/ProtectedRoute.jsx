
import { Navigate, Outlet } from 'react-router-dom';
// import Login from './Login';

const ProtectedRoute = () => {
    const token = localStorage.getItem('token');

    return token ? <Outlet /> : <Navigate to="login" />
}

export default ProtectedRoute