import './Home.css';
import Buttons from './components/Buttons';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Intro from './components/Intro';

const Home = () => {
	return (
		<div className="home-container">
			<Hero />
			<Buttons />
			<Intro />
			<Contact />
		</div>
	);
};

export default Home;
