import { useLocation } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import H2 from '../components/H2'
import WordDetail from "../components/WordDetail";
import {Helmet, HelmetProvider} from 'react-helmet-async'

const Search = () => {
    const location = useLocation();
    const [words, setWords] = useState(1);
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const searchParams = new URLSearchParams(location.search)
            const wordParams = searchParams.get('words');
            setWords(wordParams);
            if (searchParams.get('page')!=null) {
                setPage(searchParams.get('page'))
            }
            console.log("hai");
            const proxy = 'https://cors-anywhere.herokuapp.com/'
            const url = proxy + 'http://jisho.org/api/v1/search/words?keyword=' + wordParams + '&page=' + page;
            const response = await fetch(url);
            const json = await response.json();
            console.log(json.data);
            setData(json.data);
        }
        fetchData();
    },[page, location])
    return(
        <>
        <HelmetProvider>
            <Helmet>
                <title>{"Search - "+ words + " - Zeroneko"}</title>
            </Helmet>
        </HelmetProvider>
        <div className="mx-[20px] lg:mx-[160px] xl:mx-[200px] ">
            <div className="flex">
                <div className="flex flex-col  w-3/4">
                    <H2 text={"Words"}></H2>
                    <div>
                        <p className="text-center">Searched for {words}</p>
                        {/* <p>{!(words[0] === '"' && words[words.length - 1] === '"') ? "You can also try a search for \""+words+'"' : ""}</p> */}
                    </div>
                    <div className="flex justify-center flex-col space-y-3 ">
                        {
                            data.map((data, idx) => {
                                return <WordDetail key={idx} data={data}/>
                            })
                        }
                    </div>
                    <button>More Words</button>
                </div>
                <div className=" w-1/4">
                    <H2 text={"Kanji"}></H2>
                </div>
            </div>
        </div>
        </>
    )
}

export default Search;