import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const NotFound = React.lazy(() => import('./views/NotFound'));
const Hiragana = React.lazy(() => import('./views/Hiragana'));
const Katakana = React.lazy(() => import('./views/Katakana'));
const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/hiragana', name: 'Hiragana', component: Hiragana },
    { path: '/katakana', name: 'Katakana', component: Katakana },
    { path: '*', name: '404 Not Found', component: NotFound },
]

export default routes;