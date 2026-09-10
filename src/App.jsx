import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const CompetitiveProgramming = lazy(() => import('./pages/CompetitiveProgramming'));
const Certifications = lazy(() => import('./pages/Certifications'));
const Blogs = lazy(() => import('./pages/Blogs'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
    return (
        <Router>
            <Suspense fallback={null}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="cp" element={<CompetitiveProgramming />} />
                        <Route path="certifications" element={<Certifications />} />
                        <Route path="blogs" element={<Blogs />} />

                        {/* Add other routes here */}
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
