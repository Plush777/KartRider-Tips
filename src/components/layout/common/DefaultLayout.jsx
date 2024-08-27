'use client';

import Header from 'components/layout/common/Header';
import Footer from 'components/layout/common/Footer';

export default function DefaultLayout ({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer/>
        </>
    )
}