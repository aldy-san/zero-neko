import React from 'react'

const H2 = (props) =>{
    return(
        <h1 className="text-3xl lg:text-4xl text-center"><span className="font-black rounded-full block lg:inline mr-0 lg:mr-3">{props.span}</span>{props.text}</h1>
    )
}

export default H2;