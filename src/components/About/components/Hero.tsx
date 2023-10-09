import aboutHeroIcon from '../../../assets/About_HeroIcon.png';

const Hero = () => {
    return (
        <div className="hero-container">
            <h1 className="title">About <span>ME</span></h1>
            <div className="intro">
                <div className="intro-text">
                    <p>Hi there! I'm <span>Yanchun Wang</span> based in <span>Hamilton, Ontario, Canada.</span></p>
                    <p>I'm a third year computer science student at <span>McMaster University</span>, passionate about developing <span>aesthetically pleasing</span> and <span>high-performance</span> Web Application.</p>
                    <p>I have a solid understanding of <span>React</span>, <span>Redux</span>, <span>JavaScript</span>, and <span>TypeScript</span> in front-end development;</p>
                    <p>I am actively learning <span>ASP.NET &#40;C#&#41;</span> for back-end development.</p>
                    <p>I utilize these technologies to work on projects and continuously strive to learn and gain experience from them.</p>
                    <p>I have a strong desire to explore different technologies and maintain an open-minded approach to learning new skills.</p>
                </div>
                <img src={ aboutHeroIcon } alt="about hero icon" className='aboutHeroIcon' />
            </div>

        </div>
    );
}

export default Hero