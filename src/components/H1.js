import React from 'react'

const H1 = (props) =>{
    return(
        <h1 className="text-4xl lg:text-6xl mb-8 lg:mt-8 lg:mb-12 text-center lg:text-left">
            <span className="font-black rounded-full block lg:inline mr-0 lg:mr-3">{props.span}</span>
            {props.text}
        </h1>
    )
}

export default H1;