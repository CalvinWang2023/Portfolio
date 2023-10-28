import { useEffect, useState } from 'react';

import NavbarDesktop from './NavbarDesktop/NavbarDesktop';
import NavbarMobile from './NavbarMobile/NavbarMobile';

import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineProfile } from 'react-icons/ai';
import { RxAvatar } from 'react-icons/rx';

const navigationItems = [
	{ id: '0', text: 'Home', image: <AiOutlineHome />, path: '/' },
	{ id: '1', text: 'About', image: <RxAvatar/>, path: '/about' },
	{ id: '2', text: 'Projects', image: <AiOutlineFundProjectionScreen />, path: '/projects' },
	{ id: '3', text: 'Resume', image: <AiOutlineProfile/>, path: '/resume' },
];

const Navbar = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth)
        })
    }, [window.innerWidth]);

    const Header = innerWidth > 750 
        ? <NavbarDesktop navigationItems={ navigationItems } /> 
        : <NavbarMobile navigationItems={ navigationItems } />;

    return Header;
}

export default Navbar;