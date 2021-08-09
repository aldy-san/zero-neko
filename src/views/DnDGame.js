import React, {useState, useEffect} from 'react';
import {kana} from "../data/kana";
import H2 from "../components/H2";
import CategoryRadioButton from "../components/CategoryRadioButton";
import DropsContainer from "../components/DropsContainer";
import DragsContainer from "../components/DragsContainer";
import correctURL from "../assets/sfx/correct.wav";
import wrongURL from "../assets/sfx/wrong.wav";
import winURL from "../assets/sfx/win.wav";

const DnDGame = () => {
    const [dragItem, setDragItem] = useState(null);
    const [from, setFrom] = useState("Hiragana");
    const [to, setTo] = useState("Romaji");
    const [game, setGame] = useState(false);
    const [correct, setCorrect] = useState([]);
    const [time, setTime] = useState(0);
    const [timeCount, setTimeCount] = useState(false);
    //audio
    const [correctAudio] = useState(new Audio(correctURL));
    const [wrongAudio] = useState(new Audio(wrongURL));
    const [winAudio] = useState(new Audio(winURL));

    const onDrop = (item) => {
        // console.log("dragItem");
        // console.log(dragItem);
        // console.log("dropItem");
        // console.log(item);
        if (item === dragItem) {
            // console.log("sama");
            correctAudio.play();
            correctAudio.currentTime = 0;
            setCorrect(correct.concat([dragItem]))
        } else{
            // console.log("ga sama");
            wrongAudio.play();
            wrongAudio.currentTime = 0;
            setDragItem(null)
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            timeCount && setTime(t => t + 1);
        }, 1000);
        if (kana.length === correct.length) {
            winAudio.play();
            winAudio.currentTime = 0;
            setTimeCount(false);
        }

        return () => {
            clearInterval(interval);
        };
    }, [timeCount, correct, winAudio])

    const convertTime = (num) => {
        let res = "";
        let minutes = (Math.floor(num / 60));
        let sec = (num % 60);
        minutes = minutes < 10 ? "0"+minutes : minutes
        sec = sec < 10 ? "0"+sec : sec
        res = minutes + " : " + sec;
        return res;
    }
    const handleStart = () => {
        setGame(true); 
        setCorrect([]); 
        setTimeCount(true)
    }
    const handleBack = () => {
        setGame(false); 
        setTime(0);
    }
    const handleReset = () => {
        setTime(0); 
        setCorrect([]); 
        setTimeCount(true)
    }
    return(
        <div className="flex flex-col lg:mx-20 py-4 lg:p-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-center">Pairing Kana</h1>
            <div className={(game ? "hidden" : "flex") + " rounded-xl  border-gray-800 dark:border-gray-500 py-12 flex-col mx-auto"}>
                <span className="text-xl lg:text-3xl text-center font-black mb-3">Setting</span>
                <div className="flex space-x-8 py-3 lg:p-8">
                    <div className="flex flex-col space-y-4">
                        <H2 text="From"/>
                        <CategoryRadioButton name={"from"} value={"Romaji"} checked={from} onSend={(x) => setFrom(x)}/>
                        <CategoryRadioButton name={"from"} value={"Hiragana"} checked={from} onSend={(x) => setFrom(x)}/>
                        <CategoryRadioButton name={"from"} value={"Katakana"} checked={from} onSend={(x) => setFrom(x)}/>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <H2 text="To"/>
                        <CategoryRadioButton name={"to"} value={"Romaji"} checked={to} onSend={(x) => setTo(x)}/>
                        <CategoryRadioButton name={"to"} value={"Hiragana"} checked={to} onSend={(x) => setTo(x)}/>
                        <CategoryRadioButton name={"to"} value={"Katakana"} checked={to} onSend={(x) => setTo(x)}/>
                    </div>
                </div>
                <div className="flex">
                    <button onClick={() => handleStart()} 
                    className="flex transition-all delay-75 px-6 py-4 lg:px-8 mt-4 rounded-full mx-auto  bg-gray-300 text-gray-600 dark:text-gray-100 dark:hover:text-white hover:bg-primary hover:text-white dark:bg-gray-700 dark:bg-opacity-80 dark:hover:bg-primary text-lg lg:text-3xl">
                        <span className="mr-2">Start Game</span>
                        <div className=" my-auto">
                            <svg  width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" d="M13.75 6.75L19.25 12L13.75 17.25"></path>
                                <path stroke="currentColor" d="M19 12H4.75"></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
            <div className={(game ? "flex" : "hidden") + " flex-col space-y-8 px-4 py-8 rounded-md select-none mt-4"}>
                <div className="flex lg:mx-6">
                    <button onClick={() => handleBack()} className="transtion duration-150 space-x-2 mr-2 bg-gray-200 dark:bg-gray-700 dark:hover:bg-primary hover:bg-primary hover:text-white px-5 py-2 lg:px-7 lg:py-3 rounded-full text-base flex">
                        <div className="my-auto">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" d="M10.25 6.75L4.75 12L10.25 17.25"></path>
                                <path stroke="currentColor" d="M19.25 12H5"></path>
                            </svg>
                        </div>
                        <span className="my-auto">Back</span>
                    </button>
                    <button onClick={() => handleReset()} className="transtion duration-150 space-x-2 bg-gray-200 dark:bg-gray-700 dark:hover:bg-indigo-600 hover:bg-indigo-400 hover:text-white px-5 py-2 lg:px-7 lg:py-3 rounded-full text-base flex">
                        <span className="my-auto">Reset</span>
                    </button>
                    <div className="flex space-x-2 bg-green-200 dark:bg-green-600 px-5 py-2 lg:px-7 lg:py-3 rounded-full  lg:text-lg ml-auto">
                        <div className="my-auto">
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="7.25" stroke="currentColor" ></circle>
                                <path stroke="currentColor"  d="M12 8V12L14 14"></path>
                            </svg>
                        </div>
                        <span className="my-auto">{convertTime(time)}</span>
                    </div>
                </div>
                <div className="flex flex-col space-y-8 lg:mx-6">
                    <DropsContainer data={kana} category={to} correct={correct} onSetDropItem={(item) => onDrop(item)}/>
                    <DragsContainer data={kana} category={from} correct={correct} dragItem={dragItem} onSetDragItem={(item) => setDragItem(item)}/>
                </div>
            </div>
        </div>
    )
}

export default DnDGame;