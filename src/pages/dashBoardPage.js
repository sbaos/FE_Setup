import { useEffect } from "react";
import { useSelector } from "react-redux";

function DashBoardPage() {
    const isLogin = useSelector(state => state.user.isLogin);
    // useEffect()
    return (
        <>
            DashBoardPage
        </>);
}

export default DashBoardPage;