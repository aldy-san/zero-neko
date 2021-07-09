import React from 'react'
import { navLinks } from "../data/navLinks";
import BottomNavLink from './BottomNavLink'

const BottomNav = () =>{
    return(
        <nav className="fixed flex sm:hidden justify-center bottom-0 left-0 z-10 w-screen bg-white dark:bg-[#070d1a]">
            <ul className="flex justify-between w-full mx-6 mt-8 mb-5">
                {
                    navLinks.map((nav, idx) => {
                        return  <BottomNavLink key={idx} title={nav.title} symbol={nav.symbol} path={nav.path}/>
                    })
                }
            </ul>
            <div className="absolute -top-9 bg-gray-50 shadow-md dark:bg-[#192236] rounded-full p-4 dark:text-white">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"/>
                </svg>
            </div>
        </nav>
    )
}

export default BottomNav;