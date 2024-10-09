import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/main.auth.css'; // Import the CSS file as a module

function AuthLayout({ children }) {
    const isLogin = useSelector(state => state.user.isLogin);
    const navigate = useNavigate();
    const location = useLocation();
    const mode = useSelector(state => state.mode.mode);
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (isLogin) {
            navigate(from ?? '/');
        }
    }, [isLogin]);

    return (
        <div className={`authContainer`}>
            <div className={`bg--${mode.backgroundColor}`}>
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;