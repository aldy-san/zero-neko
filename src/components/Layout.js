import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import { ThemeProvider } from './themeContext'

const Layout = () => {
    return(
        <ThemeProvider>
            <Header/>
            <Content/>
            <Footer/>
        </ThemeProvider>
    )
}
export default Layout;