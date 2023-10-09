import { useState, useEffect } from 'react';
import './Home.css';
import homeIcon from '../../assets/Home_Icon.png';
import avatar from '../../assets/avatar.png';
import {
    AiFillGithub,
    AiFillLinkedin,
} from "react-icons/ai";

const Home = () => {
	const textArray = ["Web Developer...", "Open Source Contributor...", "Computer Science Student..."];
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [typing, setTyping] = useState(true);
	const [currentText, setCurrentText] = useState('');

	useEffect(() => {
		const typeAndDeleteText = () => {
			const text = textArray[currentTextIndex];

			if (typing) {
				if (currentText === text) {
					console.log("settimeout");
					setTimeout(() => {
						setTyping(false); // Change to false to start deleting
					}, 2000); // Delay before deleting
				} else {
					setCurrentText(text.substring(0, currentText.length + 1));
				}
			} else {
				if (currentText === '') {
					setTyping(true); // Change to true to start typing
					setCurrentTextIndex((currentTextIndex + 1) % textArray.length); // Move to the next text
				} else {
					setCurrentText(text.substring(0, currentText.length - 1));
				}
			}
		};

		const animationTimeout = setTimeout(() => {
			typeAndDeleteText();
		}, 150); // Adjust cursor blink speed as needed

		return () => clearTimeout(animationTimeout);

	}, [currentText, currentTextIndex, textArray, typing]);

	return (
		<div className="Home-container">
			<div className="Home">
				<div className="title">
					<p id='first'>Hi There!</p>
					<p id='second'>I'm <span>Yanchun Wang.</span></p>
					<p id='third'>
						{currentText}
						<span className='cursor'></span>
					</p>
				</div>
				<img src={homeIcon} alt="" className="homeIcon" />
			</div>

			<div className="buttons-container">
				<button className="projects">
					View my work
				</button>
				<button className="contact">
					Contact Me
				</button>
			</div>

			<div className="intro-container">
				<img src={ avatar } alt="" className='avatar' />
				<div className="desc">
					<p className='title'>Hey, Nice to <span>MEET</span> you!</p>
					<p>I'm a third year university student <span>passionate</span> about everything in <span>Web Development</span>!</p>
					<p>I have learnt something classics like <span>Typescript</span>, <span>C#</span>...</p>
					<p>I hope to practice and solidify my knowledge through a precious opportunity of <span>Internship</span>!</p>
				</div>	
			</div>
			<div className="contact-container">
				<div className="title">
					<span className="left-divider"></span>
					<p className="title-text">&lt; Contact Me &#47;&gt;</p>
					<span className="right-divider"></span>
				</div>
				<div className="desc">
					<p>Wanna say <span>Hello</span> to me?</p> 
					<p>Feel free to <span>connect</span> with me!</p>
				</div>
				<div className="contact-button">
					<a href="mailto:wang146@mcmaster.ca">Hello!</a>
				</div>
				<div className="logos-container">
					<a href="https://github.com/CalvinWang2023" target='_blank' className='github'>
						<AiFillGithub />
					</a>
					<a href="https://www.linkedin.com/in/calvin-wang-736433289/" target='_blank' className='linkedin'>
						<AiFillLinkedin />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Home;
