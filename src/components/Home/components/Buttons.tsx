import { Link } from "react-router-dom";

const Buttons = () => {
    return (
        <div className="buttons-container">
            <Link to="/projects">
                <button>
                    View my work
                </button>
            </Link>

            <a href="#contact">
                <button>
                    Contact Me
                </button>     
            </a>
        </div>
    );
}

export default Buttons