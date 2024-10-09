import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../services/axiosService'; // Assuming you have this service set up
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/userSlice';
import { toggleMode } from '../redux/modeSlice';
import '../styles/auth.register.css';
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
function RegisterPage() {
    const numStep = 4;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validCode, setValidCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [handle, setHandle] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const mode = useSelector(state => state.mode.mode);
    const user = useSelector(state => state.user);
    const from = location.state?.from?.pathname || '/';
    const [current, setCurrent] = useState(0);
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
                e.preventDefault();
                document.getElementById('confirmPassword').focus();
            } else {
                toast.error('Please enter your password')
            }
        }
    };
    const handleConfirmPasswordKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (confirmPassword) {
                e.preventDefault();
                onSubmit0();
            } else {
                toast.error('Please enter your password')
            }
        }
    };

    const onSubmit0 = async (e) => {
        e?.preventDefault();
        if (!email || !password || !confirmPassword) {
            toast.error("Miss information");
            return;
        }
        if (password !== confirmPassword) {
            toast.error("Password and confirmPassword must be same");
            return;
        }
        if (!validateEmail(email)) {
            toast.error("Email is not valid");
            return;
        }
        //call API
        // let config = {
        //     headers: {
        //         Authorization: 'Bearer ' + 'Token',
        //     }
        // }
        const result = await axios.get('/user?page=2');
        if (result?.data?.a) {
            toast.error('Email is exist');
            return;
        }
        setCurrent(1);
    }
    const onSubmit1 = async (e) => {
        e?.preventDefault();
        //call API to valid code
        // const result = await axios.get('');
        // if (result?.data?.status) {
        //     setCurrent(2);
        // }
        setCurrent(2);

        // toast.error('Code is not valid');
    }
    const onSubmit2 = async (e) => {
        e?.preventDefault();
        //call API to backend
        //if result is valid 
        //
        setCurrent(3);
    }
    const handleRegister = async (e) => {
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
        <div className={`registerPage-container d-flex justify-content-center align-items-center min-vh-100`}>
            <div className="row col-12 col-md-6 d-flex justify-content-center align-items-center">
                <div className="col-12">
                    <div className={`card shadow-lg bg-${mode.backgroundColor} text-${mode.textColor}`}>
                        <div className="card-header d-flex justify-content-between">
                            <div className="text-center mt-2">
                                <Link className='nav-link' to="/auth/login">{'<'}</Link>
                            </div>
                            <h4>Register</h4>
                            <div></div>
                        </div>

                        <div className="card-body">
                            <div className="progress-steps mx-2 mb-2">
                                <div onClick={() => { current !== numStep - 1 && setCurrent(0) }} className={`${current === numStep - 1 ? 'completed disabled' : current > 0 ? 'completed' : current === 0 ? 'active' : 'disable'}`}>Register</div>
                                <div onClick={() => { current !== numStep - 1 && current > 1 && setCurrent(1) }} className={`${current === numStep - 1 ? 'completed disabled' : current > 1 ? 'completed' : current === 1 ? 'active' : 'disable'}`}>Enter Information</div>
                                <div onClick={() => { current !== numStep - 1 && current > 2 && setCurrent(2) }} className={`${current === numStep - 1 ? 'completed disabled' : current > 2 ? 'completed' : current === 2 ? 'active' : 'disable'}`}>Valid Email</div>
                                <div className={`${current === numStep - 1 ? 'active' : 'disable'}`}>Done</div>
                            </div>
                            <hr></hr>

                            {current === 0 && <form onSubmit={onSubmit0}>
                                <div className="form-group mb-3">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        className="form-control py-2 my-1"
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
                                        className="form-control py-2 my-1"
                                        id="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        // required
                                        onKeyDown={(e) => handlePasswordKeyDown(e)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control py-2 my-2"
                                        id="confirmPassword"
                                        placeholder="Enter your confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        onKeyDown={(e) => handleConfirmPasswordKeyDown(e)}
                                    />
                                </div>
                                {current + 1 < numStep ? <div className='d-flex justify-content-between'>
                                    <div className='col-12'>
                                        {current + 1 < numStep &&
                                            <button className='btn btn-primary col-12' type='submit'>
                                                Next
                                            </button>}
                                    </div>
                                </div> : <div className='d-flex justify-content-end'>
                                    <button className='btn btn-success' onClick={() => navigate('/auth/login')}>Done</button>
                                </div>}
                            </form>}
                            {current === 1 && <form onSubmit={onSubmit1}>
                                <div className="form-group mb-3">
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="string"
                                        className="form-control py-2 my-1"
                                        id="name"
                                        placeholder="Enter your Code"
                                        value={'a'}
                                    // onChange={(e) => setValidCode(e.target.value)}
                                    // required
                                    // onKeyDown={(e) => handleValidCodeKeyDown(e)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="number"
                                        className="form-control py-2 my-1"
                                        id="phone"
                                        placeholder="Enter your Phone"
                                    // value={validCode}
                                    // onChange={(e) => setValidCode(e.target.value)}
                                    // required
                                    // onKeyDown={(e) => handleValidCodeKeyDown(e)}
                                    />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="address">Address</label>
                                    <input
                                        type="validCode"
                                        className="form-control py-2 my-1"
                                        id="address"
                                        placeholder="Enter your Address"
                                    // value={validCode}
                                    // onChange={(e) => setValidCode(e.target.value)}
                                    // required
                                    // onKeyDown={(e) => handleValidCodeKeyDown(e)}
                                    />
                                </div>
                                {current + 1 < numStep ? <div className='d-flex justify-content-between'>
                                    <div className='col-12'>
                                        {current + 1 < numStep && <button className='btn btn-primary col-12' type='submit'>
                                            Next
                                        </button>}
                                    </div>
                                </div> : <div className='d-flex justify-content-end'>
                                    <button className='btn btn-success' onClick={() => navigate('/auth/login')}>Done</button>
                                </div>}
                            </form>}
                            {current === 2 && <form onSubmit={onSubmit2}>
                                <div className="form-group mb-3">
                                    <label htmlFor="validCode">Valid Code</label>
                                    <input
                                        type="validCode"
                                        className="form-control py-2 my-1"
                                        id="validCode"
                                        placeholder="Enter your Code"
                                        value={validCode}
                                        onChange={(e) => setValidCode(e.target.value)}
                                    // required
                                    // onKeyDown={(e) => handleValidCodeKeyDown(e)}
                                    />
                                </div>
                                {current + 1 < numStep ? <div className='d-flex justify-content-between'>
                                    <div className='col-12'>
                                        {current + 1 < numStep && <button className='btn btn-primary col-12' type='submit'>
                                            Next
                                        </button>}
                                    </div>
                                </div> : <div className='d-flex justify-content-end'>
                                    <button className='btn btn-success' onClick={() => navigate('/auth/login')}>Done</button>
                                </div>}
                            </form>}
                            {current === 3 && <div>
                                <div className='d-flex'>
                                    Your account was created
                                    <Link className='nav-link' to={'/auth/login'}>. Back to login.</Link>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button className='btn btn-success' onClick={() => { navigate('/auth/login') }}>Done</button>
                                </div>
                            </div>}

                            {/* <div className="d-grid gap-2 mt-2">
                                    <button
                                        onClick={() => { navigate('/auth/register') }}
                                        className="btn btn-warning btn-block"
                                        disabled={true || loading}
                                    >
                                        Register
                                    </button>
                                </div> */}
                            {current === 0 &&
                                <div>
                                    <hr className='hrhr' onDoubleClick={() => dispatch(toggleMode())} />
                                    <div className="d-flex flex-column justify-content-center">
                                        <div
                                            className="mx-auto px-2 py-2"
                                            style={{ border: '1px solid red', borderRadius: '30px' }}
                                        >
                                            <FontAwesomeIcon icon={faGoogle} style={{ color: 'red' }} className="mx-2" />
                                            Login with Google
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};


export default RegisterPage;