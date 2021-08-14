import React from 'react';
import { Link } from 'react-router-dom';
import H1 from '../components/H1'

const Kana = () => {
    const gameIcon =    <div className="fill-current transform scale-150 mb-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 20.45c0-.932-.575-1.357-1.109-1.357-.332 0-.672.156-.953.438-.284.296-.389.469-.786.469-.47 0-1.152-.534-1.152-1.5s.682-1.5 1.152-1.5c.396 0 .501.173.785.468.281.283.621.438.953.438.534 0 1.109-.425 1.109-1.357v-3.549h3.55c.536 0 .439.139.108.454-.261.245-.657.616-.657 1.394 0 1.039 1.004 2.152 2.5 2.152s2.5-1.113 2.5-2.152c0-.777-.396-1.148-.658-1.394-.333-.317-.425-.454.108-.454h3.55v-13h-24v24h13v-3.55zm0-19.45h10v11h-2.55c-.933 0-1.356.575-1.356 1.109 0 .332.155.672.438.953.294.284.468.388.468.786 0 .47-.534 1.152-1.5 1.152s-1.5-.682-1.5-1.152c0-.397.174-.501.469-.785.282-.281.438-.621.438-.953 0-.534-.424-1.109-1.356-1.109h-3.551v-3.551c0-.535.137-.44.454-.109.245.263.616.659 1.394.659 1.039 0 2.152-1.004 2.152-2.5s-1.113-2.5-2.152-2.5c-.777 0-1.148.396-1.394.659-.317.333-.454.424-.454-.109v-3.55zm-12 0h11v3.55c0 .932.575 1.357 1.109 1.357.463 0 .775-.252 1.075-.565.207-.221.32-.342.664-.342.47 0 1.152.534 1.152 1.5s-.682 1.5-1.152 1.5c-.344 0-.457-.121-.663-.341-.302-.314-.612-.565-1.075-.565-.535-.001-1.11.424-1.11 1.356v3.55h-3.55c-.536 0-.439-.139-.108-.454.262-.245.658-.616.658-1.394 0-1.039-1.004-2.152-2.5-2.152s-2.5 1.113-2.5 2.152c0 .777.396 1.148.658 1.394.333.317.425.454-.108.454h-3.55v-11zm11 22h-11v-10h3.55c.933 0 1.356-.575 1.356-1.109 0-.463-.25-.773-.564-1.075-.221-.207-.342-.32-.342-.664 0-.47.534-1.152 1.5-1.152s1.5.682 1.5 1.152c0 .344-.121.457-.342.663-.314.302-.564.612-.564 1.075 0 .535.424 1.11 1.356 1.11h3.55v3.55c0 .535-.137.44-.454.109-.245-.263-.616-.659-1.394-.659-1.039 0-2.152 1.004-2.152 2.5s1.113 2.5 2.152 2.5c.777 0 1.148-.396 1.394-.659.317-.333.454-.424.454.109v2.55z"/></svg>
                        </div>
    return(
        <div className="flex flex-col text-center lg:mx-36">
            <H1 span={gameIcon} text={"Game"}/>
            <div className="flex flex-col space-y-6">
                <div className="flex flex-col space-y-4 mx-8">
                    <Link to="game/pairing-kana" className="text-gray-600 dark:text-gray-300 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-xl py-3 w-full rounded-lg cursor-pointer">
                        <span>Pairing Kana</span>
                    </Link>
                    <Link to="game/typerace" className="text-gray-600 dark:text-gray-300 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-xl py-3 w-full rounded-lg cursor-pointer">
                        <span>Typerace</span>
                    </Link>
                    {/* <li className="text-gray-600 dark:text-gray-300 bg-gray-200  dark:bg-gray-900  text-xl mx-auto py-3 px-6 rounded-full ">
                        <span>Typeracing</span>
                        <span className="block text-primary text-sm"> Soon </span>
                    </li> */}
                </div>
                <span className="text-base max-w-prose  mx-auto">More Games Coming Soon</span>
            </div>
        </div>
    )
}

export default Kana;