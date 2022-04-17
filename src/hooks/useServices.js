import { useEffect, useState } from "react"
import React from 'react';

//This function is a custom react hook, which is used for getting all the course information;
const useServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json').then(res => res.json()).then(data => setServices(data))
    }, [])
    return [services, setServices]

};

export default useServices;



