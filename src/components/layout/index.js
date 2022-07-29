import React from 'react'
import Footer from '../footer'
import Header from '../header'
import CategoryTabs from '../tabs'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <CategoryTabs />
            {children}
            {/* <Footer /> */}
        </>
    )
}

export default Layout