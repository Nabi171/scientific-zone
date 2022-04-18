import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div>
            <div className='w-50 mx-auto text-center'>
                <Spinner animation="border" variant="primary" />
            </div>
        </div>
    );
};

export default Loading;