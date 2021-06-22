import React, { Suspense } from 'react';
import {
    Route,
    Switch
  } from "react-router-dom";
import routes from '../routes'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { useLocation } from 'react-router-dom'
import logoIconWhite from '../assets/logo-icon-white.svg';

function GetTitle() {
    const location = useLocation().pathname;
    let name = "404 Not Found";
    if (routes.find(o => o.path === location)) 
        name = routes.find(o => o.path === location).name;
    return name;
}
const loading = (
    <>
        <div className="animate-pulse flex h-96 my-20">
            <img className="m-auto" src={logoIconWhite} alt="logo-loading" width="100" />
        </div>
    </>
);
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
                <Suspense fallback={loading}>
                    <Switch>
                        <Route path="/loading" name="loading">
                            {loading}
                        </Route>
                        {routes.map((route, idx) => {
                        return route.component && (
                            <Route
                            key={idx}
                            path={route.path}
                            exact={route.exact}
                            name={route.name}
                            render={props => (
                                <route.component {...props} title={route.name} />
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
