import { useLocation } from "react-router-dom";
import React, {useEffect, useState} from 'react';
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
            const proxy = 'https://cors-anywhere.herokuapp.com/'
            const url = proxy + 'http://jisho.org/api/v1/search/words?keyword=' + wordParams + '&page=' + page;
            const response = await fetch(url);
            const json = await response.json();
            setData(json.data);
        }
        fetchData();
    },[page, location])
    return(
        <div className="mx-[20px] lg:mx-[160px] xl:mx-[240px]">
            <p>Searched for {words}</p>
            <p>{!(words[0] === '"' && words[words.length - 1] === '"') ? "You can also try a search for \""+words+'"' : ""}</p>
            
            <div className="flex justify-center flex-col space-y-3 ">
                {
                    data.map((data, idx) => {
                        return <p key={idx}>{JSON.stringify(data)}</p>
                    })
                }
            </div>
        </div>
    )
}

export default Search;