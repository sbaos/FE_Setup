import { useEffect, useState } from 'react'; // Make sure useState is imported
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { login } from './redux/userSlice';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import MainLayout from './layout/mainLayout';
import AuthLayout from './layout/authLayout';
import { getUserInformation } from './auth/getDataFromToken';
import Spinner from './components/spiner/spiner';
import AppRoute from './routes/appRoute';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './util/Scroll';

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const LayoutWrapper = ({ children }) => {
    const location = useLocation();
    const authLayoutRoutes = ['/auth/login', '/auth/register'];
    const authGoogle = ['/auth/google'];
    const isAuthLayoutRoute = authLayoutRoutes.some(route => location.pathname.startsWith(route));
    const isAuthGoogle = authGoogle.some(route => location.pathname.startsWith(route));
    const [isLoading, setIsLoading] = useState(true); // Track loading state

    useEffect(() => {
      const fetchUserInfo = async () => {
        const userInfo = getUserInformation();
        if (userInfo) {
          dispatch(login(userInfo));
        }
        setIsLoading(false);
      };
      fetchUserInfo();
    }, [dispatch]);

    if (isLoading) {
      return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <Spinner />
          <p className='mx-2 my-0'>Loading...</p>
        </div>
      );
    }
    if (isAuthGoogle)
      return <>{children}</>
    return isAuthLayoutRoute ? <AuthLayout>{children}</AuthLayout> : <MainLayout>{children}</MainLayout>;
  };

  return (
    <div className="App">
      <BrowserRouter>
        {/* <ScrollToTop /> */}
        <LayoutWrapper>
          <AppRoute />
        </LayoutWrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
