import React from 'react'
import FallbackLoading from './FallbackLoading';
const BoxKanji = React.lazy(() => import('../components/BoxKanji'));

const ContainerKana = (props) =>{
    if (props.kanjiList.length === 0) {
        if (props.checkData) {
            return <FallbackLoading height="96" span="Loading for kanji"/>
        } else {
            return <FallbackLoading height="96" text="Kanji Not Found" span={"Filter: "+props.filter}/>
        }
    }
    return(
        <>
            {
                props.kanjiList.map((kana, index) =>{
                    return (
                        <BoxKanji key={index} data={kana}/>
                    )
                })
            }
        </>
    )
}

export default ContainerKana;