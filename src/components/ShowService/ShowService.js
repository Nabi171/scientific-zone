import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import './ShowService.css';
import { useNavigate } from 'react-router';
const ShowService = (props) => {
    const { Name, imageLink, description, id, price } = props.service;
    const navigate = useNavigate();
    return (
        <div className='col-lg-4 col-12 col-sm-12 col-md-6 g-4'>
            <Col>
                <Card className='cards-container'>
                    <Card.Img variant="top" className='img-container   mx-auto m-2 ' src={imageLink} />
                    <Card.Body>
                        <Card.Title >{Name}</Card.Title>
                        <hr />
                        <Card.Text>
                            <span className='fw-bold'>Service:</span>{description}
                        </Card.Text>
                        <Card.Text>
                            <span className='fw-bold'>Price:</span>${price}
                        </Card.Text>

                    </Card.Body>
                    <button onClick={() => navigate('/singleservice/' + id)} className=' btn btn-outline-danger fw-bold'>CheckOut</button>
                </Card>
            </Col>
        </div>
    );
};

export default ShowService;