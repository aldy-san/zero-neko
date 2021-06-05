import React from 'react';
import { hiragana } from "../data/hiragana";

const Hiragana = () => {
    return(
        <>
            <div className="text-center lg:mx-36">
                <h1 className="text-6xl mt-8 mb-12 text-center lg:text-left"><span className="font-black rounded-full block lg:inline">あ</span> Hiragana</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 px-3 py-4 lg:p-6 shadow-inner mx-1 bg-gray-200 dark:bg-gray-600 rounded-lg space-y-4 lg:space-y-0">
                    <ul className="grid grid-cols-5 auto-rows-min grid-span-1 gap-2 lg:gap-4 lg:p-4">
                        {
                            hiragana.map((hira, index) => {
                                if (index >= 46) {
                                    return true;
                                }
                                return(
                                    <li className={"box-border transition-all delay-75 grid-span-1"+(hira.start ? " col-start-"+hira.start : "")+" rounded-md bg-gray-50 dark:bg-gray-700 box-content p-4 shadow-md dark:shadow-mdWhite dark:hover:shadow-none hover:shadow-none"} key={index}>
                                        <p className="text-xl lg:text-3xl font-black mb-2">{hira.kana}</p>
                                        <p className="font-semibold text-sm lg:text-base text-primary">{hira.romaji}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="flex flex-col col-span-1 space-y-4 lg:space-y-0">
                        <ul className="grid grid-cols-5 auto-rows-min gap-2 lg:gap-4 lg:p-4">
                            {
                                hiragana.map((hira, index) => {
                                    if (index < 46 || index >= 71) {
                                        return true;
                                    }
                                    return(
                                        <li className={"transition-all delay-75 col-span-1 "+(hira.start ? "col-start-"+hira.start : "")+" rounded-md bg-gray-50 dark:bg-gray-700 box-content p-4 shadow-md dark:shadow-mdWhite dark:hover:shadow-none hover:shadow-none"} key={index}>
                                            <p className="text-xl lg:text-3xl font-black mb-2">{hira.kana}</p>
                                            <p className="font-semibold text-sm lg:text-base text-primary">{hira.romaji}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <ul className="grid grid-cols-6 auto-rows-min gap-2 pb-4 lg:gap-4 lg:px-4">
                            {
                                hiragana.map((hira, index) => {
                                    if (index < 71) {
                                        return true;
                                    }
                                    return(
                                        <li className={"transition-all delay-75 col-span-2 rounded-md bg-gray-50 dark:bg-gray-700 box-content p-4 shadow-md dark:shadow-mdWhite dark:hover:shadow-none hover:shadow-none"} key={index}>
                                            <p className="text-xl lg:text-3xl font-black mb-2">{hira.kana}</p>
                                            <p className="font-semibold text-sm lg:text-base text-primary">{hira.romaji}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    
                </div>
                
            </div>
        </>
    )
}

export default Hiragana;