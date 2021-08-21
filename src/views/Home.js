import React, {useEffect} from 'react';
import illus from '../assets/illus.svg';
import searchIllus from '../assets/searchIllus.svg';
import {Fade} from 'react-reveal';
import { Link } from 'react-router-dom';
import ButtonInstalPWA from "../components/ButtonInstalPWA";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])
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
                            <ButtonInstalPWA/>
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