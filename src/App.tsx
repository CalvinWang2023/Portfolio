import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
    const location = useLocation();
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Hide the intro section after a delay (e.g., 5 seconds)
        const introHideTimeout = setTimeout(() => {
            setShowIntro(false);
        }, 4000);

        return () => {
            clearTimeout(introHideTimeout); // Clear the timeout to prevent it from hiding the intro section if the user navigates quickly
        };
    }, [location]);

    return (
        <>
            {showIntro && (
                <div className="intro-section">
                    <div className="typewriter">WELCOME TO MY PORTFOLIO</div>
                </div>
            )}
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path='/' element={ <Layout /> }> 	
                        <Route index element={ <Home /> } />	
                        <Route path='/about' element={ <About /> } />		
                        <Route path='/projects' element={ <Projects /> } />	
                        <Route path='/resume' element={ <Resume /> } />					
                    </Route>
                </Routes>
                <Footer />
            </div>	
        </>
    );
}

export default App;
