import React from 'react';
import illus from '../assets/illus.svg';
import {Fade} from 'react-reveal';
const Home = () => {
    return(
        <div className="mx-8 lg:mx-32 lg:mr-52 h-96">
            <div className="relative flex flex-col lg:flex-row lg:mt-20 p-2 lg:p-8 rounded-lg">
                <Fade bottom>
                    <div className="flex mx-auto mb-6 lg:mb-0 lg:ml-auto lg:mr-0 lg:order-last">
                        <img className="w-72 lg:w-96" src={illus} alt="illustration"/>
                    </div>
                </Fade>
                <Fade bottom>
                    <div className="flex flex-col content-start text-center lg:text-left">
                        <h1 className="font-black text-xl lg:text-5xl">Learn Japanese Character <span className="block mx-0 mt-2 lg:mt-5">from ZERO.</span></h1>
                        <p className="text-base lg:text-2xl mt-4 mb-6 lg:mt-8 dark:text-gray-200">Learn Hiragana, Katakana, and Kanji with fun.</p>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Home;