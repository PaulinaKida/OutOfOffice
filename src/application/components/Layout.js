import React from 'react';
import Menu from './Menu'
import Footer from "./Footer";

const Layout = function(props) {
    return(
        <>
            <Menu />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

export default Layout;