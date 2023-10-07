import './NavbarDesktop.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavbarDesktop = () => {
	const [clicked, setClicked] = useState('0');

	const linkStyle = {
		textDecoration: 'none'
	};

	const mercuryBorderColor = { backgroundColor: 'green' };
	const venusBorderColor = { backgroundColor: 'green' };
	const earthBorderColor = { backgroundColor: 'green' };

    return (
        <div className="navbar-desktop">
            <div className="site-icon">
                <h1>The Planets</h1>
            </div>
            <div className="menu-list">
				<Link to={ '/' } style={ linkStyle }>
					<div className="planet mercury-planet">
						<div className={ clicked === '0' ? 'hl clicked' : 'hl' } style={ mercuryBorderColor }></div>
						<button id={ clicked === '0' ? 'planet-clicked' : 'mercury' } onClick={ () => setClicked('0') }>Home</button>
					</div>
				</Link>
				<Link to={ '/about' } style={ linkStyle }>
					<div className="planet about-planet">
						<div className={ clicked === '1' ? 'hl clicked' : 'hl' } style={ mercuryBorderColor }></div>
						<button id={ clicked === '1' ? 'planet-clicked' : 'xxx' } onClick={ () => setClicked('1') }>About</button>
					</div>
				</Link>
				<Link to={ '/projects' } style={ linkStyle }>
					<div className="planet venus-planet">
						<div className={ clicked === '2' ? 'hl clicked' : 'hl' } style={ venusBorderColor }></div>
						<button id={ clicked === '2' ? 'planet-clicked' : 'venus' } onClick={ () => setClicked('2') }>Projects</button>
					</div>
				</Link>
				<Link to={ '/resume' } style={ linkStyle }>
					<div className="planet earth-planet">
						<div className={ clicked === '3' ? 'hl clicked' : 'hl' } style={ earthBorderColor }></div>
						<button id={ clicked === '3' ? 'planet-clicked' : 'earth' } onClick={ () => setClicked('3') }>Resume</button>
					</div>
				</Link>
            </div>
        </div>
    );
}

export default NavbarDesktop;