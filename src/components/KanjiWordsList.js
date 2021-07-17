import React from 'react'
import { isKanji, toRomaji } from 'wanakana'
import KanjiWordMeanings from './KanjiWordMeanings'
import { Link } from 'react-router-dom'

const KanjiWordsList = (props) =>{
    return(
        <div className="flex flex-col lg:flex-row border-b border-gray-400 py-4 space-y-4 lg:space-y-0">
            <p className="text-2xl lg:text-4xl my-auto mr-auto font-semibold">
                <span className="flex flex-wrap gap-2">
                    {
                        props.datas.variants[0].written.split("").map((kana, idx) => {
                            if (isKanji(kana)) {
                                return <Link key={idx} to={"/kanji/"+kana} className={isKanji(kana) ? "transition-all duration-150 border-dashed border-b-2 border-current hover:border-primary hover:text-3xl lg:hover:text-5xl hover:text-primary" : ""}>{kana}</Link>;
                            }
                            return <span key={idx}>{kana}</span>;
                        })
                    }
                </span>
            </p>
            <div  className="lg:text-right w-36 lg:w-96">
                <div className="mb-3">
                    <p className="text-xs lg:text-sm text-primary mb-2">{props.datas.variants[0].pronounced ? toRomaji(props.datas.variants[0].pronounced) :""}</p>
                    <p className="text-base lg:text-2xl font-semibold">{props.datas.variants[0].pronounced ? props.datas.variants[0].pronounced :""}</p>
                </div>
                <div className="flex flex-col">
                {
                    props.datas.meanings.map((meaning, index) => {
                        return <KanjiWordMeanings key={index} num={props.datas.meanings.length > 1 ? index : -1} datas={meaning}/>
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default KanjiWordsList;