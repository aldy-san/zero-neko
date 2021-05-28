import React from 'react';

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
        <div className="bg-purple-300">
            <div className="flex flex-row d-margin">
                <h1 className="text-3xl">Zero Neko</h1>
                <ul className="flex flex-row ml-auto">
                    {
                        navLinks.map((nav, index) => {
                            return <li className="m-2" key={index} ><a href={nav.path}>{nav.navTitle}</a></li>
                        })
                    }
                </ul>
            </div>
        </div>
        
    )
}
export default Header;