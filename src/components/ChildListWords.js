import React from 'react'
const ChildListWords = (props) =>{
    return(
        <p className="text-xs lg:text-sm text-right w-36 lg:w-80">{(props.num === -1 ? "" : props.num+1+". ")+props.datas.glosses.join("; ")}</p>
    )
}

export default ChildListWords;