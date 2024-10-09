import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../services/axiosService'; // Assuming you have this service set up
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/userSlice';
import { toggleMode } from '../redux/modeSlice';
import '../styles/auth.login.css';
import { SignIn } from '../auth/signin';
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [handle, setHandle] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const mode = useSelector(state => state.mode.mode);
    const user = useSelector(state => state.user);
    const from = location.state?.from?.pathname || '/';
    const handleEmailKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (email) {
                e.preventDefault(); // Prevent form submission
                document.getElementById('password').focus(); // Focus on password input
            } else {
                toast.error('Please enter your email')
            }
        }
    };

    // Submit form on Enter press in password field
    const handlePasswordKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (password) {
                e.preventDefault(); // Prevent default action
                handleLogin(e); // Submit form
            } else {
                toast.error('Please enter your password')
            }
        }
    };
    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email) {
            toast.error('Please enter your email');
            return;
        }
        if (!password) {
            toast.error('Please enter your password');
            return;
        }
        setLoading(true);
        try {
            const response = await axios.get('/users?page=2');
            // Handle successful login
            const data = {
                email: 'mail',
                name: 'name'
            }
            SignIn(data);
            dispatch(login(data));
            toast.success('Login successful');
            navigate(from ?? '/');
        } catch (error) {
            // Handle failed login
            toast.error('Login failed');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        // navigate(from ?? '/');
    }, [user.isLogin])
    return (
        <div className={`container d-flex justify-content-center align-items-center min-vh-100`}>
            <div className="row col-12 col-md-6 d-flex justify-content-center align-items-center">
                <div className="col-12">
                    <div className={`card shadow-lg bg-${mode.backgroundColor} text-${mode.textColor}`}>
                        <div className="card-header text-center">
                            <h4>Login</h4>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control py-2 my-2"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        // required
                                        onKeyDown={(e) => handleEmailKeyDown(e)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        className="form-control py-2 my-2"
                                        id="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        // required
                                        onKeyDown={(e) => handlePasswordKeyDown(e)}
                                    />
                                </div>
                                <div className='d-flex justify-content-end mb-2'>
                                    {/* <div className='login-item'>
                                        Don't have account?
                                    </div> */}
                                    <div className='login-item'>
                                        Forgot your password?
                                    </div>
                                </div>
                                <div className="d-grid gap-2">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-block"
                                        disabled={loading}
                                    >
                                        {loading ? 'Logging in...' : 'Login'}
                                    </button>
                                </div>
                                <div className="d-grid gap-2 mt-2">
                                    <button
                                        onClick={() => { navigate('/auth/register') }}
                                        className="btn btn-warning btn-block"
                                        disabled={loading}
                                    >
                                        Register
                                    </button>
                                </div>
                                <hr className='hrhr' onDoubleClick={() => dispatch(toggleMode())} />
                                <div className="d-flex flex-column justify-content-center">
                                    <div
                                        className="mx-auto px-2 py-2"
                                        style={{ border: '1px solid red', borderRadius: '30px' }}
                                    >
                                        <FontAwesomeIcon icon={faGoogle} style={{ color: 'red' }} className="mx-2" />
                                        Login with Google
                                    </div>
                                    <div className="col-12 text-center mt-2">
                                        <Link to="/">Back</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoginPage;
