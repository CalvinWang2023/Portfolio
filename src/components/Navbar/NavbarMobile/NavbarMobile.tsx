import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './NavbarMobile.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const navigationItems = [
	{ id: '0', text: 'Home', path: '/' },
	{ id: '1', text: 'About', path: '/about' },
	{ id: '2', text: 'Projects', path: '/projects' },
	{ id: '3', text: 'Resume', path: '/resume' },
];

const NavbarMobile = () => {
    const location = useLocation();
	const [scrolled, updateNavbar] = useState(false);
    const [expand, setExpand] = useState(false);

    const visibility = {
        display: expand ? 'flex' : 'none'
    };

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
		<div className={scrolled ? "nav-fixed navbar-mobile" : "navbar-mobile"}>
			<div className="site-icon">
				<h1>yanchun</h1>
                <div className={`expand ${expand ? 'expanded' : ''}`} onClick={() => setExpand(!expand)}>
                    {expand ? <AiOutlineClose /> : <GiHamburgerMenu />}
                </div>
            </div>
			<div className="menu-list" style={visibility}>
				{navigationItems.map((item) => (
					<Link key={item.id} to={item.path} style={linkStyle}>
						<div className="nav-option" onClick={() => setExpand(false)}>
							<div className={activeItemId === item.id ? 'hl clicked' : 'hl'} style={hoverColor}></div>
							<button id={activeItemId === item.id ? 'button-clicked' : ''}>
								{item.text}
							</button>
						</div>
					</Link>
				))}
            </div>
        </div>
    )
}

export default NavbarMobile;