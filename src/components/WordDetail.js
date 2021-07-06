import React, {useEffect} from 'react'
import { toRomaji } from 'wanakana'
import { parseKanji } from 'nihongo';
import Tag from '../components/Tag'

const WordDetail = (props) =>{
    // useEffect(() => {
    //     let wordParse = props.data.japanese[0].word.split("");
    //     let kanjiParse = parseKanji(props.data.japanese[0].word);
    //     console.log(wordParse);
    //     console.log(kanjiParse);
    // }, [props])
    return(
        <div className="flex space-y-3 py-4 border-b-2 border-gray-300 dark:border-gray-600">
            <div className="flex flex-col w-full mr-4">
                <div className="flex-none space-y-2">
                    <div className="flex flex-col space-y-3">
                        <p className="text-xl my-auto text-center">{props.data.japanese[0].reading}</p>
                        <p className="text-4xl font-semibold my-auto text-center">{props.data.japanese[0].word}</p>
                        <p className="text-xl my-auto text-center capitalize">{toRomaji(props.data.japanese[0].reading)}</p>
                    </div>
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
            <div className="flex flex-col flex-none w-9/12">
                {
                    props.data.senses.map((sense,idx) => {
                        return (
                        <div key={idx} className="flex flex-col">
                            <p className="text-gray-500 text-sm capitalize">{sense.parts_of_speech.join(", ")}</p>
                            <p className="text-xl">{(idx+1)+". "+sense.english_definitions.join("; ")}</p>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default WordDetail;