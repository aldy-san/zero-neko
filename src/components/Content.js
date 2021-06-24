import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import routes from '../routes'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import logoIconWhite from '../assets/logo-icon-white.svg';
import FallbackLoading from './FallbackLoading';

function GetTitle() {
    const location = useLocation().pathname;
    let name = "404 Not Found";
    if (routes.find(o => o.path === location)) 
        name = routes.find(o => o.path === location).name;
    else if(location.split("/")[1] === "kanji"){
        name = location.split("/")[2]
    }
    return name;
}

const Content = () => {
    return(
        <>
            <HelmetProvider>
                <Helmet>
                    <title>{GetTitle() + " - Zeroneko"}</title>
                    <link rel="icon" href={logoIconWhite} />
                </Helmet>
            </HelmetProvider>
            <main className="relative m-0 bg-gray-50 dark:bg-gray-800 dark:text-gray-100 pt-8 pb-16">
                <Suspense fallback={<FallbackLoading height="96" marginY="20"/>}>
                    <Switch>
                        {routes.map((route, idx) => {
                        return route.component && (
                            <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                                <route.component {...props} symbol={route.symbol} title={route.name} />
                            )} />
                        )
                        })}
                    </Switch>
                </Suspense>
            </main>
        </>
    )
}

export default Content;
