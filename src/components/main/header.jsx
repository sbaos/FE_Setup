// import React, { useState, useEffect, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleMode } from '../../redux/modeSlice';
// import { readCookie } from '../../cookies/cookie';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import '../../styles/main.header.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
// import { logout } from '../../redux/userSlice';
// import { faSortDown } from '@fortawesome/free-solid-svg-icons';

// function Header({ classList, setSideBarShow, sideBarShow }) {
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [dropdownNotifyOpen, setDropdownNotifyOpen] = useState(false);
//     const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
//     const mode = useSelector((state) => state.mode.mode);
//     const user = useSelector(state => state.user);
//     const [value, setValue] = useState('');
//     const dispatch = useDispatch();
//     const dropdownRef = useRef(null);
//     const navigate = useNavigate();
//     const location = useLocation();
//     const toggleDropdown = (e) => {
//         e.stopPropagation();
//         setDropdownOpen(!dropdownOpen);
//     };

//     const toggle = () => {
//         dispatch(toggleMode());
//         // createCookie('test', 'data abcded', process.env.REACT_APP_TOKEN_EXPIRE_TIME);
//         setValue(readCookie('test'));
//     };

//     useEffect(() => {
//         function handleClickOutside(event) {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setDropdownOpen(false);
//             }
//         }

//         document.addEventListener('mousedown', handleClickOutside);
//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, [dropdownRef]);
//     // console.log('path', location.pathname);
//     return (
//         <div className='header-container col-12'>
//             <Navbar expand="lg" bg={`${mode.backgroundColor}`} className='bg-gradient py-0' data-bs-theme={`${mode.type}`}>
//                 <Container fluid>
//                     <div className='d-flex'>
//                         <Navbar.Text className='mr-2 toggle-button header-toggle-sidebar'
//                             onClick={() => setSideBarShow(!sideBarShow)}
//                         // onMouseEnter={() => setSideBarShow(true)}
//                         // onMouseLeave={() => setSideBarShow(false)}
//                         >
//                             <button className='btn mr-2'>
//                                 <span className='navbar-toggler-icon'></span>
//                             </button>
//                         </Navbar.Text>
//                         <Navbar.Text className='mr-2 toggle-button header-toggle-sidebar py-0'
//                         >
//                             <div style={{
//                                 background: 'url(/image/logoBK.png) no-repeat center',
//                                 backgroundSize: 'cover',
//                                 height: '60px',
//                                 width: '60px',
//                             }}>
//                             </div>
//                         </Navbar.Text>
//                     </div>
//                     <Navbar.Toggle aria-controls="navbarScroll" />
//                     <Navbar.Collapse id="navbarScroll">
//                         <Nav
//                             className={`me-auto my-2 my-lg-0  text-${mode.textColor}`}
//                             navbarScroll
//                         >
//                             {/* <Link to='/' className={`nav-link ${location.pathname === '/' && 'active'}`}>
//                                 <FontAwesomeIcon icon={faHouseChimney} className='px-1' />
//                                 Home</Link> */}
//                             {/* <MyHeaderMenu menu={user?.role === USER_ROLE.ADMIN ? adminMenu : userMenu} location={location}></MyHeaderMenu> */}
//                         </Nav>
//                         <Form className="d-flex">
//                             <Form.Control
//                                 type="search"
//                                 placeholder="Search"
//                                 className="me-2"
//                                 aria-label="Search"
//                             />
//                             <Button className={`btn btn-${mode.type === 'light' ? 'primary' : 'secondary'}`} onClick={toggle}>Search</Button>
//                         </Form>
//                         {user.isLogin && <div className={`text-${mode.textColor}`}>
//                             Coin: {user.coin}$
//                         </div>}
//                         <div className='mx-2 px-2 header-mode-item' onClick={toggle} style={{ border: '1px solid black', borderRadius: '50%' }}>
//                             {mode.type === 'light' ?
//                                 <FontAwesomeIcon icon={faSun} /> :
//                                 <FontAwesomeIcon className='bg-light' icon={faMoon} />}
//                         </div>
//                     </Navbar.Collapse>
//                     <Navbar.Text>
//                         {user.isLogin ?
//                             <div className='d-flex align-items-center'>
//                                 <div className='d-flex align-items-center' onClick={() => { setDropdownNotifyOpen(p => !p) }}>
//                                     <i className="fa-regular fa-bell item"></i>
//                                     <NavDropdown
//                                         id="navbarScrollingDropdown"
//                                         className={`mt-5 align-items-center d-flex text-${mode.textColor} dropdown-menu-start`}
//                                         align="end"
//                                         show={dropdownNotifyOpen}
//                                     >
//                                         <NavDropdown.Item className={`text-${mode.textColor}`}>
//                                             <Link to="/login" className={`text-${mode.textColor} dropdown-item`}>Detail</Link>
//                                         </NavDropdown.Item>
//                                         <NavDropdown.Item className={`text-${mode.textColor}`}>
//                                             <Link to="/login" className={`text-${mode.textColor} dropdown-item`}>Setting</Link>
//                                         </NavDropdown.Item>
//                                         <NavDropdown.Item className={`text-${mode.textColor}`}>
//                                             <Link to='/' onClick={() => dispatch(logout())} className={`text-${mode.textColor} dropdown-item`}>Logout</Link>
//                                         </NavDropdown.Item>
//                                     </NavDropdown>
//                                 </div>
//                                 <div
//                                     className={`text-${mode.textColor} align-items-center gap-1 d-flex user-image-infor-container mx-2`}
//                                     onClick={(e) => { e.stopPropagation(); toggleDropdown(e); }}
//                                     ref={dropdownRef} // Reference to the dropdown container
//                                 >
//                                     <div style={{
//                                         background: 'url(https://i.ytimg.com/vi/vHO6Tda4OAY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjalKbtRBesdyRlrxosmcUKgQXlg) no-repeat center',
//                                         backgroundSize: 'cover',
//                                         height: '40px', width: '40px',
//                                         border: 'solid 1px',
//                                         borderRadius: '50%',
//                                         opacity: 0.8,
//                                     }}
//                                         onClick={(e) => { e.stopPropagation(); setDropdownOpen(p => !p); }}
//                                         className='py-3 image'>
//                                     </div>
//                                     <FontAwesomeIcon icon={faSortDown} />
//                                     <NavDropdown
//                                         id="navbarScrollingDropdown"
//                                         className={`mt-5 align-items-center d-flex text-${mode.textColor} dropdown-menu-start`}
//                                         align="end"
//                                         show={dropdownOpen}
//                                     >
//                                         <NavDropdown.Item className={`text-${mode.textColor}`}>
//                                             <Link to="/login" className={`text-${mode.textColor} dropdown-item`}>Detail</Link>
//                                         </NavDropdown.Item>
//                                         <NavDropdown.Item className={`text-${mode.textColor}`}>
//                                             <Link to="/login" className={`text-${mode.textColor} dropdown-item`}>Setting</Link>
//                                         </NavDropdown.Item>
//                                         <NavDropdown.Item className={`text-${mode.textColor}`}>
//                                             <Link to='/' onClick={() => dispatch(logout())} className={`text-${mode.textColor} dropdown-item`}>Logout</Link>
//                                         </NavDropdown.Item>
//                                     </NavDropdown>
//                                 </div>
//                             </div>
//                             : <button className={`btn btn-success`} onClick={() => navigate('/auth/login')}>Login</button>
//                         }
//                     </Navbar.Text>
//                 </Container>
//             </Navbar>
//         </div>
//     );
// }

// export default Header;
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMode } from '../../redux/modeSlice';
import { readCookie } from '../../cookies/cookie';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../../styles/main.header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { logout } from '../../redux/userSlice';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

function Header({ classList, setSideBarShow, sideBarShow }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownNotifyOpen, setDropdownNotifyOpen] = useState(false);
    const mode = useSelector((state) => state.mode.mode);
    const user = useSelector(state => state.user);
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const profileDropdownRef = useRef(null);
    const notifyDropdownRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleDropdown = (e) => {
        e.stopPropagation();
        setDropdownOpen(!dropdownOpen);
    };

    const toggleNotifyDropdown = (e) => {
        e.stopPropagation();
        setDropdownNotifyOpen(!dropdownNotifyOpen);
    };

    const toggle = () => {
        dispatch(toggleMode());
        setValue(readCookie('test'));
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
            if (notifyDropdownRef.current && !notifyDropdownRef.current.contains(event.target)) {
                setDropdownNotifyOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='header-container col-12'>
            <Navbar expand="lg" bg={`${mode.backgroundColor}`} className='bg-gradient py-0' data-bs-theme={`${mode.type}`}>
                <Container fluid>
                    <div className='d-flex'>
                        <Navbar.Text className='mr-2 toggle-button header-toggle-sidebar'
                            onClick={() => setSideBarShow(!sideBarShow)}
                        >
                            <button className='btn mr-2'>
                                <span className='navbar-toggler-icon'></span>
                            </button>
                        </Navbar.Text>
                        <Navbar.Text className='mx-2 d-flex align-items-center toggle-button header-toggle-sidebar py-0'>
                            <div style={{
                                background: 'url(/image/logoBK.png) no-repeat center',
                                backgroundSize: 'cover',
                                height: '45px',
                                width: '45px',
                            }}>
                            </div>
                        </Navbar.Text>
                    </div>
                    {/* <div>F88</div> */}
                    {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
                    <Navbar.Collapse id="navbarScroll">

                        <Nav className={`me-auto my-2 my-lg-0  text-${mode.textColor}`} navbarScroll>
                            {/* Add your Nav links here */}
                        </Nav>
                        {/* <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button className={`btn btn-${mode.type === 'light' ? 'primary' : 'secondary'}`} onClick={toggle}>Search</Button>
                        </Form> */}
                        {user.isLogin && <div className={`text-${mode.textColor} item`} onClick={() => { navigate('/payment/deposit') }}>
                            Coin: {user.coin}$
                        </div>}
                        <div className='mx-2 px-2 header-mode-item' onClick={toggle} style={{ border: '1px solid black', borderRadius: '50%' }}>
                            {mode.type === 'light' ?
                                <FontAwesomeIcon icon={faSun} /> :
                                <FontAwesomeIcon className='bg-light' icon={faMoon} />}
                        </div>
                    </Navbar.Collapse>
                    <Navbar.Text>
                        {user.isLogin ?
                            <div className='d-flex align-items-center'>
                                <div className='d-flex align-items-center' ref={notifyDropdownRef} onClick={toggleNotifyDropdown}>
                                    <i className="fa-regular fa-bell item"></i>
                                    <NavDropdown
                                        id="navbarScrollingDropdown"
                                        className={`mt-5 align-items-center d-flex text-${mode.textColor} dropdown-menu-start`}
                                        align="end"
                                        show={dropdownNotifyOpen}
                                    >
                                        <NavDropdown.Item className={`text-${mode.textColor}`}>
                                            <Link to="/login" className={`text-${mode.textColor} dropdown-item`}>Detail</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className={`text-${mode.textColor}`}>
                                            <Link to="/login" className={`text-${mode.textColor} dropdown-item`}>Setting</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className={`text-${mode.textColor}`}>
                                            <Link to='/' onClick={() => dispatch(logout())} className={`text-${mode.textColor} dropdown-item`}>Logout</Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                                <div
                                    className={`text-${mode.textColor} align-items-center gap-1 d-flex user-image-infor-container mx-2`}
                                    ref={profileDropdownRef} // Reference to the profile dropdown container
                                    onClick={toggleDropdown}
                                >
                                    <div style={{
                                        background: 'url(https://i.ytimg.com/vi/vHO6Tda4OAY/hqdefault.jpg) no-repeat center',
                                        backgroundSize: 'cover',
                                        height: '40px', width: '40px',
                                        border: 'solid 1px',
                                        borderRadius: '50%',
                                        opacity: 0.8,
                                    }}
                                        className='py-3 image'>
                                    </div>
                                    {!dropdownOpen ? <FontAwesomeIcon icon={faSortDown} /> :
                                        <FontAwesomeIcon className='' icon={faSortUp} />}

                                    <NavDropdown
                                        id="navbarScrollingDropdown"
                                        className={`mt-5 align-items-center d-flex text-${mode.textColor} dropdown-menu-start`}
                                        align="end"
                                        show={dropdownOpen}
                                    >
                                        <NavDropdown.Item className={`text-${mode.textColor}`}>
                                            <Link to="/login" className={`text-${mode.textColor} dropdown-item`}>Detail</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className={`text-${mode.textColor}`}>
                                            <Link to="/login" className={`text-${mode.textColor} dropdown-item`}>Setting</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item className={`text-${mode.textColor}`}>
                                            <Link to='/' onClick={() => dispatch(logout())} className={`text-${mode.textColor} dropdown-item`}>Logout</Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                            </div>
                            : <button className={`btn btn-success`} onClick={() => navigate('/auth/login')}>Login</button>
                        }
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div >
    );
}

export default Header;
