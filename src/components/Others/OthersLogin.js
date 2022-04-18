import React from 'react';
import goggle from '../Others/gogle.png'
import github from '../Others/github.png'
import { Card as div } from 'react-bootstrap';
import auth from '../../firebase.init';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router';
const OthersLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorhandleing;
    if (error || error1) {
        errorhandleing =
            <p className='text-danger'>Error: {error ?.message} {error1 ?.message}</p>
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            <div className='mt-4'>
                <h4>Access another way!!</h4>
                <div className='container-form2'>
                    <button
                        onClick={() => signInWithGithub()}
                        className='btn btn-info d-block mx-auto w-50 my-2'>
                        <img style={{ width: '30px' }} className='me-4' src={github} alt="" /> <span className='px-2'>Github Sign In</span></button>

                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-info d-block mx-auto w-50 my-2'>
                        <img style={{ width: '30px' }} className='me-4' src={goggle} alt="" /> <span className='px-2'>Goggle Sign In</span></button>
                </div>
                {errorhandleing}
            </div>
        </div>
    );
};

export default OthersLogin;