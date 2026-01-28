import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import CompetitiveProgramming from './pages/CompetitiveProgramming';
import Certifications from './pages/Certifications';
import Blogs from './pages/Blogs';
import NotFound from './pages/NotFound';

function App() {
    return (
        <Router>
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
        </Router>
    );
}

export default App;
