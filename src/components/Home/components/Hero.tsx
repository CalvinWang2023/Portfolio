import { useEffect, useState } from 'react';
import homeHeroIcon from '../../../assets/Home_HeroIcon.png';

const Hero = () => {
    const textArray = ["Web Developer...", "Open Source Contributor...", "Computer Science Student..."];
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [typing, setTyping] = useState(true);
	const [currentText, setCurrentText] = useState('');

	useEffect(() => {
		const typeAndDeleteText = () => {
			const text = textArray[currentTextIndex];

			if (typing) {
				if (currentText === text) {
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
        <div className="hero-container">
            <div className="title">
                <p id='first'>Hi There!</p>
                <p id='second'>I'm <span>Yanchun Wang.</span></p>
                <p id='third'>
                    {currentText}
                    <span className='cursor'></span>
                </p>
            </div>
            <img src={homeHeroIcon} alt="Hero Icon" className="homeHeroIcon" />
        </div>
    );
}

export default Hero