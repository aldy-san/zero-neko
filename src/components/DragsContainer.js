import React, {useState} from 'react'
import DragBox from "./DragBox";

const DragsContainer = (props) =>{
    const [data] = useState(shuffle(props.data))
    function shuffle(b) {
        var a = [...b];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
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
        <ul className="flex flex-wrap justify-center grid-flow-col mx-auto gap-1">
            {
                data.map((kana, idx) => {
                    return <DragBox key={idx} kana={kana} dragItem={props.dragItem} category={props.category} correct={containsObject(kana, props.correct)} onSetDragItem={(a) => props.onSetDragItem(a)}/>
                })
            }
        </ul>
    )
}

export default DragsContainer;