import React from 'react';
import Toggle from './Toggle'
import { ThemeContext } from './themeContext'

const Header = () => {
    const navLinks = [
        {path:'/', navTitle: "Home"},
        {path:'/hiragana', navTitle: "Hiragana"},
        {path:'/katakana', navTitle: "Katakana"},
        {path:'/', navTitle: "Kanji"},
        {path:'/', navTitle: "Words"},
        {path:'/', navTitle: "Game"}
    ]
    const { theme } = React.useContext(ThemeContext)
    return(
        <div className="bg-gray-100 dark:bg-gray-700 dark:text-white p-3">
            <div className="flex flex-row d-margin">
                <img src={"./assets/" + (theme !== "dark" ? "logo-full.svg" : "logo-full-white.svg")} alt="logo-full" style={{height: '35px'}} />
                <ul className="flex flex-row ml-auto">
                    {
                        navLinks.map((nav, index) => {
                            return <li className="m-2" key={index} ><a href={nav.path}>{nav.navTitle}</a></li>
                        })
                    }
                </ul>
                {/* <Toggle ref={(childRef) => {console.log(childRef != null ? (childRef.getTheme()) : "");}}/> */}
                <Toggle/>
            </div>
        </div>
    )
}

export default Header;