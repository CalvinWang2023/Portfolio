import './NavbarDesktop.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const navigationItems = [
	{ id: '0', text: 'Home', path: '/' },
	{ id: '1', text: 'About', path: '/about' },
	{ id: '2', text: 'Projects', path: '/projects' },
	{ id: '3', text: 'Resume', path: '/resume' },
];

const NavbarDesktop = () => {
	const [clicked, setClicked] = useState('0');

	const linkStyle = { textDecoration: 'none' };

	const hoverColor = { backgroundColor: '#fb6087' };

	const handleItemClick = (id: string) => {
		setClicked(id);
	};

	return (
		<div className="navbar-desktop">
			<div className="site-icon">
				<h1>yanchun</h1>
			</div>
			<div className="menu-list">
				{navigationItems.map((item) => (
					<Link key={item.id} to={item.path} style={linkStyle}>
						<div className="planet">
							<div className={clicked === item.id ? 'hl clicked' : 'hl'} style={hoverColor}></div>
							<button id={clicked === item.id ? 'planet-clicked' : ''} onClick={() => handleItemClick(item.id)}>
								{item.text}
							</button>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default NavbarDesktop;
