import React from 'react'
import DropBox from "./DropBox";

const DropsContainer = (props) =>{
    const containsObject = (obj, list) => {
        var i;
        for (i = 0; i < list.length; i++) {
            if (list[i] === obj) {
                return true;
            }
        }
        return false;
    }
return(
        <ul className="grid lg:grid-rows-5 grid-cols-5 lg:grid-cols-none lg:grid-flow-col gap-2 shadow-md rounded-md">
            {
                props.data.map((kana, idx) => {
                    return  <DropBox 
                                key={idx} 
                                kana={kana} 
                                category={props.category} 
                                correct={containsObject(kana, props.correct)} 
                                onSetDropItem={(a) => props.onSetDropItem(a)}/>
                })
            }
        </ul>
    )
}

export default DropsContainer;