import React from 'react';
import Toggle from './Toggle'
import { ThemeContext } from './themeContext'
import { navLinks } from "../data/navLinks";

const Header = () => {
    const { theme } = React.useContext(ThemeContext)
    return(
        <div className="text-gray-700 dark:bg-gray-700 dark:text-gray-200 p-3">
            <div className="flex flex-row mx-4 lg:mx-32 content-center">
                <a className="content-center hidden lg:flex" href="/"><img src={"./assets/" + (theme !== "dark" ? "logo-full.svg" : "logo-full-white.svg")} alt="logo-full" width="180" /></a>
                <a className="flex content-center mx-auto lg:hidden" href="/"><img src={"./assets/" + (theme !== "dark" ? "logo-icon.svg" : "logo-icon-white.svg")} alt="logo-full" width="30" /></a>
                <ul className="flex-row ml-auto hidden lg:flex space-x-5 my-2 mr-5">
                    {
                        navLinks.map((nav, index) => {
                            return <li className="hover:text-primary font-bold text-lg" key={index} ><a href={nav.path}>{nav.title}</a></li>
                        })
                    }
                </ul>
                <Toggle/>
            </div>
        </div>
    )
}

export default Header;