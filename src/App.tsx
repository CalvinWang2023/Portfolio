import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';

function App() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0); // Scroll to the top when the location changes
	}, [location]);
  
	return (
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
	);
}

export default App
