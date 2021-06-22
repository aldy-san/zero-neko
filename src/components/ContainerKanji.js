import React from 'react'
import FallbackLoading from './FallbackLoading';
const BoxKanji = React.lazy(() => import('../components/BoxKanji'));

const ContainerKana = (props) =>{
    if (props.kanjiList.length === 0) {
        return <FallbackLoading height="96"/>
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