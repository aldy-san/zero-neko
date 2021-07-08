import React from 'react'
import BoxKana from "../components/BoxKana";

const ContainerKana = (props) =>{
return(
        <>
        <ul className="grid grid-cols-5 auto-rows-min grid-span-1 gap-2 lg:gap-4 lg:p-4">
                {
                    props.kana.map((hira, index) => {
                        if (index >= 46) {
                            return true;
                        }
                        return(
                            <BoxKana data={hira} key={index} span={1}/>
                        )
                    })
                }
        </ul>
        <div className="flex flex-col col-span-1 space-y-4 lg:space-y-0">
            <ul className="grid grid-cols-5 auto-rows-min gap-2 lg:gap-4 lg:p-4">
                {
                    props.kana.map((hira, index) => {
                        if (index < 46 || index >= 71) {
                            return true;
                        }
                        return(
                            <BoxKana data={hira} key={index} span={1}/>
                        )
                    })
                }
            </ul>
            <ul className="grid grid-cols-6 auto-rows-min gap-2 pb-4 lg:gap-4 lg:px-4">
                {
                    props.kana.map((hira, index) => {
                        if (index < 71) {
                            return true;
                        }
                        return(
                            <BoxKana data={hira} key={index} span={2}/>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}

export default ContainerKana;