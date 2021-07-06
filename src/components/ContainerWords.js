import React from 'react'
import FallbackLoading from './FallbackLoading';
const WordDetail = React.lazy(() => import('../components/WordDetail'));

const ContainerWords = (props) =>{
    if (props.data.length === 0) {
        if (props.checkData) {
            return <FallbackLoading height="96" span="Loading for words"/>
        } else {
            return <FallbackLoading height="96" text="Words not found"/>
        }
    }
    return(
        <div className="flex justify-center flex-col space-y-5 ">
            {
                props.data.map((data, idx) => {
                    return <WordDetail key={idx} data={data}/>
                })
            }
            <button>More Words</button>
        </div>
    )
}

export default ContainerWords;