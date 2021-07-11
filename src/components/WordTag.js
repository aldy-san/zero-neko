import React, {useState, useEffect} from 'react'

const WordTag = (props) =>{
    const [data, setData] = useState("");
    useEffect(() => {
        if (props.data === true) {
            setData("Common Word");
        } else {
            if (props.data ? props.data.slice(0,5) === "jlpt-": "") {
                setData("JLPT N"+props.data.slice(6,7));
            } else if (props.data ? props.data.slice(0,8) === "wanikani": ""){
                setData("Wanikani Level "+props.data.slice(8,9))
            } else{
                setData(props.data)
            }
        }
    }, [props.data])
    return(
        <p className={((data === "" || !data) ? "hidden " : "")+"text-center text-xs rounded-lg py-1 px-3 lg:py-2 mx-2 lg:mx-auto " + ((props.color === "gray") ? "bg-gray-300 dark:bg-gray-600" : "bg-green-300 dark:bg-green-600")}>{data}</p>
    )
}

export default WordTag;