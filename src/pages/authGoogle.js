import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { login } from '../redux/userSlice';
import { jwtDecode } from 'jwt-decode';
import { toast } from 'react-toastify';
import { SignIn } from '../auth/signin';
function AuthGooglePage() {
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token'); // Replace 'yourQueryParam' with your actual query parameter name
    const isLogin = useSelector(state => state.user.isLogin);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const from = location.state?.from?.pathname || '/';
    const isNotify = useRef(false);
    useEffect(() => {
        if (isLogin) {
            navigate(from ?? '/');
        }
        handleLogin();
    }, [isLogin]);
    const handleLogin = () => {
        if (!token) {
            navigate(from ?? '/');
        }
        try {
            const data = jwtDecode(token);
            if (!data) return;
            const currentDate = new Date();
            let expirationDate = new Date(data.expires);
            if (+expirationDate <= +currentDate) {
                if (!isNotify.current) {
                    toast.error('Hết phiên đăng nhập');
                    isNotify.current = true;
                }
                navigate(from ?? '/');
            } else {
                const signInData = {
                    email: data.email,
                    name: data.name
                }
                SignIn(signInData);
                dispatch(login(data));
            }
        } catch (err) {
            if (!isNotify.current) {
                toast.error('Error in login');
                isNotify.current = true;
            }
            navigate('/auth/login');
        }
    }

    return (
        <>
        </>
    );
}

export default AuthGooglePage;
