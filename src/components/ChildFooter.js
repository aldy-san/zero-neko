import React from 'react'

const ChildFooter = (props) =>{
    return(
        <div className="col-3">
            <h1 className="font-semibold text-sm lg:text-base text-medium tracking-widest">{props.title}</h1>
            <ul className="space-y-2 mt-2 lg:mt-3">
                {
                    props.data.map((nav, index) => {
                        return <li className="transition-all delay-75 text-sm lg:text-base hover:text-primary py-1" key={index}>
                                    <a className="" href={nav.path} >{nav.title}</a>
                                </li>
                    })
                }
            </ul>
        </div>
    )
}

export default ChildFooter;