import React from 'react'

const H1 = (props) =>{
    return(
        <h1 className="flex flex-col lg:flex-row mb-8 lg:mt-8 lg:mb-12 text-center lg:text-left">
            <span className="font-black text-5xl lg:text-7xl rounded-full lg:mr-4">{props.span}</span>
            <span className="text-4xl lg:text-6xl ">{props.text}</span>
        </h1>
    )
}

export default H1;