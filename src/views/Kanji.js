import React, {useState, useEffect} from 'react';
import H1 from '../components/H1'
import RadioInput from '../components/RadioInput'
import nihongo from 'nihongo';
import axios from 'axios';
import { isKanji } from 'nihongo/src/analysers';
import { isRomaji, toKatakana } from 'wanakana';
const BoxKanji = React.lazy(() => import('../components/BoxKanji'));

const Kanji = () => {
    const [kanjiList, setKanjiList] = useState([]);
    const [filter, setFilter] = useState("kanji/grade-1");
    const [modal, setModal] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            axios('https://kanjiapi.dev/v1/'+filter)
            .then(response => {
                if (filter.split("/")[0] === "reading") {
                    setKanjiList(response.data.main_kanji.concat(response.data.name_kanji))
                } else if (isKanji(filter.split("/")[1])){
                    setKanjiList([response.data.kanji])
                } else {
                    setKanjiList(response.data)
                }
            })
        }
        fetchData()
    },[filter])
    const changeFilter = (newFilter) => {
        setKanjiList([]);
        if (newFilter === "" ){
            setFilter("kanji/grade-1")
        } else if (isRomaji(newFilter)) {
            setFilter("reading/"+toKatakana(newFilter))
        } else if (isKanji(newFilter)) {
            setFilter("kanji/"+newFilter)
        } else if (newFilter === "grade-1" || newFilter === "grade-2" || newFilter === "grade-3" || newFilter === "grade-4" || newFilter === "grade-5" || newFilter === "grade-6" || newFilter === "grade-8" ) {
            setFilter("kanji/"+newFilter)
        } else if (nihongo.isKana(newFilter)){
            setFilter("reading/"+newFilter)
        }
    }

    return(
        <div className="relative text-center lg:mx-36">
            <H1 span={"漢字"} text={"Kanji"}/>
            <div className="flex py-4 px-1">
                <div className="flex rounded-lg dark:bg-gray-700 shadow">
                    <div className="p-3 rounded-l-lg bg-gray-100 border-r-2 border-gray-300 dark:bg-gray-600 dark:border-gray-500">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"/>
                        </svg>
                    </div>
                    <input className="bg-transparent outline-none py-3 px-6" type="search" name="searchKanji" id="searchKanji" onChange={(e) => changeFilter(e.target.value)} placeholder="Search" />
                </div>
                <button onClick={() => {setModal(true)}} className="flex ml-auto bg-gray-50 dark:bg-gray-600 dark:hover:bg-gray-700 rounded-lg shadow hover:bg-gray-100 text-lg py-3 px-6 cursor-pointer">
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" d="M19.25 4.75H4.75L9.31174 10.4522C9.59544 10.8068 9.75 11.2474 9.75 11.7016V18.25C9.75 18.8023 10.1977 19.25 10.75 19.25H13.25C13.8023 19.25 14.25 18.8023 14.25 18.25V11.7016C14.25 11.2474 14.4046 10.8068 14.6883 10.4522L19.25 4.75Z"></path>
                    </svg>
                    <span className="ml-2">Filter</span>
                </button>
                <div className={(modal ? "flex" : "hidden")+" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-96 w-72 bg-red-500 flex-col ml-auto p-8 "}>
                    <button className="absolute right-2 top-2 bg-blue-600" onClick={() => setModal(false)}>
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" d="M17.25 6.75L6.75 17.25"></path>
                            <path stroke="currentColor" d="M6.75 6.75L17.25 17.25"></path>
                        </svg>
                    </button>

                    <div className="flex flex-col space-y-2">
                        <RadioInput grade="1" checked={filter} onSendGrade={(theGrade) => changeFilter(theGrade)}/>
                        <RadioInput grade="2" checked={filter} onSendGrade={(theGrade) => changeFilter(theGrade)}/>
                        <RadioInput grade="3" checked={filter} onSendGrade={(theGrade) => changeFilter(theGrade)}/>
                        <RadioInput grade="4" checked={filter} onSendGrade={(theGrade) => changeFilter(theGrade)}/>
                        <RadioInput grade="5" checked={filter} onSendGrade={(theGrade) => changeFilter(theGrade)}/>
                        <RadioInput grade="6" checked={filter} onSendGrade={(theGrade) => changeFilter(theGrade)}/>
                        <RadioInput grade="8" checked={filter} onSendGrade={(theGrade) => changeFilter(theGrade)}/>
                    </div>
                </div>
            </div>
            <ul className="grid grid-cols-5 items-center lg:grid-cols-10 px-3 py-4 lg:p-6 mx-1 gap-2 lg:gap-3 rounded-lg lg:space-y-0 bg-gray-200 dark:bg-gray-900 shadow-inner">
                {
                    kanjiList.map((kana, index) =>{
                        return (
                            <BoxKanji key={index} data={kana}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Kanji;