import React from 'react'
import {NavLink} from 'react-router-dom';

const BottomNavLink = (props) =>{

    return(
        <li className="flex flex-1 transition-all w-2/12 delay-150 text-center text-gray-400 dark:text-gray-400 focus:outline-none text-sm" >
            <NavLink 
            className="flex flex-col space-y-2 w-full h-full"
            exact={props.path==='/'} 
            aria-label={props.title} 
            to={props.path}
            activeClassName="text-black dark:text-white border-b-2 border-primary">
                <div className="flex flex-col my-auto space-y-1">
                    <span className="text-lg">{props.icon}</span>
                    <span className="">{props.title}</span>
                </div>
            </NavLink>
        </li>
    )
}

export default BottomNavLink;

// const [Icon, setIcon] = useState();
    // const homeIcon = () =>  <div className="flex justify-center mx-auto">
    //                             <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
    //                                 <path stroke="currentColor" d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"></path>
    //                                 <path stroke="currentColor" d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"></path>
    //                             </svg>
    //                         </div>
    // const gameIcon = () =>  <div className="flex justify-center mx-auto fill-current transform scale-75">
    //                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 20.45c0-.932-.575-1.357-1.109-1.357-.332 0-.672.156-.953.438-.284.296-.389.469-.786.469-.47 0-1.152-.534-1.152-1.5s.682-1.5 1.152-1.5c.396 0 .501.173.785.468.281.283.621.438.953.438.534 0 1.109-.425 1.109-1.357v-3.549h3.55c.536 0 .439.139.108.454-.261.245-.657.616-.657 1.394 0 1.039 1.004 2.152 2.5 2.152s2.5-1.113 2.5-2.152c0-.777-.396-1.148-.658-1.394-.333-.317-.425-.454.108-.454h3.55v-13h-24v24h13v-3.55zm0-19.45h10v11h-2.55c-.933 0-1.356.575-1.356 1.109 0 .332.155.672.438.953.294.284.468.388.468.786 0 .47-.534 1.152-1.5 1.152s-1.5-.682-1.5-1.152c0-.397.174-.501.469-.785.282-.281.438-.621.438-.953 0-.534-.424-1.109-1.356-1.109h-3.551v-3.551c0-.535.137-.44.454-.109.245.263.616.659 1.394.659 1.039 0 2.152-1.004 2.152-2.5s-1.113-2.5-2.152-2.5c-.777 0-1.148.396-1.394.659-.317.333-.454.424-.454-.109v-3.55zm-12 0h11v3.55c0 .932.575 1.357 1.109 1.357.463 0 .775-.252 1.075-.565.207-.221.32-.342.664-.342.47 0 1.152.534 1.152 1.5s-.682 1.5-1.152 1.5c-.344 0-.457-.121-.663-.341-.302-.314-.612-.565-1.075-.565-.535-.001-1.11.424-1.11 1.356v3.55h-3.55c-.536 0-.439-.139-.108-.454.262-.245.658-.616.658-1.394 0-1.039-1.004-2.152-2.5-2.152s-2.5 1.113-2.5 2.152c0 .777.396 1.148.658 1.394.333.317.425.454-.108.454h-3.55v-11zm11 22h-11v-10h3.55c.933 0 1.356-.575 1.356-1.109 0-.463-.25-.773-.564-1.075-.221-.207-.342-.32-.342-.664 0-.47.534-1.152 1.5-1.152s1.5.682 1.5 1.152c0 .344-.121.457-.342.663-.314.302-.564.612-.564 1.075 0 .535.424 1.11 1.356 1.11h3.55v3.55c0 .535-.137.44-.454.109-.245-.263-.616-.659-1.394-.659-1.039 0-2.152 1.004-2.152 2.5s1.113 2.5 2.152 2.5c.777 0 1.148-.396 1.394-.659.317-.333.454-.424.454.109v2.55z"/></svg>
    //                         </div>
    // useEffect(() => {
    //     if (props.symbol === "home") {
    //         setIcon(homeIcon);
    //     } else if (props.symbol === "game"){
    //         setIcon(gameIcon);
    //     } else {
    //         setIcon(props.symbol);
    //     }
    // }, [props])