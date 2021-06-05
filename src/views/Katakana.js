import React from 'react';
import { katakana } from "../data/katakana";
import BoxKana from "../components/BoxKana";
import H1 from '../components/H1'

const Katakana = () => {
    return(
        <div className="text-center lg:mx-36">
        <H1 span={"ア"} text={"Katakana"}/>
        <div className="grid grid-cols-1 lg:grid-cols-2 px-3 py-4 lg:p-6 shadow-inner mx-1 bg-gray-200 dark:bg-gray-900 rounded-lg space-y-4 lg:space-y-0">
            <ul className="grid grid-cols-5 auto-rows-min grid-span-1 gap-2 lg:gap-4 lg:p-4">
                {
                    katakana.map((kata, index) => {
                        if (index >= 46) {
                            return true;
                        }
                        return(
                            <BoxKana data={kata} key={index} span={1}/>
                        )
                    })
                }
            </ul>
            <div className="flex flex-col col-span-1 space-y-4 lg:space-y-0">
                <ul className="grid grid-cols-5 auto-rows-min gap-2 lg:gap-4 lg:p-4">
                    {
                        katakana.map((kata, index) => {
                            if (index < 46 || index >= 71) {
                                return true;
                            }
                            return(
                                <BoxKana data={kata} key={index} span={1}/>
                            )
                        })
                    }
                </ul>
                <ul className="grid grid-cols-6 auto-rows-min gap-2 pb-4 lg:gap-4 lg:px-4">
                    {
                        katakana.map((kata, index) => {
                            if (index < 71) {
                                return true;
                            }
                            return(
                                <BoxKana data={kata} key={index} span={2}/>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
    )
}

export default Katakana;