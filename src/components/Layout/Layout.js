import Footer from './Footer';
import Header from './Header';
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;