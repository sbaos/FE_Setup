import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../styles/menu.css';

const renderSubMenu = (menu, zIndex, mode, openMenu, handleMenuClick) => {
    const isOpen = openMenu === menu?.link;

    if (menu?.submenu?.length > 0) {
        return (
            <div
                key={`header-item-${menu?.link}`}
                className={`submenu submenu-z-${zIndex} bg-${mode.backgroundColor} ${isOpen ? 'open' : ''}`}
            >
                {menu.submenu.map((item, index) => (
                    <div key={`${index}-${zIndex}-${item.link}`} className="submenu-p">
                        <Link
                            to={item.link}
                            className="nav-link"
                            onClick={() => handleMenuClick(menu?.link)}
                        >
                            {item.label}
                        </Link>
                        {/* Recursively render submenus if they exist */}
                        {renderSubMenu(item, zIndex + 1, mode, openMenu, handleMenuClick)}
                    </div>
                ))}
            </div>
        );
    }
    return null; // Return null if there is no submenu
};

function MyHeaderMenu({ menu, location }) {
    const mode = useSelector(state => state.mode.mode);
    const [openMenu, setOpenMenu] = useState(null);

    const handleMenuClick = (menuLink) => {
        setOpenMenu(prevMenu => (prevMenu === menuLink ? null : menuLink));
    };

    if (!menu) {
        return <></>;
    }

    return (
        <>
            <div>
                {menu.menus?.map(item => {
                    const isActive = location.pathname === item.link;
                    return (
                        <div key={item.link} className="menu-item">
                            <Link
                                to={item.link}
                                className={`nav-link ${isActive ? 'active' : ''}`}
                                onClick={() => handleMenuClick(item.link)}
                            >
                                <i className={`mx-1 ${item.icon}`} />
                                {item.label}
                            </Link>
                            {renderSubMenu(item, 1, mode, openMenu, handleMenuClick)}
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default MyHeaderMenu;
