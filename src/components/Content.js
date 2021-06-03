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
    let name = routes.find(o => o.path === location).name;
    return name;
}
const loading = (
    <div className="">
      Loading
    </div>
);
const Content = () => {
    return(
        <>
            <HelmetProvider>
                <Helmet>
                    <title>{GetTitle()}</title>
                    <link rel="icon" href="./assets/logo-icon-white.png"/>
                </Helmet>
            </HelmetProvider>
            <div className="bg-gray-50 dark:bg-gray-500 dark:text-white h-96">
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
            </div>
        </>
    )
}

export default Content;
