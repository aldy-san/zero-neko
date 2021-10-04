import React, { useState, useEffect, useRef } from 'react';
import { all } from "../data/words/all";
import { toRomaji,isHiragana, isKatakana } from 'wanakana';
import { Stage, Text, Graphics } from '@inlet/react-pixi'
import { TextStyle } from 'pixi.js';
const FallingWords = () => {
    const [words, setWords] = useState([]);
    const [isStarted, setIsStarted] = useState(false);
    const [selectedDifficulty, setDifficulty] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [inputColor, changeInputColor] = useState('');
    const [score, setScore] = useState(0);
    const [chosenAlphabet, setChosenAlphabet] = useState('hiragana');
    const difficulties = [
        {
            id: 0,
            name: 'Beginner',
            speed: 3,
            words: {
                hiragana: all.filter(word => word.expression.length < 4 && isHiragana(word.expression)),
                katakana: all.filter(word => word.expression.length < 4 && isKatakana(word.expression)),
            }
        },{
            id: 1,
            name: 'Easy',
            speed: 8,
            words: {
                hiragana: all.filter(word => word.expression.length < 4 && isHiragana(word.expression)),
                katakana: all.filter(word => word.expression.length < 4 && isKatakana(word.expression)),
            }
        },{
            id: 2,
            name: 'Medium',
            speed: 12,
            words: {
                hiragana: all.filter(word => word.expression.length < 5 && isHiragana(word.expression) && word.expression.length > 3),
                katakana: all.filter(word => word.expression.length < 5 && isKatakana(word.expression) && word.expression.length > 3),
            }
        },{
            id: 3,
            name: 'Hard',
            speed: 16,
            words: {
                hiragana: all.filter(word => word.expression.length > 3 && isHiragana(word.expression)),
                katakana: all.filter(word => word.expression.length > 3 && isKatakana(word.expression)),
            }
        }
    ]

    const [game, setGame] = useState(new Game(difficulties[selectedDifficulty],chosenAlphabet))

    //#TODO: Add more interactivity, maybe spawn new words randomly, or also provide the world translation
    //needs polishing overall
    function handleDifficultyChange(id) {
        setDifficulty(id);
        loadGame(id)
        setCurrentText("")
        changeInputColor('')
        setIsStarted(true)
        setScore(0)
    }

    useEffect(() => {
        window.addEventListener('resize',loadGame)
        return () => window.removeEventListener('resize',loadGame)
    },[])

    function loadGame(difficultyId,alphabet) {
        difficultyId = Number.isFinite(difficultyId) ? difficultyId : selectedDifficulty 
        alphabet = alphabet ? alphabet : chosenAlphabet
        console.log(alphabet)
        let game = new Game(difficulties[difficultyId],alphabet)
        let words = [game.getRandomWord()]
        setGame(game)
        setWords(words)
        setDifficulty(difficultyId)
    }

    const tick = () => {
        if (!isStarted) return
        let w = words.map(word => {
            word.y += game.tick * game.speed
            return word
        })
        words.forEach(word => {
            if (word.y < game.height - 5) return
            setCurrentText("You lost!")
            changeInputColor('#dc2626')
            setIsStarted(false)
        })
        setWords(w)
    }
    function handleAlphabetChange(alphabet) {
        setChosenAlphabet(alphabet)
        loadGame(selectedDifficulty,alphabet)
    }
    function handleInput(e) {
        let value = e.target.value
        setCurrentText(value)
        if (!value.endsWith(" ") || words.length === 0) return
        value = value.trim()
        let correctWord = words.findIndex(word => word.text === value || word.romanization === value)
        if (correctWord > -1) {
            setCurrentText('')
            changeInputColor('#10b981')
            setScore(score + words[correctWord].text.length)
            words.splice(correctWord, 1, game.getRandomWord()) //removes word and adds a new one
            setWords(words)
        } else {
            changeInputColor('#dc2626')
            console.log("wrong word")
        }
    }
    useInterval(tick, 50)

    return (
        <div className="flex flex-col items-center space-y-2">
            <div className='flex flex-wrap gap-1 p-2'>
                {difficulties.map(difficulty => <button
                    id={difficulty.id}
                    className={`${difficulty.id === selectedDifficulty ? "bg-primary" : "bg-gray-200 dark:bg-gray-700"} p-2 px-4 dark:hover:text-white bg-opacity-80 hover:bg-opacity-70 dark:hover:bg-opacity-70 rounded-lg cursor-pointer`}
                    onClick={() => handleDifficultyChange(difficulty.id)}
                >
                    {difficulty.name}
                </button>)}
                <select 
                    className="bg-gray-200 dark:bg-gray-700 p-2 px-4 dark:hover:text-white bg-opacity-80 hover:bg-opacity-70 dark:hover:bg-opacity-70 rounded-lg cursor-pointer"
                    onChange={e => handleAlphabetChange(e.target.value.toLowerCase())}
                >
                    <option>Hiragana</option>
                    <option>Katakana</option>
                </select>
            </div>

            <div className='flex-col space-y-2 '>
                <div className="rounded-lg" style={{ overflow: "hidden" }}>
                    <Stage
                        width={game.width}
                        height={game.height}
                        options={{
                            backgroundColor: 0x374151,
                            autoDensity: true
                        }
                    }>
                        <Text
                            text={`Score: ${score}`}
                            x={10}
                            y={10}
                            style={new TextStyle({
                                align: 'center',
                                fill: 0x73c96b,
                                fontSize: 20
                            })}
                        />

                        {words.map(word => <Text
                            key={word.id}
                            text={word.text}
                            x={word.x}
                            y={word.y}
                            style={new TextStyle({
                                align: 'center',
                                fill: 0xffffff,
                            })}
                        />)}

                        <Graphics
                            x={10}
                            y={game.height - 10}
                            draw={(g) => {
                                g.beginFill(0xdc2626)
                                g.drawRect(0, 0, game.width - 20, 4)
                                g.endFill()
                            }}
                        />
                    </Stage>

                </div>
                <input
                    placeholder="Type here, space to check"
                    className={`outline-none w-full p-2 hover:bg-opacity-70  rounded-lg bg-gray-200 dark:bg-gray-700 placeholder-gray-50`}
                    style={{ backgroundColor: inputColor }}
                    onChange={(e) => handleInput(e)}
                    value={currentText}
                />
            </div>
        </div>
    )
}

class Game {
    constructor(difficulty,alphabet) {
        this.width = window.innerWidth / 2
        this.height = window.innerWidth / 4
        if (window.innerHeight > window.innerWidth) {
            this.height = window.innerHeight / 2
            this.width = window.innerWidth / 1.1
        }
        this.tick = 0.2
        this.speed = difficulty.speed
        this.words = difficulty.words[alphabet].map(word => { return new Word(word, this.width) })
    }
    getRandomWord() {
        let word = this.words[Math.floor(Math.random() * this.words.length)];
        word.id = Math.floor(Math.random() * 1000000)
        return JSON.parse(JSON.stringify(word)) //lose reference
    }
}

class Word {
    constructor(wordData, width) {
        this.text = wordData.expression;
        this.romanization = toRomaji(wordData.expression);
        this.meaning = wordData.meaning;
        this.x = (Math.random() * width / 2) - width / 4 + width / 3;
        this.y = 0
    }
}

function useInterval(callback, delay) {
    const savedCallback = useRef(callback)

    // Remember the latest callback if it changes.
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])

    // Set up the interval.
    useEffect(() => {
        // Don't schedule if no delay is specified.
        if (delay === null) {
            return
        }

        const id = setInterval(() => savedCallback.current(), delay)

        return () => clearInterval(id)
    }, [delay])
}

export default FallingWords;