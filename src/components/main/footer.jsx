import { useSelector } from 'react-redux';
import '../../styles/main.footer.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Footer({ sideBarShow }) {
    const mode = useSelector((state) => state.mode.mode);
    return (<>
        <footer className={`bg-${mode.backgroundColor} text-${mode.textColor} py-4 mt-auto footer-container ${sideBarShow ? '' : 'wide'}`} style={{ borderTop: '1px solid black' }}>
            <div className="container">
                <div className="row d-flex justify-content-around">
                    <div className="col-md-4 mb-3">
                        <h5>About Us</h5>
                        <p>
                            We are a tech company focused on providing the best web solutions for your business needs.
                        </p>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Contact</h5>
                        <ul className="list-unstyled">
                            <li>Email: tnbao2004@gmail.com</li>
                            <li>Phone: +84 8 7611 6711</li>
                            <li>Address: Hidden</li>
                        </ul>
                    </div>
                    <div className="col-md-4 mb-3">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled d-flex">
                            <li className="me-3">
                                <Link to="https://facebook.com"
                                    className={`text-${mode.textColor} text-decoration-none`}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FontAwesomeIcon className='mx-1' icon={faFacebook} />
                                    Facebook
                                </Link>
                            </li>
                            <li className="me-3">
                                <Link to="https://gmail.com" className={`text-${mode.textColor} text-decoration-none`}
                                    target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className='mx-1' icon={faEnvelope} />
                                    Email
                                </Link>
                            </li>
                            <li>
                                <Link to="#" className={`text-${mode.textColor} text-decoration-none`}>
                                    <FontAwesomeIcon className='mx-1' icon={faSquareInstagram} />
                                    Instagram
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>&copy; {new Date().getFullYear()} Team 1 Class TN01.</p>
                </div>
            </div>
        </footer>
    </>);
}

export default Footer;