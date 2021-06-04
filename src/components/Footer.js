import React from 'react';
import { ThemeContext } from './themeContext'
import { navLinks } from "../data/navLinks";
import { socialMedia } from "../data/socialMedia";
import { me } from "../data/me";

const Footer = (props) => {
    const { theme } = React.useContext(ThemeContext)
    return(
        <div className="bg-gray-100 dark:bg-gray-700 dark:text-white py-8">
            <div className="grid grid-cols-12 mx-8 lg:mx-32">
                <div className="col-span-12 lg:col-span-3 mb-8 lg:mb-0">
                    <img className="mx-auto mb-5" src={"./assets/" + (theme !== "dark" ? "logo-icon.svg" : "logo-icon-white.svg")} alt="logo-full" width="100" />
                    <p className="text-center lg:text-left w-52 mx-auto">Zeroneko is website platform for everyone to learn Japanese.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 col-span-12 lg:col-span-9 space-y-6 lg:space-y-0 lg:ml-20 text-center lg:text-left">
                    <div className="col-3">
                        <h3 className="font-semibold text-medium ">Navigation</h3>
                        <ul className="space-y-1 mt-3">
                            {
                                navLinks.map((nav, index) => {
                                    return <li className="hover:text-primary" key={index}><a href={nav.path} >{nav.title}</a></li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-3">
                        <h3 className="font-semibold text-medium ">Sosial Media</h3>
                        <ul className="space-y-2 mt-3">
                            {
                                socialMedia.map((x, index) => {
                                    return <li className="hover:text-primary" key={index}><a href={x.path} >{x.title}</a></li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-3">
                        <h3 className="font-semibold text-medium ">About Developer</h3>
                        <ul className="space-y-2 mt-3">
                            {
                                me.map((x, index) => {
                                    return <li className="hover:text-primary" key={index}><a href={x.path} >{x.title}</a></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
