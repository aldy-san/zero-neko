import React from 'react'
import ChildListDetail from './ChildListDetail'
import FallbackLoading from './FallbackLoading'
const ListDetail = (props) =>{
    if (props.datas === undefined) {
        return <FallbackLoading height="96"/>
    }
    return(
        <div className="flex flex-col">
            <h2 className="font-bold mb-3">{props.text}</h2>
            <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
                {
                    props.datas.map((data, index) => {
                        return <ChildListDetail key={index} data={data} />
                    })
                }
            </div>
        </div>
    )
}

export default ListDetail;