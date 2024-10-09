import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/homePage";
import LoginPage from "../pages/loginPage";
import RegisterPage from "../pages/registerPage";
import PrivateRoute from "../components/route/privateRoute";
import DashBoardPage from "../pages/dashBoardPage";
import PrinterPage from "../pages/printerPage";
import NotFoundPage from "../pages/notFoundPage";
import HistoryPage from "../pages/historyPage";
import AuthGooglePage from "../pages/authGoogle";
import PaymentPage from "../pages/paymentPage";
import PaymentHistory from "../pages/paymentHistoryPage";

function AppRoute() {
    return (<>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/register" element={<RegisterPage />} />
            <Route path="/auth/google" element={<AuthGooglePage />}></Route>
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute>
                        <DashBoardPage /> {/* Page that requires authentication */}
                    </PrivateRoute>
                }
            />
            <Route path='/print' element={
                <PrivateRoute>
                    <PrinterPage />
                </PrivateRoute>
            } />
            <Route path='/history' element={
                <PrivateRoute>
                    <HistoryPage />
                </PrivateRoute>
            } />
            <Route path='/payment' element={
                <PrivateRoute>
                    <PaymentPage />
                </PrivateRoute>
            }>
            </Route>
            <Route path="payment/history" element={
                <PrivateRoute>
                    <PaymentHistory />
                </PrivateRoute>
            }
            ></Route>
            <Route path="payment/deposit" element={
                <PrivateRoute>
                    <PaymentHistory />
                </PrivateRoute>
            }
            ></Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </>);
}

export default AppRoute;