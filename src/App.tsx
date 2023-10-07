import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import NavbarDesktop from './components/Navbar/NavbarDesktop/NavbarDesktop';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div className="App">
			<NavbarDesktop />
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
