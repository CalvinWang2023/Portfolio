import Hero from "./components/Hero";
import './About.css';
import Techset from "./components/Techset";

const About = () => {
    return (
        <div className="about-container">
            <Hero />
            <Techset />
        </div>
    );
}

export default About