import React, { useState, useEffect, Suspense} from 'react';
import { hiragana } from "../data/hiragana";
import { katakana } from "../data/katakana";
import ContainerKana from "../components/ContainerKana";
import H1 from '../components/H1'
import FallbackLoading from '../components/FallbackLoading';

const Kana = (props) => {
    const [kana, setKana] = useState([]);
    useEffect(() => {
        if (props.title === "Hiragana") {
            setKana(hiragana);
        } else if (props.title === "Katakana"){
            setKana(katakana);
        }
    }, [props.title])
    return(
        <div className="text-center lg:mx-36">
            <H1 span={props.symbol} text={props.title}/>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-3 py-4 lg:p-6 shadow-inner mx-1 bg-gray-200 dark:bg-gray-900 rounded-lg space-y-4 lg:space-y-0">
                <Suspense fallback={<FallbackLoading height="96"/>}>
                    <ContainerKana kana={kana}/>
                </Suspense>
            </div>
        </div>
    )
}

export default Kana;