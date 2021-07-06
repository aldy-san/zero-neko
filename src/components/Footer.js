import React from 'react';
import { ThemeContext } from './themeContext'

//Data
import { navLinks } from "../data/navLinks";
import { socialMedia } from "../data/socialMedia";
import { me } from "../data/me";

//Pict
import logoIcon from '../assets/logo-icon.svg';
import logoIconWhite from '../assets/logo-icon-white.svg';
import ChildFooter from './ChildFooter';

const Footer = () => {
    const { theme } = React.useContext(ThemeContext)
    return(
        <div className="flex flex-col bg-gray-100 dark:bg-gray-900 dark:text-white pt-8 pb-4 ">
            <div className="grid grid-cols-12 mx-8 lg:mx-32">
                <div className="col-span-12 lg:col-span-3 mb-4 lg:mb-8">
                    <img className="mx-auto mb-5 w-20 lg:w-24" src={(theme !== "dark" ? logoIcon : logoIconWhite)} alt="logo-full" height="0" width="0"/>
                    <p className="text-center text-base lg:text-medium lg:text-left w-60 lg:w-52 mx-auto">Zeroneko is website platform for everyone to learn Japanese.</p>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-3 col-span-12 lg:col-span-9 space-y-0 mt-5 lg:mt-0 lg:ml-20 text-center lg:text-left">
                    <ChildFooter title={'Navigation'} data={navLinks}/>
                    <ChildFooter title={'Social'} data={socialMedia}/>
                    <ChildFooter title={'Developer'} data={me}/>
                </div>
            </div>
            {/* <span className="text-center text-sm mx-auto mb-24 lg:mb-0 mt-6">Powered by <a className="hover:text-primary" href="https://kanjiapi.dev/">kanjiapi.dev</a></span> */}
        </div>
    )
}

export default Footer;
