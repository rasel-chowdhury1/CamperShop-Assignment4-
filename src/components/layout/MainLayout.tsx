
import { ToastContainer } from 'react-toastify';
import Header from '../home/Header/Header';
import HeaderBottom from '../home/Header/HeaderBottom';
import SpecialCase from '../SpecialCase/SpecialCase';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import Footer from '../home/Footer/Footer';
import FooterBottom from '../home/Footer/FooterBottom';

const MainLayout = () => {
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <Header />
            <HeaderBottom/>
            <SpecialCase/>
            <ScrollRestoration/>
            <Outlet/>
            <Footer />
            <FooterBottom />
        </div>
    );
};

export default MainLayout;