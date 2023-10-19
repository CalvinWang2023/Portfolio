import { useEffect, useState } from 'react';

import NavbarDesktop from './NavbarDesktop/NavbarDesktop';
import NavbarMobile from './NavbarMobile/NavbarMobile';

const Navbar = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setInnerWidth(window.innerWidth)
        })
    }, [window.innerWidth]);

    const Header = innerWidth > 750 ? <NavbarDesktop /> : <NavbarMobile />;

    return Header;
}

export default Navbar;