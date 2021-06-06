import React, {useState, useEffect} from 'react'

const BoxKanji = (props) =>{
    const [kanji, setKanji] = useState();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch('https://kanjiapi.dev/v1/kanji/'+props.data);
                const body = await result.json();
                setKanji(body);
            } catch(err) {
              console.error();
            } 
        }
        fetchData()
    },[props.data]);
    // useEffect(() => {
    //     console.log(kanji)
    // }, [kanji])
    return(
        <li className="box-border transition-all delay-75 col-span-1 rounded-md bg-gray-50 dark:bg-gray-800 p-4 shadow-md dark:shadow-mdWhite dark:hover:shadow-none hover:shadow-none">
            <p className="text-xl lg:text-3xl font-black mb-2">{kanji ? kanji.kanji : ""}</p>
            <p className="text-primary capitalize">{kanji ? (kanji.meanings[0].length > 9 ? kanji.meanings[0].substr(0, 9-3).trim() + '...' : kanji.meanings[0]) : ""}</p>
        </li>
    )
}

export default BoxKanji;