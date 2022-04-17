
import React from "react";
import img from '../Footer/map.png';


const Footer = () => {
    return (
        <div className="pt-4 mt-4 bg-dark ">
            <div className='row'>
                <div className='col-6'>
                    <h5 className="title text-danger">NURS SCIENTIFIC PARK</h5>
                    <p className='p-5 text-white'>
                        Thanks for visiting my site,Basically i am a Robotic Engineer.I compelted my Engnr. deg from CUET(EEE).I in my Scientific Zone you will get all kinds of Scientific instruments.I specially work for those type of people who can not walk,talk or move.
                    </p>
                </div>
                <div className='col-6'>
                    <h5 className="title text-danger">Address</h5>
                    <ul className='text-white'>
                        <h6>Office Location:</h6>
                        <img className='w-50' src={img} alt="" />
                        <p>Sparco HighTech Park,Road:3/B,Chittagong</p>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright text-center py-3 text-danger">
                <div fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a className='text-decoration-none' href="">Nur Scientific Zone </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;




