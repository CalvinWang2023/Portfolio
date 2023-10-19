import './Footer.css';
import {
    AiFillGithub,
    AiFillLinkedin,
} from "react-icons/ai";

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="text-container">
                <p>Designed by Yanchun</p>
            </div>
            <div className="copyright-container">
                <p>Copyright &copy; 2023</p>
            </div>
            <div className="logo-container">
                <a href="https://github.com/CalvinWang2023" target='_blank' className='github'>
                    <AiFillGithub />
                </a>
                <a href="https://www.linkedin.com/in/calvin-wang-736433289/" target='_blank' className='linkedin'>
                    <AiFillLinkedin />
                </a>
            </div>
        </div>
    );
}

export default Footer