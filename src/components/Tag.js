import React, {useState, useEffect} from 'react'

const Tag = (props) =>{
    const [data, setdata] = useState("");
    useEffect(() => {
        if (typeof(props.data) != "boolean") {
            setdata(props.data);
        } else {
            if (props.data === true) {
                setdata("Common Word")
            } 
        }
    }, [props.data])
    return(
        <p className={((data === "" || !data) ? "hidden " : "")+"text-center text-xs  rounded-lg mx-2 md:mx-16 p-1 lg:py-2 " + ((props.color === "gray") ? "bg-gray-300 dark:bg-gray-600 uppercase" : "bg-green-300 dark:bg-green-600")}>{data}</p>
    )
}

export default Tag;