import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <>
            <div className='banner-img mb-3'>
                <div className="banner-overlay banner-text py-5 d-flex flex-column align-items-center fw-bold">
                    <h6 className='display-5 text-white text-center p-3 mt-1 fw-bold'>NUR'S SCIEN<span className='text-danger'>TIFIC ZONE</span></h6>

                    <p className='text-center px-4 lead fw-bold text-white p-4'>If you unable to walk,unable to move your hand or if you have no hand or accidently you lost your leg or hand,Dont panic ,I will with you.So you knok me for your health recovery with scientic where i will provide you arficial hand,leg which you needed.</p>

                    <Link className='btn btn-outline-danger' to='/services' >Service</Link>


                </div>
            </div>
        </>
    );
};

export default Banner;