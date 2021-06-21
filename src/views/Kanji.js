import React, {useState, useEffect} from 'react';
import H1 from '../components/H1'
import RadioInput from '../components/RadioInput'
import nihongo, { isHiragana } from 'nihongo';
import axios from 'axios';
import { isKanji } from 'nihongo/src/analysers';
import { isRomaji, toHiragana, toKatakana } from 'wanakana';
const BoxKanji = React.lazy(() => import('../components/BoxKanji'));

const Kanji = () => {
    const [kanjiList, setKanjiList] = useState([]);
    const [filter, setFilter] = useState("kanji/grade-1");
    const [modal, setModal] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            axios.get('https://kanjiapi.dev/v1/'+filter)
            .then(response => {
                if (filter.split("/")[0] === "reading") {
                    console.log(filter);
                    let hiragana = response.data.main_kanji.concat(response.data.name_kanji);
                    let katakana = null;
                    if (isHiragana(filter.split("/")[1])){
                        axios.get('https://kanjiapi.dev/v1/reading/'+toKatakana(filter.split("/")[1]))
                        .then(response2 => {
                            katakana = response2.data.main_kanji.concat(response2.data.name_kanji);
                            setKanjiList(hiragana.concat(katakana)) ;
                        })
                        .catch (err => {
                            setKanjiList(hiragana) ;
                            console.log("katakana not found");
                        })
                    } else {
                        setKanjiList(hiragana) ;
                    }
                } else if (isKanji(filter.split("/")[1])){
                    setKanjiList([response.data.kanji])
                } else {
                    setKanjiList(response.data)
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
        fetchData()
    },[filter])
    const changeFilter = (newFilter) => {
        setKanjiList([]);
        if (newFilter === "" ){
            setFilter("kanji/grade-1")
        } else if (isKanji(newFilter) || newFilter === "grade-1" || newFilter === "grade-2" || newFilter === "grade-3" || newFilter === "grade-4" || newFilter === "grade-5" || newFilter === "grade-6" || newFilter === "grade-8" ) {
            setFilter("kanji/"+newFilter)
        } else if (isRomaji(newFilter)) {
            setFilter("reading/"+toHiragana(newFilter))
        }  else if (nihongo.isKana(newFilter)){
            console.log(newFilter);
            setFilter("reading/"+newFilter)
        }
        setModal(false);
    }
    // const loading = (
    //     <li >
            
    //     </li>
    // );
    // useEffect(() => {
    //     console.log(kanjiList);
    //     console.log(kanjiList.length === 0);
    // })
    return(
        <div className="relative text-center lg:mx-36">
            <H1 span={"漢字"} text={"Kanji"}/>
            <div className="flex flex-col py-4 px-1 ">
                <span className="text-sm pb-3 pl-1 pt-0 text-left">{'Filter: Searched "'+filter.split("/")[1]+'"'}</span>
                <div className="flex flex-col lg:flex-row border-t-2 pt-4 dark:border-gray-700">
                    <div className="flex mb-3 lg:mb-0">
                        <div className="flex rounded-lg dark:bg-gray-700 shadow">
                            <div className="p-3 rounded-l-lg bg-gray-100 border-r-2 border-gray-300 dark:bg-gray-600 dark:border-gray-500">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"/>
                                </svg>
                            </div>
                            <input className="bg-transparent outline-none py-3 px-6" type="search" name="searchKanji" id="searchKanji" onChange={(e) => changeFilter(e.target.value)} placeholder="Search" />
                        </div>
                    </div>
                    {/* Modal Button */}
                    <div className="relative lg:ml-2 my-auto">
                        <button onClick={() => {modal === true ? setModal(false) : setModal(true)}} className="flex bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 rounded-lg shadow hover:bg-gray-100 text-lg px-4 py-2 cursor-pointer">
                            <span className="text-base">Grade</span>
                            <svg className="transform scale-50 ml-2 my-auto" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <path stroke="currentColor" d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/>
                            </svg>
                        </button>
                        {/* Modal */}
                        <div className={(modal ? "flex" : "hidden")+" absolute top-14 rounded-lg w-40 bg-white shadow-lg dark:bg-gray-700 flex-col ml-auto px-2 py-3"}>
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
                        {/* Modal */}
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