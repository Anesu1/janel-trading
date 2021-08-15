import React from 'react'
import Banner from '../Banner';
import About from '../About';
import Services from '../Services';
import Pics from '../Pics';
import Footer from '../Footer';
import Products from '../Products';

function Home() {
    return (
        <>
            <Banner />
            <About />
            <Services />
            <Products />
            <Pics />
            <Footer />
        </>
    )
}

export default Home
