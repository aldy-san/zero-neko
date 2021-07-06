import React from 'react'
import { ThemeContext } from './themeContext'
import logoIcon from '../assets/logo-icon.svg';
import logoIconWhite from '../assets/logo-icon-white.svg';

const FallbackLoading = (props) =>{
const { theme } = React.useContext(ThemeContext)
return(
        <div className={(!props.text ? "animate-pulse" : "")+" flex flex-col w-full col-span-full h-"+props.height+" py-"+props.paddingY+" my-"+props.marginY}>
            <img className={!props.text ? "m-auto" : "m-auto mb-4"} src={(theme !== "dark" ? logoIcon : logoIconWhite)} alt="logo-loading" width="100" />
            <div className="mb-auto text-center">
                <p>{props.text}</p>
                <span>{props.span}</span>
            </div>
        </div>
    )
}

export default FallbackLoading;