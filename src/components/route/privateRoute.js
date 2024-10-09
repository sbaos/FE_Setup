import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

function PrivateRoute({ children }) {
    const isLogin = useSelector(state => state.user.isLogin);
    const location = useLocation();
    if (!isLogin) {
        return <Navigate to="/auth/login" state={{ from: location }} />;
    }
    return children;
};

export default PrivateRoute;
