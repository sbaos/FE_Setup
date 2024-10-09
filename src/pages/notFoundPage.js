import { useSelector } from "react-redux";

function NotFoundPage() {
    const mode = useSelector((state) => state.mode.mode);
    return (<>
        <div>
            <h3 className={`text-${mode.textColor}`}>404 page not found</h3>
            <p className={`text-${mode.textColor}`}>We are sorry but the page you are looking for does not exist.</p>
        </div>

    </>);
}

export default NotFoundPage;