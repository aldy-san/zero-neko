import React from 'react'
import { isRomaji, toRomaji } from 'wanakana'
const ChildListDetail = (props) =>{
    return(
        <div className="flex flex-col px-4 py-2 capitalize whitespace-nowrap text-center border border-gray-600 dark:border-gray-400 font-black bg-opacity-20 rounded-lg">
            <p className="text-sm lg:text-lg">{props.data ? props.data : "-"}</p>
            <span className="text-xs text-primary">{!isRomaji(props.data) ? toRomaji(props.data) : ""}</span>
        </div>
    )
}

export default ChildListDetail;