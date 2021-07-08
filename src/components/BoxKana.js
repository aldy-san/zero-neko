import React from 'react'
import {Fade} from 'react-reveal';

const BoxKana = (props) =>{
    return(
        <Fade bottom>
            <li className={"box-border transition-all delay-75 col-span-"+props.span+(props.data.start ? " col-start-"+props.data.start : "")+" rounded-md bg-gray-50 dark:bg-gray-800 p-2 lg:p-4 shadow-md dark:hover:shadow-none hover:shadow-none"}>
                <p className="text-xl lg:text-3xl font-black mb-1 lg:mb-2">{props.data.kana}</p>
                <p className="font-semibold text-sm lg:text-base text-primary">{props.data.romaji}</p>
            </li>
        </Fade>

    )
}

export default BoxKana;