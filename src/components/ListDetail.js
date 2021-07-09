import React from 'react'
import ChildListDetail from './ChildListDetail'
const ListDetail = (props) =>{
    if (props.datas === undefined) {
        return <></>
    } 
    return(
        <div className={(props.datas.length === 0 ? "hidden " : "")+"flex flex-col"}>
            <h2 className="font-bold mb-3">{props.text ? props.text : ""}</h2>
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