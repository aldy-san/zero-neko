import React, {useState} from 'react';
import Toggle from './Toggle'
import { ThemeContext } from './themeContext'
import { navLinks } from '../data/navLinks';
import logo from '../assets/logo-full.svg';
import logoWhite from '../assets/logo-full-white.svg';
import logoIcon from '../assets/logo-icon.svg';
import logoIconWhite from '../assets/logo-icon-white.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    const [search, setSearch] = useState("")
    const { theme } = React.useContext(ThemeContext);
    return(
        <div className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 py-6 lg:py-0 border-b-2 dark:border-gray-700">
            <div className="flex flex-row mx-4 lg:mx-32 content-center">
                <a className="content-center hidden lg:flex" href="/"><img src={(theme !== "dark" ? logo : logoWhite)} alt="logo-full" width="180" height="0" /></a>
                <a className="flex content-center mx-auto lg:hidden" href="/"><img src={(theme !== "dark" ? logoIcon : logoIconWhite)} alt="logo-full" width="35" height="0"/></a>
                <div className="hidden xl:flex justify-center ml-auto py-2">
                    <div className="flex rounded-full dark:bg-gray-700 shadow focus-within:ring-2 focus-within:ring-primary my-4 ">
                        <input autoComplete="off"   onChange={(e) => setSearch(e.target.value)} className="bg-transparent outline-none py-3 px-6 w-96" type="search" name="words" id="words" placeholder="English, Japanese, Kanji, Words" />
                        <Link to={search === "" ? "" : "/search?words="+encodeURIComponent(search)} className="transition-color duration-150 p-3 ml-auto  rounded-r-full bg-gray-100 dark:bg-gray-600 dark:border-gray-500 hover:text-white hover:bg-primary dark:hover:bg-primary ">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"/>
                            </svg>
                        </Link>
                    </div>
                </div>
                <ul className="flex-row hidden lg:flex space-x-5 my-5 ml-auto lg:py-3 mr-10">
                {
                    navLinks.map((nav, index) => {
                        return <li className="transition-all delay-150 hover:text-primary font-semibold text-lg tracking-wider" key={index} ><a href={nav.path}>{nav.title}</a></li>
                    })
                }
                </ul>
                <Toggle/>
            </div>
        </div>
    )
}

export default Header;