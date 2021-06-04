import React from 'react';

//Data
import { ThemeContext } from './themeContext'
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
        <div className="bg-gray-100 dark:bg-gray-700 dark:text-white py-8">
            <div className="grid grid-cols-12 mx-8 lg:mx-32">
                <div className="col-span-12 lg:col-span-3 mb-4 lg:mb-8 lg:mb-0">
                    <img className="mx-auto mb-5 w-20 lg:w-24" src={(theme !== "dark" ? logoIcon : logoIconWhite)} alt="logo-full" />
                    <p className="text-center text-base lg:text-medium lg:text-left w-60 lg:w-52 mx-auto">Zeroneko is website platform for everyone to learn Japanese.</p>
                </div>
                <div className="grid grid-cols-3 lg:grid-cols-3 col-span-12 lg:col-span-9 space-y-0 mt-5 lg:mt-0 lg:ml-20 text-center lg:text-left">
                    <ChildFooter title={'Navigation'} data={navLinks}/>
                    <ChildFooter title={'Social Media'} data={socialMedia}/>
                    <ChildFooter title={'Developer'} data={me}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;
