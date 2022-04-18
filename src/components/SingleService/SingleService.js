import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import useServices from '../../hooks/useServices';
import { Card } from 'react-bootstrap';
import '../SingleService/SingleService.css';
const services = [
    {
        "Name": "Artificial Hand",
        "id": 1,
        "price": 500,
        "imageLink": "https://i.ibb.co/9v8jvfN/img1.png",
        "description": "IIf you lost ur hand in accident ,that be so unfortunate for us,Dont panic,we will recover your hand by a artificial hand which will help you little bit."
    },
    {
        "Name": "Artificial Leg",
        "id": 2,
        "price": 600,
        "imageLink": "https://i.ibb.co/Y8Rw26q/img2.jpg",
        "description": "IIf you lost leg in accident ,that be so unfortunate for us,Dont panic,we will recover your leg by a artificial hand which will help you little bit."
    },
    {
        "Name": "Moving Machine",
        "id": 3,
        "price": 1200,
        "imageLink": "https://i.ibb.co/CbY94YX/img3.jpg",
        "description": "If you unable to work by born ,dont be panic,I have a good news for you.I have made a vehicle which help you move from one place to anohter"
    },
    {
        "Name": "Third Eye",
        "id": 4,
        "price": 1300,
        "imageLink": "https://i.ibb.co/tzz0VW0/img4.jpg",
        "description": "If you unable to see,so dont be tensed,My team already working on it.This machine help you to reconize anything ,so you have to wait a few months"
    },
    {
        "Name": "Side Talk",
        "id": 5,
        "price": 1000,
        "imageLink": "https://i.ibb.co/8mSx38g/img5.jpg",
        "description": "If you unable to talk,so dont be tensed.We have invented a device for you which will help you to help connecting with your Brain signals."
    },
    {
        "Name": "Pelvic Dyalysis",
        "id": 6,
        "price": 2000,
        "imageLink": "https://i.ibb.co/34Nb2Cr/img6.jpg",
        "description": "If your kidney cant work properly,Doctor already suggested make dyalycis evey week which is very costly,so the pelvic device help you make Dyalysis."
    }
];


const SingleService = () => {




    const { id } = useParams();

    const singleOne = services.find(service => service.id == id);

    const navigate = useNavigate();


    return (
        <div className='container'>

            <Card className='w-50 mx-auto my-5 '>
                <br />
                <Card.Img variant="top" src={singleOne.imageLink} className='img-fluid' />
                <Card.Body>
                    <Card.Title className='fw-bold'>{singleOne.Name}</Card.Title>
                    <Card.Text style={{ color: '#fefbe9 ' }}>
                        Price: ${singleOne.price}
                    </Card.Text>

                    <hr />
                    <p>{singleOne.description}</p>
                </Card.Body>

            </Card>

        </div>
    );
};

export default SingleService;


