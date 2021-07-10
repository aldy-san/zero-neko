import axios from 'axios';
import { isKanji } from 'nihongo/src/analysers';
import React, { useEffect, useState } from 'react'
import KanjiWordsList from './KanjiWordsList';

const KanjiWordContainer = (props) =>{
    const [kanjiWords, setKanjiWords] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            axios.get('https://kanjiapi.dev/v1/words/'+props.kanji)
            .then(response => {
                props.sendWordsLength(response.data.length)
                setKanjiWords(response.data)
            })
            .catch(err => {
                console.log(err);
            })
        }
        if (isKanji(props.kanji)) {
            fetchData()
        }
    }, [props])
    if (kanjiWords.length === 0) {
        return (
            <div className="space-y-4">
                <div className="animate-pulse h-12 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                <div className="animate-pulse h-12 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                <div className="animate-pulse h-12 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                <div className="animate-pulse h-12 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
                <div className="animate-pulse h-12 bg-gray-300 dark:bg-gray-600 rounded-lg"></div>
            </div>
        )
    }
    return(
        <div className="flex flex-col gap-2 flex-wrap justify-center lg:justify-start">
            {
                kanjiWords.slice(0,props.wordsLimit).map((datas, index) => {
                    return <KanjiWordsList key={index} datas={datas}/>
                })
            }
        </div>
    )
}

export default KanjiWordContainer;