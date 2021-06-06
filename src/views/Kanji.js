import React, {useState, useEffect} from 'react';
import BoxKanji from "../components/BoxKanji";
import H1 from '../components/H1'

const Kanji = () => {
    const [kanjiList, setKanjiList] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch('https://kanjiapi.dev/v1/kanji/grade-1');
                const body = await result.json();
                setKanjiList(body);
            } catch(err) {
              // error handling code
            } 
        }
        fetchData()
    },[])
    // useEffect(() => {
    //     console.log(kanjiList)
    // }, [kanjiList])
    return(
        <div className="text-center lg:mx-36">
            <H1 span={"漢字"} text={"Kanji"}/>
            <div>
                {/* <input type="search" name="" id="" placeholder="Search" /> */}
            </div>
            <ul className="grid grid-cols-5 items-center lg:grid-cols-10 px-3 py-4 lg:p-6 mx-1 gap-2 lg:gap-3 rounded-lg lg:space-y-0 bg-gray-200 dark:bg-gray-900 shadow-inner">
                {
                    kanjiList.map((kana, index) =>{
                        return <BoxKanji key={index} data={kana}/>
                    })
                }
            </ul>
        </div>
    )
}

export default Kanji;