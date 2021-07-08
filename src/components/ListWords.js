import React from 'react'
import { toRomaji } from 'wanakana'
import ChildListWords from './ChildListWords'

const ListWords = (props) =>{
    return(
        <div className="flex flex-col border-b border-gray-400 py-4">
            <div className="flex">
                <p className="whitespace-nowrap text-2xl lg:text-4xl my-auto mr-auto font-semibold">{props.datas.variants[0].written ? props.datas.variants[0].written :""}</p>
                <div  className="text-right w-36 lg:w-96">
                    <div className="mb-3">
                        <p className="text-xs lg:text-sm text-primary mb-2">{props.datas.variants[0].pronounced ? toRomaji(props.datas.variants[0].pronounced) :""}</p>
                        <p className="text-base lg:text-2xl font-semibold">{props.datas.variants[0].pronounced ? props.datas.variants[0].pronounced :""}</p>
                    </div>
                    <div className="flex flex-col">
                    {
                        props.datas.meanings.map((meaning, index) => {
                            return <ChildListWords key={index} num={props.datas.meanings.length > 1 ? index : -1} datas={meaning}/>
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListWords;