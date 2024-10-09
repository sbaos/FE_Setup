import { Children } from "react";
import '../../styles/main.body.css'
import { useSelector } from "react-redux";
function Body({ children, classList }) {
    const mode = useSelector((state) => state.mode.mode);

    return (<>
        <div className={`${classList} bg-${mode.backgroundColor} bg-opacity-10`}>
            {children}
        </div>
    </>);
}

export default Body;