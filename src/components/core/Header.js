import React from 'react';
import Toggle from '../Toggle';
import { ThemeContext } from './themeContext';
import { navLinks } from '../../data/navLinks';
import SearchBox from '../SearchBox';
import NavLinks from './NavLinks';

import logo from '../../assets/logo-full.svg';
import logoWhite from '../../assets/logo-full-white.svg';
import logoIcon from '../../assets/logo-icon.svg';
import logoIconWhite from '../../assets/logo-icon-white.svg';

const Header = () => {
    const { theme } = React.useContext(ThemeContext);
    return(
        <nav className="bg-gray-50 dark:bg-gray-800 text-gray-700  dark:text-gray-200 py-6 lg:py-0 border-b-2 dark:border-gray-700">
            <div className="flex flex-row mx-4 lg:mx-32 content-center">
                <a className="content-center hidden lg:flex" href="/"><img src={(theme !== "dark" ? logo : logoWhite)} alt="logo-full" width="180" height="0" /></a>
                <a className="flex content-center mx-auto lg:hidden" href="/"><img src={(theme !== "dark" ? logoIcon : logoIconWhite)} alt="logo-full" width="35" height="0"/></a>
                <div className="hidden lg:flex justify-center m-auto h-1/2 ">
                    <SearchBox/>
                </div>
                <ul className="flex-row hidden xl:flex space-x-5 my-5 lg:py-3 mr-10">
                {
                    navLinks.map((nav, idx) => {
                        return <NavLinks key={idx} nav={nav}/>
                    })
                }
                </ul>
                <Toggle/>
            </div>
        </nav>
    )
}

export default Header;