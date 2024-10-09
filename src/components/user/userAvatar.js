import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import './userAvatar.css'; // Import the CSS file

function UserAvatar({ url, height, width, listDropdown, show, setShow }) {
    const dispatch = useDispatch();
    const [show_, setShow_] = useState(false);
    const [data, setData] = useState(
        listDropdown ?? (
            <ul className="dropdown-menu text-small shadow">
                <li>
                    <Link className="dropdown-item" to="/">
                        Detail
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item" to="/">
                        Settings
                    </Link>
                </li>
                <li>
                    <Link className="dropdown-item" onClick={() => dispatch(logout())}>
                        Logout
                    </Link>
                </li>
            </ul>
        )
    );

    return (
        <div className="user-avatar">
            <div className="avatar-wrapper" onClick={() => setShow_(!show_)}>
                <div
                    className="avatar"
                    style={{
                        backgroundImage: `url(${url})`,
                        width: width ?? '30px',
                        height: height ?? '30px',
                    }}
                ></div>
                <div className="toggle-icon">
                    {show_ ? <div>v</div> : <div>^</div>}
                </div>
            </div>
            {show_ && <div className="dropdown-container">{data}</div>}
        </div>
    );
}

export default UserAvatar;
