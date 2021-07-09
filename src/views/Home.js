import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import illus from '../assets/illus.svg';
import {Fade} from 'react-reveal';
const Home = () => {
    const [search, setSearch] = useState("")
    return(
        <div className="mx-8 lg:mx-32 lg:mr-52 h-96">
            <div className="relative flex flex-col lg:flex-row lg:mt-20 p-2 lg:p-8 rounded-lg">
                <Fade right>
                    <div className="flex mx-auto mb-6 lg:mb-0 lg:ml-auto lg:mr-0 lg:order-last">
                        <img className="w-72 lg:w-96" src={illus} alt="illustration"/>
                    </div>
                </Fade>
                <Fade left>
                    <div className="flex flex-col content-start text-center lg:text-left">
                        <h1 className="font-black text-xl lg:text-5xl">Learn Japanese Character <span className="block mx-0 mt-2 lg:mt-5">from ZERO.</span></h1>
                        <p className="text-base lg:text-2xl mt-4 mb-6 lg:mt-8 dark:text-gray-200">Learn Hiragana, Katakana, and Kanji with fun.</p>
                        <div className="flex mx-auto lg:mx-0">
                            <div className="transition-all duration-200 flex rounded-full dark:bg-gray-700 shadow focus-within:ring-2 focus-within:ring-primary w-3/4 lg:w-auto">
                                <input autoComplete="off" onChange={(e) => setSearch(e.target.value)}  className="bg-transparent outline-none py-2 md:py-4 px-5 md:px-7 w-full" type="search" name="words" id="words" placeholder="Search" />
                            </div>
                            <Link to={search === "" ? "" : "/search?words="+encodeURIComponent(search)} className="transition-color duration-150 ml-2 p-4 rounded-full bg-gray-100 dark:bg-gray-600 dark:border-gray-500 hover:text-white hover:bg-primary dark:hover:bg-primary">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </Fade>

            </div>
        </div>
    )
}

export default Home;