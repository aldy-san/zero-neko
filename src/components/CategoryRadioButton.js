import React from 'react'

const CategoryFilterButton = (props) =>{
    return(
        <label className={(props.checked === props.value ? "bg-green-400 text-white dark:bg-green-400" : "text-gray-600 dark:text-gray-300 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600") + " filter px-5 py-3 lg:px-7 lg:py-4 rounded-lg text-lg lg:text-3xl text-center cursor-pointer "} htmlFor={props.name+props.value}>
            <input checked={props.checked === props.value}
            onChange={() => props.onSend(props.value)}
            className="mr-4 hidden"
            type="radio"
            value={props.value}
            id={props.name+props.value}
            name={props.name}/>
            {props.value}
        </label>
    )
}

export default CategoryFilterButton;