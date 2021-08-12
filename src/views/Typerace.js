import React, { useState, useEffect, useCallback, useRef } from 'react';
import { all } from "../data/words/all";
import { isKana, toRomaji } from 'wanakana';
const Typerace = () => {
    // const [expression, setExpression] = useState("");
    const [word, setWord] = useState("");
    const [meaning, setMeaning] = useState("");
    const [time, setTime] = useState(60);
    const [game, setGame] = useState(false);
    const [result, setResult] = useState(false);
    const [score, setScore] = useState(0);
    const [lastScore, setLastScore] = useState(0);
    let input = useRef(null)
    
    const getWord = useCallback(() => {
        let tempWord = all[Math.floor(Math.random() * all.length)]; //
        // console.log(tempWord);
        if (!isKana(tempWord.reading)) {
            getWord();
        } else {
            setMeaning(tempWord.meaning);
            setWord(tempWord.reading);
            // setExpression(tempWord.expression)
        }
    }, [])
    useEffect(() => {
        const get = () => {
            getWord();
        }
        get();
    }, [getWord]);
    useEffect(() => {
        const interval = setInterval(() => {
            // console.log(result);
            if (game) {
                if (time > 0) {
                    setTime(t => t - 1);
                } else {
                    setResult(true);
                    if (score > 0) {
                        setLastScore(score);
                    }
                    setScore(0);
                }
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [game, time, score])
    const convertTime = (num) => {
        let res = "";
        let minutes = (Math.floor(num / 60));
        let sec = (num % 60);
        minutes = minutes < 10 ? "0"+minutes : minutes
        sec = sec < 10 ? "0"+sec : sec
        res = minutes + " : " + sec;
        return res;
    }

    const handleChange = (e) => {
        setGame(true);
        if (toRomaji(word) === e.target.value){
            getWord();
            setScore(score+(word.split("").length*20));
            e.target.value = '';
        }
    }
    const handleReset = () => {
        setGame(false);
        setTime(60);
        setResult(false);
        input.value = '';
    }
    const handlePass = () => {
        getWord();
        input.value = '';
    }
    return(
        <div className="flex flex-col mx-8 lg:mx-96 py-4 lg:p-8 space-y-8">
            <div className="flex justify-between">
                <div className="flex flex-col text-center bg-yellow-100 dark:bg-yellow-700 px-3 py-1 lg:px-5 lg:py-2 rounded-full text-base">
                    <span className="my-auto">Score: {score}</span>
                </div>
                <div className="flex space-x-2 bg-green-200 dark:bg-green-700 px-3 py-1 lg:px-5 lg:py-2 rounded-full text-base">
                    <div className="my-auto">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="7.25" stroke="currentColor" ></circle>
                            <path stroke="currentColor"  d="M12 8V12L14 14"></path>
                        </svg>
                    </div>
                    <span className="my-auto">{convertTime(time)}</span>
                </div>
            </div>
            <div className="flex flex-col mx-auto text-center space-y-2 lg:space-y-8 mb-4">
                <span className="text-4xl lg:text-6xl font-bold">{word}</span>
                <span className="text-primary text-base capitalize">{meaning}</span>
            </div>
            <input onChange={(e) => handleChange(e)} ref={node => (input = node)} autoComplete="off" disabled={result === true ? true : false} className="mx-auto transition-all duration-150 border-2 border-gray-200 dark:border-gray-500 focus:border-primary dark:focus:border-primary px-5 py-2 rounded-full focus:outline-none dark:bg-gray-700 text-center" type="text" name="inputWord" id="inputWord" placeholder={result ? "Please Reset" :"Type the answer"}/>
            <div className="flex mx-auto space-x-2">
                <button className=" mx-auto bg-primary hover:bg-opacity-70 bg-opacity-80 text-white focus:outline-none focus:ring-2 focus:ring-primary px-5 py-3 rounded-full" onClick={() => handlePass()}>Pass</button>
                <button className=" mx-auto bg-gray-200 dark:bg-gray-700 dark:hover:bg-indigo-600 hover:bg-indigo-400 hover:text-white text-white focus:outline-none focus:ring-2 focus:ring-primary px-5 py-3 rounded-full" onClick={() => handleReset()}>Reset</button>
            </div>
            <span className={(!result ? "hidden " : "")+"text-center"}>Congratulations, your score is {lastScore}</span>
        </div>
    )
}

export default Typerace;