import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Redirect, useLocation } from 'react-router-dom'
import { isKanji } from 'nihongo/src/analysers';
import KanjiListDetail from '../components/KanjiListDetail';
import KanjiWordContainer from '../components/KanjiWordContainer';

const KanjiDetail = () => {
    const location = useLocation().pathname;
    const kanji = location.split("/")[2];
    const [kanjiDetail, setKanjiDetail] = useState([]);
    const [wordsLimit, setWordsLimit] = useState(5);
    const [wordsLength, setWordsLength] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            setKanjiDetail([])
            axios.get('https://kanjiapi.dev/v1/kanji/'+kanji)
            .then(response => {
                setKanjiDetail(response.data)
                window.scrollTo(0, 0)
            })
        }
        if (isKanji(kanji)) {
            fetchData()
        }
    }, [kanji])

    if (!isKanji(kanji)) {
        return <Redirect to="/404"/>
    }
    return(
        <>
        <div className="flex flex-col mx-[20px] lg:mx-[160px] xl:mx-[240px]">
            <div className="flex flex-col lg:flex-row lg:mb-0 lg:space-x-20">
                <div className="flex flex-col mx-auto text-center mr-auto mb-8">
                    <h1 className="text-7xl lg:text-9xl font-semibold mb-6 lg:mt-8 lg:mb-12 text-center">
                        {kanjiDetail.kanji ? kanjiDetail.kanji : "-"}
                    </h1>
                    <span>Heisig Keyword
                        <a href="https://en.wikipedia.org/wiki/Remembering_the_Kanji_and_Remembering_the_Hanzi" className="hover:text-primary hover:cursor-pointer inline-block">
                            <sup>?</sup>
                        </a>
                    </span>
                    <p className="font-black text-xl lg:text-4xl mb-4 capitalize py-3">{kanjiDetail ? kanjiDetail.heisig_en : "One"}</p>
                    <table className="table-auto text-left">
                        <thead>
                            <tr>
                                <th>Grade</th>
                                <th>:</th>
                                <th className="font-normal">{kanjiDetail.grade ? kanjiDetail.grade : "-"}</th>
                            </tr>
                            <tr>
                                <th>JLPT</th>
                                <th>:</th>
                                <th className="font-normal">{kanjiDetail.jlpt ? kanjiDetail.jlpt : "-"}</th>
                            </tr>
                            <tr>
                                <th>Stroke</th>
                                <th>:</th>
                                <th className="font-normal">{kanjiDetail.stroke_count ? kanjiDetail.stroke_count : "-"}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="flex flex-col w-full lg:p-8 lg:ml-10 text-2xl text-center lg:text-left">
                    <div className="flex flex-col space-y-6 mb-12">
                        <KanjiListDetail text="Kun - Reading" datas={kanjiDetail.kun_readings}/>
                        <KanjiListDetail text="On - Reading" datas={kanjiDetail.on_readings}/>
                        <KanjiListDetail text="Meaning" datas={kanjiDetail.meanings}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                    <h2 className="font-bold mb-2 text-3xl text-center">Words</h2>
                    <KanjiWordContainer kanji={kanji} wordsLimit={wordsLimit} sendWordsLength={(wordsLength) => setWordsLength(wordsLength)}/>
                </div>
            <button className={((wordsLimit > wordsLength) || wordsLength === 0 ? "hidden " : "")+"transition-colors mt-12 duration-300 mx-auto border-b-2 border-black dark:border-white hover:border-primary dark:hover:border-primary hover:text-primary hover:cursor-pointer"} onClick={() => {setWordsLimit(wordsLimit+5)}}>More Words</button>
        </div>
        </>
    )
}

export default KanjiDetail;