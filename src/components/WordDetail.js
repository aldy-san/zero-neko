import React from 'react'
import { toRomaji } from 'wanakana'
// import { parseKanji } from 'nihongo';
import Tag from '../components/Tag'

const WordDetail = (props) =>{
    // useEffect(() => {
    //     let wordParse = props.data.japanese[0].word.split("");
    //     let kanjiParse = parseKanji(props.data.japanese[0].word);
    //     console.log(wordParse);
    //     console.log(kanjiParse);
    // }, [props])
    return(
        <div className="flex flex-col lg:flex-row py-4 border-b-2 border-gray-300 dark:border-gray-600">
            <div className="flex flex-col w-full mr-4">
                <div className="flex-none space-y-2">
                    <div className="flex flex-col space-y-3">
                        <p className={(props.data.japanese[0].word ? "text-xl" : "text-4xl font-semibold")+" my-auto text-center"}>{props.data.japanese[0].reading}</p>
                        <p className={(props.data.japanese[0].word ? "" : "hidden ")+"text-4xl font-semibold my-auto text-center"}>{props.data.japanese[0].word}</p>
                        <p className="text-xl my-auto text-center capitalize">{toRomaji(props.data.japanese[0].reading)}</p>
                    </div>
                    <div className="flex lg:flex-col lg:space-y-3 py-2 justify-center">
                        <Tag data={props.data.is_common} color={"green"}/>
                        {
                            props.data.tags.map((tags,idx) => {
                                return <Tag key={idx} data={tags} color={"gray"}/>
                            })
                        }
                        {
                            props.data.jlpt.map((tags,idx) => {
                                return <Tag key={idx} data={tags} color={"gray"}/>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col flex-none w-9/12 space-y-2">
                <div className="flex flex-col space-y-4">
                    {
                        props.data.senses.map((sense,idx) => {
                            return (
                            <div key={idx} className="flex flex-col">
                                <p className="text-gray-600 dark:text-gray-400 text-sm capitalize">{sense.parts_of_speech.join(", ")}</p>
                                <p className="text-xl">
                                    <span className="text-gray-600 dark:text-gray-300">{(idx+1)}. </span>
                                    {sense.english_definitions.join("; ")}
                                    <span className="text-base text-gray-700 dark:text-gray-300 block">{sense.tags}</span>
                                </p>
                            </div>
                            )
                        })
                    }
                </div>
                <div className="flex flex-col">
                    <span className={(props.data.japanese.length > 1 ? "" : "hidden ")+"flex dark:text-gray-200 text-sm my-2"}>Other forms</span>
                    <div className="flex flex-wrap gap-2">
                        {
                            props.data.japanese.slice(1).map((jpn, idx) => {
                                return <span key={idx}>{jpn.word}『{jpn.reading}』</span>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WordDetail;