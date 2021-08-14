import React, {useState, useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'

const DropBox = (props) =>{
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const [kana, setKana] = useState();
    useEffect(() => {
        if (props.category === "Hiragana") {
            setKana(props.kana.hiragana) 
        } else if (props.category === "Katakana") {
            setKana(props.kana.katakana)
        } else if (props.category === "Romaji") {
            setKana(props.kana.romaji)
        }
    }, [kana, props])
    
    return(
        <li 
        onClick={() => props.correct ? false : props.onSetDropItem(props.kana)}
        onDragOver={(e) => isTabletOrMobile ? false : (props.correct ? false : e.preventDefault())} 
        onDrop={() => props.correct ? false : props.onSetDropItem(props.kana)} 
        className={(props.correct ? "border-green-400" : "border-gray-700 dark:border-gray-500")+" text-center font-bold border-2 rounded-md lg:text-2xl px-1 py-2 lg:py-4 cursor-pointer " + (props.kana.start && "col-start-"+props.kana.start+" lg:col-start-auto lg:row-start-"+props.kana.start)}>
            <span>{kana}</span>
        </li>

    )
}

export default DropBox;