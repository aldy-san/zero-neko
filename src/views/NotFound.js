import React from 'react';

const NotFound = () => {
    return(
        <div className="flex flex-col mx-8 lg:mx-32 lg:mr-52 my-6 lg:my-12 space-y-4 lg:space-y-8">
            <h2 className="font-bold text-xl text-center lg:text-5xl">404 NOT FOUND</h2>
            <h1 className="font-bold text-xl text-center lg:text-6xl">Sorry, this page isn't available.</h1>
            <p className="font-bold text-sm text-center lg:text-xl">Neko couldn't find what you were looking for.<span className="block">Maybe you should head back to the main page.</span></p>
            <a href="/" className="transition-all delay-150 flex self-start rounded-lg font-medium mx-auto mt-4 lg:mt-8 px-6 py-3 lg:px-6 lg:py-4 lg:text-xl bg-gray-200 hover:bg-primary hover:text-white dark:bg-gray-700 dark:bg-opacity-80 dark:hover:bg-primary">
                Back to Homepage
            </a>
        </div>
    )
}

export default NotFound;