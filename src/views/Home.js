import React from 'react';

const Home = () => {
    return(
        <div className="mx-8 lg:mx-32 lg:mr-52 h-96">
            <div className="relative flex flex-col lg:flex-row lg:mt-20 p-2 lg:p-8 rounded-lg">
                <h1 className="flex mx-auto mb-6 lg:mb-0 lg:ml-auto lg:mr-0 lg:order-last">
                    <img className="w-72 lg:w-96" src="./assets/illus.svg" alt="illustration"/>
                </h1>
                <div className="flex flex-col content-start text-center lg:text-left">
                    <h1 className="font-black text-2xl lg:text-6xl">Learn Japan from zero <span className="block mx-0 mt-2 lg:mt-5">with ZERONEKO.</span></h1>
                    <p className="text-base lg:text-2xl mt-4 lg:mt-8 dark:text-gray-200">Learn Hiragana, Katakana, and Kanji with fun.</p>
                    <a href="/" className="transition-all delay-750 flex self-start rounded-full font-medium mx-auto lg:mx-0 mt-4 lg:mt-8 px-4 py-2 lg:px-6 lg:py-4 lg:text-xl bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:bg-opacity-80 dark:hover:bg-gray-500">
                        Let's Start
                        <span className="flex ml-1 lg:ml-3">
                            <svg className="block my-auto " width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
                                <path stroke="currentColor" d="M19 12H4.75"></path>
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;