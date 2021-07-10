import React, {useState, useRef} from 'react'
import { Link } from 'react-router-dom';

const SearchBox = () =>{
    const [search, setSearch] = useState("")
    let btn = useRef(null)
    const handleKeypress = e => {
      if (e.keyCode === 13) {
        btn.click();
      }
    };
    return(
        <div className="transition-all duration-200 flex rounded-full bg-gray-100 dark:bg-gray-700 shadow focus-within:ring-2 focus-within:ring-primary w-full xl:w-96">
            <input autoComplete="off" onKeyDown={handleKeypress} onChange={(e) => setSearch(e.target.value)} className="bg-transparent outline-none px-6 w-full" type="search" name="words" id="words" placeholder="English, Japanese, Kanji, Words" />
            <Link ref={node => (btn = node)} to={search === "" ? "" : "/search?words="+encodeURIComponent(search)} className="transition-color duration-150 p-3 ml-auto  rounded-r-full bg-gray-200 dark:bg-gray-600 dark:border-gray-500 hover:text-white hover:bg-primary dark:hover:bg-primary ">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"/>
                </svg>
            </Link>
        </div>
    )
}

export default SearchBox;