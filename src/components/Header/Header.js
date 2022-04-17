import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import img from '../Header/Logi.png';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <nav>

            <Navbar className='nav-color' expand="lg"  >
                <Container>
                    <Navbar.Brand href="#home" className='fw-bold'>ABRAR NU<span className='text-danger'>RS ZONE
                    <img src={img} className='logo-img' alt="" />
                    </span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <NavLink className={({ isActive }) => isActive ? "active-link" : "link"}

                                to="/home">HOME</NavLink >

                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/services">SERVICES</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/blogs">BLOGS</NavLink >
                            <NavLink
                                className={({ isActive }) => isActive ? "active-link" : "link"}
                                to="/about">ABOUT</NavLink >

                            {user ?
                                <NavLink onClick={() => signOut(auth)}
                                    className={({ isActive }) => isActive ? "active-link" : "link"}
                                    to="/signup">SIGN OUT</NavLink > :
                                <NavLink
                                    className={({ isActive }) => isActive ? "active-link" : "link"}
                                    to="/login">LOGIN</NavLink >}



                            {/* {
                                user ?
                                    <button onClick={() => signOut(auth)}>Sign Out</button> :
                                    <Link to="/login">Login</Link>
                            } */}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </nav>


    );
};

export default Header;