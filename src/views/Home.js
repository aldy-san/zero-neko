import React, {useState, useEffect} from 'react';
import illus from '../assets/illus.svg';
import searchIllus from '../assets/searchIllus.svg';
import {Fade} from 'react-reveal';
import { Link } from 'react-router-dom';

const Home = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
    const [supportsPWA, setSupportsPWA] = useState(false);
    const [promptInstall, setPromptInstall] = useState(null);

    useEffect(() => {
        const handler = e => {
            e.preventDefault();
            console.log("we are being triggered :D");
            setSupportsPWA(true);
            setPromptInstall(e);
        };
        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("transitionend", handler);
    }, []);

    const onClick = evt => {
        evt.preventDefault();
        if (!promptInstall) {
            return;
        }
        promptInstall.prompt();
    };
    if (!supportsPWA) {
        return null;
    }
    return(
        <div className="mx-1 lg:mx-32 lg:mr-52">
            <Fade bottom>
                <section className="flex flex-col lg:flex-row lg:mt-12 p-2 lg:p-8 rounded-lg">
                        <div className="flex mx-auto mb-6 lg:mb-0 lg:order-last w-11/12 lg:w-2/5">
                            <img className="mx-auto" src={illus} alt="illustration" width="400"/>
                        </div>
                        <div className="flex flex-col content-start text-center lg:text-left w-11/12 lg:w-3/5 mx-auto">
                            <h1 className="font-black font-head text-3xl lg:text-4xl xl:text-7xl leading-relaxed xl:leading-snug  uppercase">Learn <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-red-800 dark:to-red-300">Japanese</span> Languange.</h1>
                            <p className="text-base lg:text-2xl mt-4 mb-6 lg:mt-8 dark:text-gray-200 w-10/12 lg:leading-normal mx-auto lg:mx-0">Zeroneko is a website that provide dictionary and game to help everyone learn Japanese language.</p>
                            <button onClick={onClick} className="flex transition-colors duration-150 mx-auto px-4 py-2 lg:px-6 lg:py-3 lg:ml-0 lg:mr-auto space-x-4 bg-green-400 dark:bg-green-600 hover:bg-green-500 rounded-lg text-white">
                                <svg className="transform scale-125 lg:scale-150 my-auto" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"/>
                                    <path stroke="currentColor" d="M12 14.25L12 4.75"/>
                                    <path stroke="currentColor" d="M8.75 10.75L12 14.25L15.25 10.75"/>
                                </svg>
                                <span className="text-lg lg:text-2xl">Install App</span>
                            </button>
                        </div>
                </section>
            </Fade>
            <Fade bottom>
                <section className="flex flex-col m-8">
                    <h1 className="animate-bounce block text-4xl text-center font-black font-head uppercase my-4">How to search?</h1>
                    <hr className="h-1 w-48 bg-primary border-none mx-auto mb-9 lg:mb-12 " />
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="mx-auto order-last lg:order-first">
                            <img src={searchIllus} alt="" width="300"/>
                        </div>
                        <div className="mx-auto text-lg my-auto space-y-4">
                            <p>Here a few example to search words or kanji.</p>
                            <ul className="list-disc list-inside space-y-1">
                                <li>Search by English: <Link className="border-dashed border-b-2 border-current hover:text-primary hover:border-primary" to='/search?words="food"'>"food"</Link></li>
                                <li>Search by Romaji: <Link className="border-dashed border-b-2 border-current hover:text-primary hover:border-primary" to="/search?words=ai">ai</Link></li>
                                <li>Search by Kana: <Link className="border-dashed border-b-2 border-current hover:text-primary hover:border-primary" to="/search?words=あお">あお</Link></li>
                                <li>Search by Kanji: <Link className="border-dashed border-b-2 border-current hover:text-primary hover:border-primary" to="/search?words=犬">犬</Link></li>
                                <li>Search by Tag: <Link className="border-dashed border-b-2 border-current hover:text-primary hover:border-primary" to="/search?words=%23jlpt-n3 %23adjective">#jlpt-n3 #adjective</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </Fade>
        </div>
    )
}

export default Home;