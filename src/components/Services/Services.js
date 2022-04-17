import React, { useState, useEffect } from 'react';
import ShowService from '../ShowService/ShowService';
import useServices from '../../hooks/useServices';

const Services = () => {
    const [services, setServices] = useServices();
    return (
        <div className='container'>
            <div className='row'>
                {
                    services.map(service => <ShowService key={service.id} service={service}></ShowService>)
                }
            </div>
        </div>
    );
};

export default Services;