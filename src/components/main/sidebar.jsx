import { useState } from "react";
import '../../styles/main.sideBar.css'
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { userMenu } from "../../config/menu";
import MyMultiSidebarMenu from "../menu/sidebarMenu";

function SideBar({ setSideBarShow, sideBarShow, classList }) {
    const [showDashboard, setShowDashBoard] = useState(false);
    const location = useLocation();
    const mode = useSelector((state) => state.mode.mode);
    return (
        <>
            <div className={`sidebar-container ${classList} `}
            // onMouseEnter={() => { setSideBarShow(true) }}
            // onMouseLeave={() => { setSideBarShow(false) }}
            >
                <div className="row flex-nowrap col-12">
                    <div className={`col-md-12 col-8 ${sideBarShow ? 'px-0' : 'px-0'} bg-${mode.backgroundColor} sidebar ${sideBarShow ? 'expanded' : 'collapsed'}`}>
                        <div className={` d-flex flex-column align-items-center align-items-sm-start ${sideBarShow ? 'pt-0' : ''} text-${mode.textColor} min-vh-100 sidebar-content`}>
                            <MyMultiSidebarMenu menu={userMenu} mode={mode} location={location} className={`nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start`} id="menu" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBar;