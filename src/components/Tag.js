import React, {useState, useEffect} from 'react'

const Tag = (props) =>{
    const [data, setdata] = useState("");
    useEffect(() => {
        if (typeof(props.data) != "boolean") {
            setdata(props.data);
        } else {
            if (props.data === true) {
                setdata("Common Word")
            } else {
            }
        }
    }, [props.data])
    return(
        <p className={(data === "" ? "hidden " : "")+"text-center text-xs  rounded-lg mx-2 md:mx-8 my-4 py-1 " + ((props.color === "gray") ? "bg-gray-300 dark:bg-gray-600" : "bg-green-300 dark:bg-green-600")}>{data}</p>
    )
}

export default Tag;