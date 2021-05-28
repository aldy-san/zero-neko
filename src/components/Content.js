import React, { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";
import routes from '../routes'
const loading = (
    <div className="pt-3 text-center">
      Loading
    </div>
);
const Content = () => {
    return(
        <Router>
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
                            <route.component {...props} />
                        )} />
                    )
                    })}
                </Switch>
            </Suspense>
        </Router>
    )
}

export default Content;
