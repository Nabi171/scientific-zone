import React, { useState } from 'react';

import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import OthersLogin from '../Others/OthersLogin';




const Login = () => {
    const [
        signInWithEmailAndPassword,
        user
    ] = useSignInWithEmailAndPassword(auth);

    const [email, SetEmail] = useState();
    const [password, SetPassword] = useState();
    const handleEmail = e => {
        SetEmail(e.target.value);
    }
    const navigate = useNavigate();
    if (user) {
        navigate('/home')
    }
    const handlePassword = e => {
        SetPassword(e.target.value);
    }

    const handleUser = async (e) => {
        e.preventDefault();
        await signInWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-all mx-auto container ' >
            <br />
            <form onSubmit={handleUser} className="container-form text-center form-all">
                <div className="form-title">LOGIN</div>
                <div className="inputs-form">
                    <label className='form-label'>EMAIL</label>
                    <input onBlur={handleEmail} className="form-input" type="email" placeholder="example@test.com" />
                    <label className='form-label'>PASSWORD</label>
                    <input onBlur={handlePassword} className="form-input" type="password" placeholder="Min 6 charaters long" />
                    <br />
                    <button className='form-btn' type="submit">LOGIN</button>
                </div>

            </form>
            <br />
            <p>You are new user!please signup. <Link to='/signup' className='text-danger pe-auto text-decoration-none fw-bold'>Please SignUp</Link></p>
            <br />
            <OthersLogin></OthersLogin>
        </div>
    );
};

export default Login;