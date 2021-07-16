import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { isKanji, toRomaji } from 'wanakana'

const WordReading = (props) =>{
    const [word, setWord] = useState("")
    useEffect(() => {
        if (props.word) {
            setWord(props.word);
        }
    }, [props])
    return(
        <>
        <p className={(props.word ? "text-xl" : "text-4xl font-semibold")+" my-auto text-center"+(word.length > 5 ? " lg:text-left" : "")}>{props.reading}</p>
        <p className={(props.word ? "" : "hidden ")+"font-semibold my-auto text-center"}>
            <span className={"flex flex-wrap text-3xl lg:text-4xl lg:flex-nowrap gap-y-6 gap-x-2 justify-center"+(word.length > 5 ? " lg:justify-start" : "")}>
            {
                
                word.split("").map((kana, idx) => {
                    if (isKanji(kana)) {
                        return <Link 
                                key={idx} 
                                to={"/kanji/"+kana} 
                                className={isKanji(kana) ? "transition-all duration-150 border-dashed border-b-2 border-current   hover:text-4xl lg:hover:text-5xl hover:border-primary hover:text-primary" : ""}>{kana}</Link>;
                    }
                    return <span key={idx}>{kana}</span>;
                })
            }
            </span>
        </p>
        <p className={"text-lg my-auto text-center capitalize"+(word.length > 5 ? " lg:text-left" : "")}>{toRomaji(props.reading)}</p>
        </>
    )
}

export default WordReading;