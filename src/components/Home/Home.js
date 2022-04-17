import React from 'react';
import { Button } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;