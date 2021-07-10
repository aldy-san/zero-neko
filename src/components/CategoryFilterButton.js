import React from 'react'

const CategoryFilterButton = (props) =>{
    return(
        <label className={(props.checked.split("/")[1] === props.category ? "bg-gray-200 dark:bg-gray-900 shadow-inner" : "hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-900 hover:bg-opacity-90 shadow")+" rounded-lg text-base p-2 cursor-pointer capitalize"} htmlFor={props.category}>
            <input disabled={props.checked.split("/")[1] === props.category} className="mr-2 hidden" type="radio" id={props.category} name="grade" value={props.category} onClick={() => props.onSend(props.category)}/>
            {props.category}
        </label>
    )
}

export default CategoryFilterButton;