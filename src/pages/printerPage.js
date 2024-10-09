import { useSelector } from "react-redux";

function PrinterPage() {
    const mode = useSelector(state => state.mode.mode);
    return (<>
        <div className={`text-${mode.textColor}`}>
            PrinterPage
        </div>
    </>);
}

export default PrinterPage;