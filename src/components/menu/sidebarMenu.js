import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

function MySidebarMenu({ menu, location, mode }) {
    const [show, setShow] = useState(false);
    if (!menu) {
        return null;
    }
    return (<>
        <div
            key={menu.link + '-'}
            className={` py-0   nav-item sidebar-item `}
        >
            <div
                className={`d-flex siderbar-item-hover justify-content-start align-items-center px-2 col-12 py-2`}
                onClick={() => setShow(!show)}>
                {menu?.submenu?.length > 0 ?
                    <Link
                        to={menu?.submenu?.length > 0 ? "" : menu.link}
                        className={`col-12 nav-link d-flex justify-content-start align-items-center ${location.pathname.includes(menu.link) ? 'active' : ''}`}
                    >
                        <i className={`mx-1 ${menu.icon}`} />
                        {menu.label}
                        {menu?.submenu?.length > 0 ? (show ? <i className="fa-solid fa-chevron-up mx-2"></i> : <i className="fa-solid fa-chevron-down mx-2"></i>) : <></>}
                    </Link> :
                    <a
                        href={menu?.submenu?.length > 0 ? "" : menu.link}
                        className={`col-12 nav-link d-flex justify-content-start align-items-center ${location.pathname.includes(menu.link) ? 'active' : ''}`}
                    >
                        <i className={`mx-1 ${menu.icon}`} />
                        {menu.label}
                        {menu?.submenu?.length > 0 ? (show ? <i className="fa-solid fa-chevron-up mx-2"></i> : <i className="fa-solid fa-chevron-down mx-2"></i>) : <></>}
                    </a>
                }

            </div>
            {show && menu?.submenu?.length > 0 && <ul className={`${!show && 'd-none'} my-0`}
            >
                {
                    menu?.submenu?.map((item, index) => {
                        return <li className="py-0" key={item.link + '-' + index}>
                            <MySidebarMenu menu={item} mode={mode} location={location} />
                        </li>
                    })
                }
            </ul>}
        </div>
    </>)
}
function MyMultiSidebarMenu({ menu, className, id, mode, location }) {
    if (!menu) {
        return null;
    }
    return (
        <div className="sidebar-menu col-12 my-3">
            {menu.menus?.map((item, index) => (
                <div
                    key={item.link + '-' + index}
                    className={`nav-item sidebar-item py-0`}
                >
                    <MySidebarMenu menu={item} mode={mode} location={location} />
                </div>
            ))}
        </div>
    );
}

export default MyMultiSidebarMenu;
