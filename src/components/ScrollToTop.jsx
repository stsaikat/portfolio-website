import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Router keeps the scroll offset across route changes, which drops you into the
// middle of the next page. Reset on navigation, but respect the user's motion
// preference and leave hash links (#section) to the browser.
const ScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) return;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, left: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    }, [pathname, hash]);

    return null;
};

export default ScrollToTop;
