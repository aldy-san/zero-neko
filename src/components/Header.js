import React from 'react';
import Toggle from './Toggle'
const Header = () => {
    const navLinks = [
        {path:'/', navTitle: "Home"},
        {path:'/hiragana', navTitle: "Hiragana"},
        {path:'/katakana', navTitle: "Katakana"},
        {path:'/', navTitle: "Kanji"},
        {path:'/', navTitle: "Words"},
        {path:'/', navTitle: "Game"}
    ]
    return(
        <div className="bg-gray-100 dark:bg-gray-700 dark:text-white p-3">
            <div className="flex flex-row d-margin">
                <h1 className="text-3xl">Zero Neko</h1>
                <ul className="flex flex-row ml-auto">
                    {
                        navLinks.map((nav, index) => {
                            return <li className="m-2" key={index} ><a href={nav.path}>{nav.navTitle}</a></li>
                        })
                    }
                </ul>
                <Toggle/>
            </div>
        </div>
        
    )
}

export default Header;