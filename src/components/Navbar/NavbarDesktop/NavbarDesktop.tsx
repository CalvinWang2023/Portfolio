import './NavbarDesktop.css';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

interface NavigationItems {
	navigationItems: NavigationItem[];
}

const NavbarDesktop: React.FC<NavigationItems> = ({ navigationItems }) => {
	const location = useLocation();
	const [scrolled, updateNavbar] = useState(false);

	const activeItemId = navigationItems.find((item) => location.pathname === item.path)?.id || '0';

	const linkStyle = { textDecoration: 'none' };

	const hoverColor = { backgroundColor: '#fb6087' };

	function scrollHandler() {
		if (window.scrollY >= 20) {
			updateNavbar(true);
		} else {
			updateNavbar(false);
		}
	}
	
	window.addEventListener("scroll", scrollHandler);

	return (
		<div className={scrolled ? "nav-fixed navbar-desktop" : "navbar-desktop"}>
			<div className="site-icon">
				<h1>yanchun</h1>
			</div>
			<div className="menu-list">
				{navigationItems.map((item) => (
					<Link key={item.id} to={item.path} style={linkStyle}>
						<div className="nav-option">
							<div className={activeItemId === item.id ? 'hl clicked' : 'hl'} style={hoverColor}></div>
							<button id={activeItemId === item.id ? 'button-clicked' : ''}>
								{item.image}
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
