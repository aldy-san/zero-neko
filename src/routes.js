import React from 'react';

const Home = React.lazy(() => import('./views/Home'));
const NotFound = React.lazy(() => import('./views/NotFound'));
const Kana = React.lazy(() => import('./views/Kana'));
const Search = React.lazy(() => import('./views/Search'));
const Kanji = React.lazy(() => import('./views/Kanji'));
const KanjiDetail = React.lazy(() => import('./views/KanjiDetail'));
const Game = React.lazy(() => import('./views/Game'));
const DnDGame = React.lazy(() => import('./views/DnDGame'));
const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/hiragana', exact: true, symbol: 'あ', name: 'Hiragana', component: Kana },
    { path: '/katakana', exact: true, symbol: 'ア', name: 'Katakana', component: Kana },
    { path: '/search/', exact: true, name: 'Search', component: Search },
    { path: '/kanji/:id', exact: true, name: 'Kanji Detail', component: KanjiDetail },
    { path: '/kanji', exact: true, name: 'Kanji', component: Kanji },
    { path: '/game', exact: true, name: 'Game', component: Game },
    { path: '/game/pairing-kana', exact: true, name: 'Pairing Kana', component: DnDGame },
    { path: '/404', name: '404 Not Found', component: NotFound },
    { path: '*', name: '404 Not Found', component: NotFound },
]

export default routes;