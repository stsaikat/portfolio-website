import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const Layout = () => {
    return (
        <div className="app-layout">
            <ScrollToTop />
            <a className="skip-link" href="#main-content">Skip to content</a>
            <Navbar />
            <main id="main-content" tabIndex={-1}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
