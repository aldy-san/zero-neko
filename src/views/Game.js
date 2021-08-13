import React from 'react';
import { Link } from 'react-router-dom';
import H1 from '../components/H1'

const Kana = () => {
    return(
        <div className="flex flex-col text-center lg:mx-36">
            <H1 span={"⚂"} text={"Game"}/>
            <div className="flex flex-col space-y-6">
                <ul className="flex flex-col space-y-6">
                    <li className="text-gray-600 dark:text-gray-300 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-xl mx-auto py-3 px-6 rounded-lg cursor-pointer">
                        <Link to="game/pairing-kana">Pairing Kana</Link>
                    </li>
                    <li className="text-gray-600 dark:text-gray-300 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-xl mx-auto py-3 px-6 rounded-lg cursor-pointer">
                        <Link to="game/typerace">Typerace</Link>
                    </li>
                    {/* <li className="text-gray-600 dark:text-gray-300 bg-gray-200  dark:bg-gray-900  text-xl mx-auto py-3 px-6 rounded-full ">
                        <span>Typeracing</span>
                        <span className="block text-primary text-sm"> Soon </span>
                    </li> */}
                </ul>
                <span className="text-base max-w-prose  mx-auto">More Games Coming Soon</span>
            </div>
        </div>
    )
}

export default Kana;