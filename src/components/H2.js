import React from 'react'

const H2 = (props) =>{
    return(
        <h1 className="text-lg lg:text-2xl text-center border-b-2 border-gray-700 dark:border-gray-600 pb-4 mb-4">
            <span className="font-black rounded-full block lg:inline mr-0 lg:mr-3">{props.span}</span>
            {props.text}
        </h1>
    )
}

export default H2;