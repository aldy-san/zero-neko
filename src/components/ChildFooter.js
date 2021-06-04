import React from 'react'

const ChildFooter = (props) =>{
    return(
        <div className="col-3">
            <h3 className="font-semibold text-medium tracking-widest">{props.title}</h3>
            <ul className="space-y-2 mt-3">
                {
                    props.data.map((nav, index) => {
                        return <li className="transition-all delay-75 hover:text-primary" key={index}><a href={nav.path} >{nav.title}</a></li>
                    })
                }
            </ul>
        </div>
    )
}

export default ChildFooter;