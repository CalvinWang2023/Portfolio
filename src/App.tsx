import './App.css';
import Home from './components/Home/Home';
import {
	BrowserRouter as Router,
	Route,
	Routes
} from "react-router-dom";
import Projects from './components/Projects/Projects';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App
