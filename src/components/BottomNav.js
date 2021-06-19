import React from 'react'
import { navLinks } from "../data/navLinks";

const BottomNav = () =>{
    return(
        <nav className="fixed flex lg:hidden justify-center bottom-5 left-0 rounded-xl z-10 w-screen">
            <ul className="flex justify-center bg-gray-200 dark:bg-gray-600 py-3 px-6 space-x-3 rounded-3xl shadow-md ">
                {
                    navLinks.map((nav, index) => {
                        return <li className="transition-all delay-150 rounded-lg hover:text-primary px-2 py-1 font-md text-lg bg-gray-50 dark:bg-gray-700 dark:text-white shadow-lg hover:shadow-none" key={index} ><a href={nav.path}>{nav.symbol}</a></li>
                    })
                }
            </ul>
        </nav>
    )
}

export default BottomNav;