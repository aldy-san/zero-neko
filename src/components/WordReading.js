import React from 'react'
import { Link } from 'react-router-dom'
import { isKanji, toRomaji } from 'wanakana'

const WordReading = (props) =>{
    return(
        <>
        <p className={(props.word ? "text-xl" : "text-4xl font-semibold")+" my-auto text-center"}>{props.reading}</p>
        <p className={(props.word ? "" : "hidden ")+"text-5xl font-semibold my-auto text-center"}>
            <span className="space-x-2 whitespace-nowrap">
            {
                props.word.split("").map((kana, idx) => {
                    if (isKanji(kana)) {
                        return <Link key={idx} to={"/kanji/"+kana} className={isKanji(kana) ? "transition-all duration-150 border-dashed border-b-2 border-current hover:text-6xl hover:border-primary hover:text-primary" : ""}>{kana}</Link>;
                    }
                    return <span key={idx}>{kana}</span>;
                })
            }
            </span>
        </p>
        <p className="text-xl my-auto text-center capitalize">{toRomaji(props.reading)}</p>
        </>
    )
}

export default WordReading;