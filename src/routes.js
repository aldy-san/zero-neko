import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const NotFound = React.lazy(() => import('./views/NotFound'));
const Kana = React.lazy(() => import('./views/Kana'));
const Kanji = React.lazy(() => import('./views/Kanji'));
const KanjiDetail = React.lazy(() => import('./views/KanjiDetail'));
const Words = React.lazy(() => import('./views/Words'));
const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/hiragana', symbol: 'あ', name: 'Hiragana', component: Kana },
    { path: '/katakana', symbol: 'ア', name: 'Katakana', component: Kana },
    { path: '/kanji/:id', name: 'Kanji Detail', component: KanjiDetail },
    { path: '/kanji', name: 'Kanji', component: Kanji },
    { path: '/words', name: 'Words', component: Words },
    { path: '/404', name: '404 Not Found', component: NotFound },
    { path: '*', name: '404 Not Found', component: NotFound },
]

export default routes;