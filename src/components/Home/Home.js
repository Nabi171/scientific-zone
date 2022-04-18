import React from 'react';
import { Button } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';
import Projects from '../Project/Projects';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <h3 className='text-center fw-bolder mt-4 text-danger'>SERVICES</h3><hr className='container' />
            <Services></Services> <br />
            <Footer></Footer>
        </div>
    );
};

export default Home;