import React, { Suspense } from 'react';
import {
    Route,
    Switch
  } from "react-router-dom";
import routes from '../routes'
import {Helmet, HelmetProvider} from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

function GetTitle() {
    const location = useLocation().pathname;
    let name = "404 Not Found";
    if (routes.find(o => o.path === location)) 
        name = routes.find(o => o.path === location).name;
    return name;
}
const loading = (
    <>
    <div className="">
      Loading
    </div>
    </>
);
const Content = () => {
    return(
        <>
            <HelmetProvider>
                <Helmet>
                    <title>{GetTitle() + " - Zeroneko"}</title>
                    <meta name="google-site-verification" content="Dk1ZxkDtsPCuEmk4LmuPfHuBBuZo_jdXvnEJ5J6U0VA" />
                </Helmet>
            </HelmetProvider>
            <main className="relative m-0 bg-gray-50 dark:bg-gray-800 dark:text-gray-100 pt-8 pb-16">
                <Suspense fallback={loading}>
                    <Switch>
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
