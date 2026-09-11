import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import '../styles/not-found.css';

const NotFound = () => {
    return (
        <>
            <Seo
                title="404 - Page Not Found"
                description="That page does not exist."
                path="/404"
                noindex
            />
            <div className="not-found-container">
                <h1 className="not-found-title">404</h1>
                <p className="not-found-text">Page not found</p>
                <Link to="/" className="not-found-link">
                    Go Back Home
                </Link>
            </div>
        </>
    );
};

export default NotFound;
