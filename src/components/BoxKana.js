import React from 'react'

const BoxKana = (props) =>{
    return(
        <li className={"box-border transition-all delay-75 col-span-"+props.span+(props.data.start ? " col-start-"+props.data.start : "")+" rounded-md bg-gray-50 dark:bg-gray-800 p-4 shadow-md dark:shadow-mdWhite dark:hover:shadow-none hover:shadow-none"}>
            <p className="text-xl lg:text-3xl font-black mb-2">{props.data.kana}</p>
            <p className="font-semibold text-sm lg:text-base text-primary">{props.data.romaji}</p>
        </li>
    )
}

export default BoxKana;