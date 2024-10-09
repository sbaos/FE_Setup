import React, { useEffect, useState } from 'react';
import SideBar from '../components/main/sidebar';
import Footer from '../components/main/footer';
import Body from '../components/main/body';
import Header from '../components/main/header';
import { useSelector } from 'react-redux';
const MainLayout = ({ children }) => {
    const [sideBarShow, setSideBarShow] = useState(false);
    const mode = useSelector((state) => state.mode.mode);
    return (
        <>
            <div className={`bg-opacity-50 app-container`} onClick={(e) => { e.stopPropagation(); }}>
                <Header classList='' setSideBarShow={setSideBarShow} sideBarShow={sideBarShow} />
                <div className={`d-flex bg-${mode.backgroundColor}`} style={{ width: '100%', overflow: 'hidden' }}>
                    <SideBar classList='main-sidebar-class' setSideBarShow={setSideBarShow} sideBarShow={sideBarShow} />
                    <div className='col-12'>
                        <Body classList={`main-body ${sideBarShow ? '' : 'wide'}`}>
                            {children}
                        </Body>
                        <Footer sideBarShow={sideBarShow} />
                    </div>
                </div>
            </div>
        </>

    );
}

export default MainLayout;