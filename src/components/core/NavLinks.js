import React, {useState} from 'react';
import {NavLink, Link} from 'react-router-dom';

const NavLinks = (props) => {
    const [show, setShow] = useState(false)
    return(
        <li className="relative group" onClick={() => setShow(!show)}>
            <NavLink 
            exact={props.nav.path==='/'} 
            to={props.nav.type === "dropdown" ? "" : props.nav.path} 
            className={(props.nav.type !== "dropdown" ? "flex" : "hidden ")+"transition-all  delay-150 flex text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-semibold text-lg tracking-wider"}
            activeClassName="filter brightness-50 dark:brightness-100 dark:text-white">
                <span>{props.nav.title}</span>
            </NavLink>
            <div className={(props.nav.type === "dropdown" ? "flex" : "hidden ")+" transition-all delay-150  text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 font-semibold text-lg tracking-wider cursor-pointer"}>
                <span>{props.nav.title}</span>
                <div className={(show ? "transform rotate-180 " : "")+ "my-auto"}>
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                    </svg>
                </div>
            </div>
            <div className={(props.nav.type !== "dropdown" ? "hidden" : (show ? "flex" : "hidden"))+" absolute justify-center top-12 -left-16 w-32 z-10 bg-gray-200 dark:bg-gray-900 p-4 rounded-md border border-gray-200 dark:border-gray-700"}>
                <ul className="flex flex-col space-y-3">
                    <Link className="font-bold text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 whitespace-nowrap" to={"/game/pairing-kana"}>Pairing Kana</Link>
                    <Link className="font-bold text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 whitespace-nowrap" to={"/game/typerace"}>Typeracing</Link>
                </ul>
            </div>
        </li>
    )
}
export default NavLinks;