import React, { useState, useEffect, useCallback, useRef } from 'react';
import n1csv from '../data/words/n1.csv';
import { isKana, toRomaji } from 'wanakana';
const Typerace = () => {
    const [word, setWord] = useState("");
    const [meaning, setMeaning] = useState("");
    const [time, setTime] = useState(60);
    const [game, setGame] = useState(false);
    const [result, setResult] = useState(false);
    const [score, setScore] = useState(0);
    const [lastScore, setLastScore] = useState(0);
    let input = useRef(null)
    
    const getWord = useCallback(() => {
        fetch(n1csv)
        .then(rs => rs.text())
        .then(text => {
            let tempWord = text.split('\r\n')[Math.floor(Math.random() * text.split('\n').length)]; //
            // console.log(tempWord);
            // console.log(isKana("～まる"));
            if (!isKana(tempWord.split(',')[1])) {
                getWord();
            } else {
                if (tempWord.split(',')[2][0] === '"') {
                    setMeaning(tempWord.split('"')[1]);
                } else {
                    setMeaning(tempWord.split(',')[2])
                }
                setWord(tempWord.split(',')[1]);
            }
        });
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
                    setLastScore(score);
                    setScore(0);
                }
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [game, time, result])
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
        <div className="flex flex-col lg:mx-40 py-4 lg:p-8 space-y-4">
            <div className="flex mx-20">
                <div className="flex flex-col text-center bg-yellow-100 dark:bg-yellow-700 lg:px-5 lg:py-2 rounded-full text-lg">
                    <span className="my-auto">Score: {score}</span>
                </div>
                <button onClick={() => handleReset()} className="transtion flex duration-150 bg-gray-200 dark:bg-gray-700 dark:hover:bg-indigo-600 hover:bg-indigo-400 hover:text-white px-5 py-2 lg:px-7 lg:py-3 rounded-full text-base ml-4 mr-auto focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <span className="my-auto">Reset</span>
                </button>
                <div className="flex space-x-2 bg-green-200 dark:bg-green-700 lg:px-5 lg:py-2 rounded-full lg:text-base">
                    <div className="my-auto">
                        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="7.25" stroke="currentColor" ></circle>
                            <path stroke="currentColor"  d="M12 8V12L14 14"></path>
                        </svg>
                    </div>
                    <span className="my-auto">{convertTime(time)}</span>
                </div>
            </div>
            <div className="flex flex-col mx-auto text-center space-y-8 mb-4">
                <span className="text-6xl font-bold">{word}</span>
                <span className="text-primary text-base">{meaning}</span>
            </div>
            <input onChange={(e) => handleChange(e)} ref={node => (input = node)} autoComplete="off" disabled={result === true ? true : false} className="mx-auto transition-all duration-150 border-2 border-gray-200 dark:border-gray-500 focus:border-primary dark:focus:border-primary px-5 py-2 rounded-full focus:outline-none dark:bg-gray-700 text-center" type="text" name="inputWord" id="inputWord" placeholder={result ? "Please Reset" :"Type the answer"}/>
            <button className="block mx-auto bg-primary hover:bg-opacity-70 bg-opacity-80 text-white focus:outline-none focus:ring-2 focus:ring-primary p-3 rounded-lg" onClick={() => handlePass()}>Pass</button>
            <span className={(!result ? "hidden " : "")+"text-center"}>Congratulations, your score is {lastScore}</span>
        </div>
    )
}

export default Typerace;