import React from 'react'

const RadioInput = (props) =>{
    return(
        <label className="bg-gray-600 rounded-lg text-base p-2 cursor-pointer" htmlFor={"grade-"+props.grade}>
            <input className="mr-2" type="radio" id={"grade-"+props.grade} name="grade" value={"grade-"+props.grade} onClick={() => props.onSendGrade("grade-"+props.grade)}/>
            Grade-{props.grade}
        </label>
    )
}

export default RadioInput;