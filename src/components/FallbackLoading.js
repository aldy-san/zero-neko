import React from 'react'
import { ThemeContext } from './themeContext'
import logoIcon from '../assets/logo-icon.svg';
import logoIconWhite from '../assets/logo-icon-white.svg';

const FallbackLoading = (props) =>{
const { theme } = React.useContext(ThemeContext)
return(
        <div className={"animate-pulse flex w-full col-span-full h-"+props.height+" py-"+props.paddingY+" my-"+props.marginY}>
            <img className="m-auto" src={(theme !== "dark" ? logoIcon : logoIconWhite)} alt="logo-loading" width="100" />
        </div>
    )
}

export default FallbackLoading;