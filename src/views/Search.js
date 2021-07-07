import { useLocation } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import H1 from '../components/H1'
import ContainerWords from "../components/ContainerWords";
import {Helmet, HelmetProvider} from 'react-helmet-async'

const Search = () => {
    const location = useLocation();
    const [words, setWords] = useState(1);
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [checkData, setCheckData] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            setData([])
            setCheckData(true);
            const searchParams = new URLSearchParams(location.search)
            const wordParams = searchParams.get('words');
            setWords(wordParams);
            if (searchParams.get('page')!=null) {
                setPage(searchParams.get('page'))
            }
            const proxy = 'https://zeroneko-corsproxy.herokuapp.com/'
            const url = proxy + 'http://jisho.org/api/v1/search/words?keyword=' + wordParams + '&page=' + page;
            const response = await fetch(url);
            const json = await response.json();
            if (json.data.length === 0) {
                setCheckData(false);
            }
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
        <div className="mx-[20px] lg:mx-[160px] xl:mx-[200px]">
            <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col w-full">
                    <div className=" w-full">
                        <H1 span={"言"} text={"Words"}></H1>
                        <p className="text-center">Searched for <span className="text-primary capitalize">{words}</span></p>
                        {/* <p>{!(words[0] === '"' && words[words.length - 1] === '"') ? "You can also try a search for \""+words+'"' : ""}</p> */}
                    </div>
                    <ContainerWords data={data} checkData={checkData}/>
                </div>
                {/* <div className="lg:w-1/4">
                    <H2 text={"Kanji"}></H2>
                </div> */}
            </div>
        </div>
        </>
    )
}

export default Search;