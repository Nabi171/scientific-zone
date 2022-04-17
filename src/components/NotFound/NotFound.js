import React from 'react';
import { Card } from 'react-bootstrap';
import img from './err.png'
const NotFound = () => {
    return (
        <div className='py-5 d-flex flex-column align-items-center'>
            <Card>
                <Card.Title> <h2 className='display-1 text-center'>Error 404</h2></Card.Title>
                <hr />
                <h3 className='text-center'>Page not found</h3>
                <img src={img} alt="" />
            </Card>

        </div>
    );
};

export default NotFound;