import React from 'react'

const RadioInput = (props) =>{
    // console.log(props.checked.split("/")[1]);
    // console.log("grade-"+props.grade);
    console.log();
    return(
        <label className={(props.checked.split("/")[1] === "grade-"+props.grade ? "bg-gray-200 dark:bg-gray-900 shadow-inner" : "hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-opacity-90 shadow")+" rounded-lg text-base p-2 cursor-pointer"} htmlFor={"grade-"+props.grade}>
            <input className="mr-2 hidden" type="radio" id={"grade-"+props.grade} name="grade" value={"grade-"+props.grade} onClick={() => props.onSendGrade("grade-"+props.grade)}/>
            Grade-{props.grade}
        </label>
    )
}

export default RadioInput;