import { useLocation } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import H1 from '../components/H1'
import ContainerWords from "../components/ContainerWords";
import {Helmet, HelmetProvider} from 'react-helmet-async'

const Search = () => {
    const location = useLocation();
    const [words, setWords] = useState();
    const [page, setPage] = useState(1);
    const [data, setData] = useState([]);
    const [checkData, setCheckData] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setData([]);
            setCheckData(true);
            const searchParams = new URLSearchParams(location.search);
            const wordParams = searchParams.get('words');
            setWords(wordParams);
            const proxy = 'https://zeroneko-corsproxy.herokuapp.com/'
            const url = proxy + 'http://jisho.org/api/v1/search/words?keyword=' + wordParams + (page ? '&page=' + page : "");
            const response = await fetch(url);
            const json = await response.json();
            if (json.data.length === 0) {
                setCheckData(false);
            }
            setData(json.data);
            window.scrollTo(0, 0)
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
                        <p className="text-center">Searched for <span className="text-primary capitalize">{words}</span>  <span className={page === 1 ? "hidden " : ""}>page <span className="text-primary">{page}</span></span></p>
                        {/* <p>{!(words[0] === '"' && words[words.length - 1] === '"') ? "You can also try a search for \""+words+'"' : ""}</p> */}
                    </div>
                    <ContainerWords data={data} checkData={checkData}/>
                    <button onClick={() => {setPage(parseInt(page) + 1)}} className={(data.length !== 0 ? "" : "hidden ") +"transition-colors mt-12 duration-300 mx-auto border-b-2 border-black dark:border-white hover:border-primary dark:hover:border-primary hover:text-primary hover:cursor-pointer"} >More Words</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Search;