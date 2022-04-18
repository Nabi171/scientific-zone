import React from 'react';
import img from '../Project/support.jpg'
const Projects = () => {
    return (
        <div className='container'>
            <div className='row justify-content-center align-items-center'>


                <div className='col-lg-6 col-sm-12 col-md-12'>
                    <img className='img-fluid shadow' src={img} alt="" />
                </div>
                <div className='col-lg-6 col-sm-12 col-md-12 p-5'>
                    <h1 className='text-danger'>FREE FOR POOR</h1>
                    <p className='me-5'>I made all scientific execories for them who can not walk ,cant move and can't speak,if you are poor i will give you free service from services section.</p>
                </div>

            </div>
        </div>
    );
};

export default Projects;